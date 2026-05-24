import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  categorySlug: string;
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  category?: string;
  categorySlug?: string;
  tags?: string[];
};

function estimateReadingTime(content: string) {
  const wordLikeUnits = content.replace(/\s+/g, "").length;
  const minutes = Math.max(1, Math.ceil(wordLikeUnits / 500));
  return `${minutes} 分鐘閱讀`;
}

function readPostFile(fileName: string): PostMeta & { content: string } {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Frontmatter;

  if (
    !frontmatter.title ||
    !frontmatter.description ||
    !frontmatter.date ||
    !frontmatter.category ||
    !frontmatter.categorySlug
  ) {
    throw new Error(`文章 ${fileName} 缺少必要 frontmatter。`);
  }

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    category: frontmatter.category,
    categorySlug: frontmatter.categorySlug,
    tags: frontmatter.tags || [],
    readingTime: estimateReadingTime(content),
    content
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPostFile)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      category: post.category,
      categorySlug: post.categorySlug,
      tags: post.tags,
      readingTime: post.readingTime
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const post = readPostFile(`${slug}.md`);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    category: post.category,
    categorySlug: post.categorySlug,
    tags: post.tags,
    readingTime: post.readingTime,
    contentHtml
  };
}

export function getAllCategories() {
  const categoryMap = new Map<
    string,
    { name: string; slug: string; count: number }
  >();

  for (const post of getAllPosts()) {
    const current = categoryMap.get(post.categorySlug);
    categoryMap.set(post.categorySlug, {
      name: post.category,
      slug: post.categorySlug,
      count: (current?.count || 0) + 1
    });
  }

  return Array.from(categoryMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "zh-Hant")
  );
}

export function getPostsByCategory(categorySlug: string) {
  return getAllPosts().filter((post) => post.categorySlug === categorySlug);
}
