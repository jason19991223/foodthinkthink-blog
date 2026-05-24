"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import type { PostMeta } from "@/lib/posts";

export function SearchPosts({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("全部");

  const categories = useMemo(
    () => ["全部", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts]
  );

  const filteredPosts = posts.filter((post) => {
    const normalizedQuery = query.trim().toLowerCase();
    const matchesCategory = category === "全部" || post.category === category;
    const searchableText = [
      post.title,
      post.description,
      post.category,
      ...post.tags
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  return (
    <section className="space-y-6">
      <div className="grid gap-3 rounded-lg border border-ink/10 bg-white p-4 shadow-soft md:grid-cols-[1fr_220px]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">
            搜尋文章
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="輸入關鍵字、標籤或主題"
            className="w-full rounded-md border border-ink/15 px-3 py-2 text-ink outline-none transition placeholder:text-ink/40 focus:border-sage focus:ring-2 focus:ring-leaf"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">
            分類
          </span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-md border border-ink/15 bg-white px-3 py-2 text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-leaf"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {filteredPosts.length === 0 ? (
        <p className="rounded-lg border border-ink/10 bg-white p-6 text-center text-ink/70">
          找不到符合條件的文章，請換個關鍵字試試。
        </p>
      ) : null}
    </section>
  );
}
