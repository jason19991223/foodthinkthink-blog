import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "食事求識網站隱私權政策。"
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold text-sage">Privacy</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">隱私權政策</h1>
      <div className="mt-6 space-y-5 rounded-lg border border-ink/10 bg-white p-6 leading-8 text-ink/75 shadow-soft">
        <p>
          食事求識重視讀者的隱私。本頁說明本站可能收集或使用的資訊，以及第三方服務可能如何使用 cookies 或類似技術。
        </p>
        <h2 className="text-xl font-bold text-ink">本站收集的資訊</h2>
        <p>
          本站目前不提供會員系統、付款功能或後台登入功能，也不會主動要求讀者提供姓名、電話、地址等個人資料。
        </p>
        <p>
          若你透過 Email、Instagram 或其他方式主動聯絡本站，你提供的聯絡資訊僅用於回覆來訊與後續溝通。
        </p>
        <h2 className="text-xl font-bold text-ink">流量分析</h2>
        <p>
          本站使用 Vercel Web Analytics 了解網站瀏覽情況，例如頁面瀏覽量、熱門頁面與基本流量來源。這些資料用於改善網站內容與閱讀體驗。
        </p>
        <h2 className="text-xl font-bold text-ink">留言功能</h2>
        <p>
          本站文章頁使用 Giscus 提供留言功能。Giscus 以 GitHub Discussions 為基礎，若你選擇留言，可能需要登入 GitHub，留言內容與 GitHub 帳號資訊會依 GitHub 與 Giscus 的服務規則處理。
        </p>
        <h2 className="text-xl font-bold text-ink">Cookies 與第三方廣告</h2>
        <p>
          本站未來可能使用 Google AdSense 或其他第三方廣告服務。第三方廠商，包括 Google，可能會使用 cookies 根據使用者先前造訪本站或其他網站的紀錄提供廣告。
        </p>
        <p>
          Google 使用廣告 cookies，可讓 Google 及其合作夥伴根據使用者造訪本站或網際網路上其他網站的情況提供廣告。使用者可以前往 Google 廣告設定選擇退出個人化廣告。
        </p>
        <p>
          若本站使用其他第三方廣告網路，該等第三方也可能使用 cookies 或類似技術提供廣告、衡量廣告成效或防止重複顯示廣告。
        </p>
        <h2 className="text-xl font-bold text-ink">外部連結</h2>
        <p>
          本站文章可能包含主管機關、研究資料、社群平台或其他外部網站連結。讀者點擊外部連結後，該網站的隱私權政策與資料處理方式不屬於本站控制範圍。
        </p>
        <h2 className="text-xl font-bold text-ink">政策更新</h2>
        <p>
          本站可能因功能調整、服務變更或法規要求更新本隱私權政策。更新後將公布於本頁。
        </p>
      </div>
    </section>
  );
}
