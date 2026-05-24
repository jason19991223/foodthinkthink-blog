import Link from "next/link";
import { formatPostDate } from "@/lib/format";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-sage/40">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink/65">
        <Link
          href={`/categories/${post.categorySlug}`}
          className="rounded-md bg-leaf px-2.5 py-1 text-ink hover:bg-sage hover:text-white"
        >
          {post.category}
        </Link>
        <span>{formatPostDate(post.date)}</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-4 text-xl font-bold leading-snug text-ink">
        <Link href={`/posts/${post.slug}`} className="hover:text-sage">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 leading-7 text-ink/75">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-ink/10 px-2 py-1 text-xs text-ink/65"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
