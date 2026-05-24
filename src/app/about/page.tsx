import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我",
  description: "了解食事求識作者背景、寫作理念與內容方向。"
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold text-sage">About</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">關於食事求識</h1>
      <div className="mt-6 space-y-5 rounded-lg border border-ink/10 bg-white p-6 leading-8 text-ink/75 shadow-soft">
        <h2 className="text-xl font-bold text-ink">關於作者</h2>
        <p>
          作者畢業於輔仁大學食品科學系。因為等待兵單期間有較多空閒時間，也希望分享自己所學，便開始整理食品與保健食品相關知識，並透過這個部落格把內容傳播出去。
        </p>
        <p>
          我希望民眾能有更多取得資訊的渠道，不只依賴單一來源，也能避免受到網路謠言或風向誤導。
        </p>
        <h2 className="text-xl font-bold text-ink">學歷、證照與專業訓練</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>輔仁大學食品科學系畢業</li>
          <li>HACCP 60A + 60B</li>
          <li>保健食品工程師初級</li>
          <li>初級食品品保工程師</li>
          <li>中餐烹調丙級技術士</li>
        </ul>
        <h2 className="text-xl font-bold text-ink">寫作理念</h2>
        <p>
          因為有多餘的時間，所以想把一些知識紀錄下來，並分享出去。除了時不時分享關於食品、保健食品的知識，也希望讓消費者更了解與日常生活相關的「食」。
        </p>
        <p>
          文章內容與題材主要由我自行整理與撰寫。不過目前只有一個人經營，所以速度以及更新頻率仍在摸索中，敬請見諒 Orz。
        </p>
        <p>
          如果對於內容有所疑問，或是有補充、討論與不同觀點，都很歡迎在文章下方留言一起交流。
        </p>
      </div>
    </section>
  );
}
