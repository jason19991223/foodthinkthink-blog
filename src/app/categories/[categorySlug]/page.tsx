import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import {
  getAllCategories,
  getPostsByCategory
} from "@/lib/posts";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    categorySlug: category.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getAllCategories().find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return {
      title: "分類"
    };
  }

  return {
    title: `${category.name} 分類`,
    description: `瀏覽「${category.name}」分類下的食品知識文章。`
  };
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = getAllCategories().find(
    (item) => item.slug === categorySlug
  );
  const posts = getPostsByCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold text-sage">Category</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">{category.name}</h1>
        <p className="mt-3 text-ink/70">共 {category.count} 篇文章</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
