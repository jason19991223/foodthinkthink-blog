import Link from "next/link";
import Image from "next/image";
import { PostCard } from "@/components/PostCard";
import { getAllCategories, getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);
  const categories = getAllCategories();

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              Food Safety Knowledge
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
              食品安全、法規、檢驗與加工知識的專業整理
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
              以乾淨、可信任的方式，陪你理解食品產業中的安全管理、標示法規、檢驗觀念與加工實務。
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70">
              用食品科學的角度，整理生活中看得到、吃得到、也常被誤解的食品知識。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/posts"
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-sage"
              >
                瀏覽文章
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-leaf"
              >
                關於本站
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
              <Image
                src="/site-cover.webp"
                alt="食事求識封面照片"
                width={1440}
                height={1440}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="rounded-lg border border-ink/10 bg-mist p-6">
              <h2 className="text-lg font-bold text-ink">本站主題</h2>
              <div className="mt-5 grid gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="flex items-center justify-between rounded-md bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm transition hover:bg-leaf"
                  >
                    <span>{category.name}</span>
                    <span className="text-ink/55">{category.count} 篇</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-sage">最新文章</p>
            <h2 className="mt-2 text-2xl font-bold text-ink">近期知識整理</h2>
          </div>
          <Link href="/posts" className="text-sm font-semibold text-ink hover:text-sage">
            查看全部
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
