"use client";

import { useMemo, useState } from "react";

type ShareActionsProps = {
  title: string;
  description: string;
  url: string;
};

export function ShareActions({ title, description, url }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const encoded = useMemo(
    () => ({
      title: encodeURIComponent(title),
      text: encodeURIComponent(description),
      url: encodeURIComponent(url)
    }),
    [description, title, url]
  );

  async function shareWithSystem() {
    if (!navigator.share) {
      await copyUrl();
      return;
    }

    try {
      await navigator.share({
        title,
        text: description,
        url
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      await copyUrl();
    }
  }

  async function copyUrl() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="mt-8 rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink">分享文章</h2>
          <p className="mt-1 text-sm leading-6 text-ink/65">
            將這篇文章分享給需要的人，或複製連結收藏。
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={shareWithSystem}
            className="rounded-md bg-ink px-3 py-2 text-sm font-semibold text-white transition hover:bg-sage"
          >
            系統分享
          </button>
          <button
            type="button"
            onClick={copyUrl}
            className="rounded-md border border-ink/15 px-3 py-2 text-sm font-semibold text-ink transition hover:bg-leaf"
          >
            {copied ? "已複製" : "複製連結"}
          </button>
          <a
            href={`https://social-plugins.line.me/lineit/share?url=${encoded.url}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink/15 px-3 py-2 text-sm font-semibold text-ink transition hover:bg-leaf"
          >
            LINE
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encoded.url}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink/15 px-3 py-2 text-sm font-semibold text-ink transition hover:bg-leaf"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encoded.title}&url=${encoded.url}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink/15 px-3 py-2 text-sm font-semibold text-ink transition hover:bg-leaf"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}
