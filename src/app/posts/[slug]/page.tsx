import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Comments } from "@/components/Comments";
import { formatPostDate } from "@/lib/format";
import {
  getAllPosts,
  getPostBySlug
} from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "文章"
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags
    }
  };
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getAllPosts().find((item) => item.slug === slug);

  if (!meta) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/posts" className="text-sm font-semibold text-sage hover:text-ink">
        回文章列表
      </Link>
      <div className="mt-6">
        <Link
          href={`/categories/${post.categorySlug}`}
          className="rounded-md bg-leaf px-3 py-1.5 text-sm font-semibold text-ink hover:bg-sage hover:text-white"
        >
          {post.category}
        </Link>
        <h1 className="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink/75">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-ink/60">
          <span>{formatPostDate(post.date)}</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-ink/10 px-2.5 py-1 text-xs text-ink/65"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div
        className="article-content mt-10 rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <Comments />
    </article>
  );
}
