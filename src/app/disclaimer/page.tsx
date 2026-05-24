import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免責聲明",
  description: "食事求識網站內容使用免責聲明。"
};

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold text-sage">Disclaimer</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">免責聲明</h1>
      <div className="mt-6 space-y-5 rounded-lg border border-ink/10 bg-white p-6 leading-8 text-ink/75 shadow-soft">
        <p>
          本站內容僅供一般教育與資訊參考，不構成法律、醫療、檢驗認證或食品安全管理之專業意見。
        </p>
        <p>
          食品法規、標準與主管機關公告可能隨時間更新。引用或採取任何行動前，請以主管機關最新正式公告、法規資料庫或合格專業人士意見為準。
        </p>
      </div>
    </section>
  );
}
