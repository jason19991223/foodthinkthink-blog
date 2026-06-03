import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "資料來源與引用原則",
  description:
    "食事求識的資料來源、引用方式、內容更新與勘誤原則。"
};

export default function SourcePolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold text-sage">Editorial Policy</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">
        資料來源與引用原則
      </h1>
      <div className="mt-6 space-y-6 rounded-lg border border-ink/10 bg-white p-6 leading-8 text-ink/75 shadow-soft">
        <p>
          食事求識以食品科學的角度整理食品安全、食品法規、食品檢驗、食品加工與保健食品相關知識。本站文章由作者整理、撰寫與編修，目標是提供清楚、可追溯且適合一般讀者理解的食品知識內容。
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink">資料來源優先順序</h2>
          <p>本站撰寫文章時，會優先參考下列資料來源：</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>政府機關公告、新聞稿與問答資料，例如食藥署、農業部、國民健康署等。</li>
            <li>全國法規資料庫與主管機關發布之食品相關法規、標準或指引。</li>
            <li>教科書、專業書籍、學術文獻與具可信度之食品科學資料。</li>
            <li>必要時參考國際機構資料，例如 WHO、FAO、FDA、EFSA 等。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink">引用與標示方式</h2>
          <p>
            文章若引用特定資料，會盡量於文末列出參考資料或於內文中標示來源。若內容涉及法規、攝取量、食品安全風險或官方定義，會優先提供可查證的官方或專業來源。
          </p>
          <p>
            本站不刻意複製完整原文，而是以整理、摘要與解釋的方式呈現。讀者若需要正式依據，仍建議回到原始公告、法規條文或主管機關網站確認最新版本。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink">內容更新原則</h2>
          <p>
            食品法規、產品標示規範、營養建議與主管機關公告可能隨時間更新。本站會盡力維持內容正確，但不保證所有文章在閱讀當下皆為最新狀態。
          </p>
          <p>
            若文章內容涉及容易變動的法規或政策，讀者應以主管機關最新公告、全國法規資料庫或專業人士意見為準。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink">勘誤與補充</h2>
          <p>
            若讀者發現文章內容有錯誤、資料過期、引用不完整或可補充之處，歡迎透過聯絡頁提供意見。本站會視情況修正、補充或更新文章內容。
          </p>
          <p>
            勘誤與合作聯絡方式請見{" "}
            <Link href="/contact" className="font-semibold text-ink hover:text-sage">
              聯絡頁
            </Link>
            。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink">內容限制與免責</h2>
          <p>
            本站內容僅供教育與資訊參考，不構成醫療、法律、食品安全管理、檢驗認證或商業決策建議。若涉及疾病、用藥、特殊飲食、法規適用或產品責任，請諮詢合格專業人士。
          </p>
          <p>
            更多使用限制請參考{" "}
            <Link
              href="/disclaimer"
              className="font-semibold text-ink hover:text-sage"
            >
              免責聲明
            </Link>
            。
          </p>
        </section>
      </div>
    </section>
  );
}
