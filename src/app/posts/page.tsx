import type { Metadata } from "next";
import { SearchPosts } from "@/components/SearchPosts";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "文章列表",
  description: "瀏覽食事求識的食品安全、食品法規、食品檢驗與食品加工文章。"
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold text-sage">Articles</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">文章列表</h1>
        <p className="mt-3 max-w-2xl leading-7 text-ink/70">
          依分類、標籤或關鍵字搜尋食品安全與食品產業知識。
        </p>
      </div>
      <SearchPosts posts={posts} />
    </section>
  );
}
