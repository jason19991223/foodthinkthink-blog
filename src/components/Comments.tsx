"use client";

import { useEffect, useRef } from "react";

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "jason19991223/foodthinkthink-blog",
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "R_kgDOSlpnMQ",
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "Announcements",
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "DIC_kwDOSlpnMc4C9q4N"
};

function hasGiscusConfig() {
  return Boolean(
    giscusConfig.repo &&
      giscusConfig.repoId &&
      giscusConfig.category &&
      giscusConfig.categoryId
  );
}

export function Comments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !hasGiscusConfig()) {
      return;
    }

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", giscusConfig.repo || "");
    script.setAttribute("data-repo-id", giscusConfig.repoId || "");
    script.setAttribute("data-category", giscusConfig.category || "");
    script.setAttribute("data-category-id", giscusConfig.categoryId || "");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "zh-TW");
    script.setAttribute("data-loading", "lazy");

    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="mt-10 rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-2xl font-bold text-ink">留言討論</h2>
      <p className="mt-2 text-sm leading-6 text-ink/65">
        歡迎分享想法、補充資料或提出問題。
      </p>
      {hasGiscusConfig() ? (
        <div ref={containerRef} className="mt-6" />
      ) : (
        <div className="mt-6 rounded-md border border-dashed border-ink/20 bg-mist p-4 text-sm leading-7 text-ink/70">
          留言功能已預留，尚需完成 Giscus 與 GitHub Discussions 設定後才會開放。
          目前可以先透過{" "}
          <a
            href="https://www.instagram.com/food_thinkthink"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sage underline underline-offset-4 hover:text-ink"
          >
            Instagram @food_thinkthink
          </a>{" "}
          聯絡作者。
        </div>
      )}
    </section>
  );
}
