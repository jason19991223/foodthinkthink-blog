import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡",
  description: "聯絡食事求識。"
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold text-sage">Contact</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">聯絡我</h1>
      <div className="mt-6 rounded-lg border border-ink/10 bg-white p-6 leading-8 text-ink/75 shadow-soft">
        <p>
          歡迎來信交流食品安全、食品法規、食品檢驗或食品加工相關主題。
        </p>
        <p className="mt-4">
          若文章內容有補充、勘誤、資料更新建議，或有合作邀約，也歡迎透過以下方式聯繫。
        </p>
        <p className="mt-4">
          Email：
          <a
            className="font-semibold text-sage underline underline-offset-4 hover:text-ink"
            href="mailto:jason881223@gmail.com"
          >
            jason881223@gmail.com
          </a>
        </p>
        <p className="mt-4">
          Instagram：
          <a
            className="font-semibold text-sage underline underline-offset-4 hover:text-ink"
            href="https://www.instagram.com/food_thinkthink"
            rel="noreferrer"
            target="_blank"
          >
            @food_thinkthink
          </a>
        </p>
      </div>
    </section>
  );
}
