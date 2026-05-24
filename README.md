# 食事求識

一個可部署到 Vercel 的食品安全知識型部落格 MVP，使用 Next.js、TypeScript、Tailwind CSS 與 Markdown 管理文章。

## 功能

- 首頁、文章列表、分類頁、單篇文章頁
- 關於我、聯絡頁、免責聲明、隱私權政策
- Markdown 文章管理
- 文章分類與標籤
- 前端即時搜尋
- 手機版 RWD
- SEO metadata、`sitemap.xml`、`robots.txt`
- 可直接部署到 Vercel

## 開發環境

```bash
npm install
npm run dev
```

開啟 `http://localhost:3000` 查看網站。

## 新增文章

所有文章放在 `content/posts`，檔名會成為文章網址。例如：

```text
content/posts/my-new-article.md
```

文章網址會是：

```text
/posts/my-new-article
```

每篇 Markdown 文章最上方都需要 frontmatter：

```md
---
title: "文章標題"
description: "文章摘要，會顯示在列表與 SEO description"
date: "2026-05-21"
category: "食品安全"
categorySlug: "food-safety"
tags:
  - HACCP
  - 食品衛生
---

文章內容從這裡開始。
```

欄位說明：

- `title`：文章標題
- `description`：文章摘要與 SEO 描述
- `date`：發布日期，格式建議使用 `YYYY-MM-DD`
- `category`：分類顯示名稱
- `categorySlug`：分類網址用 slug，例如 `food-safety`
- `tags`：標籤列表，可用於搜尋與文章頁顯示

新增分類時，只要在文章中使用新的 `category` 與 `categorySlug`，系統會自動產生分類頁。

## 修改網站基本資料

主要設定在 `src/app/layout.tsx`：

- 網站名稱
- SEO 預設標題與描述
- 導覽列
- 頁尾文字

聯絡信箱在 `src/app/contact/page.tsx`，上線前請改成正式信箱。

正式上線後，建議在 Vercel 環境變數加入：

```text
NEXT_PUBLIC_SITE_URL=https://你的網域
```

這會讓 sitemap 與 SEO URL 使用正式網域。

## 部署到 Vercel

1. 將專案推到 GitHub、GitLab 或 Bitbucket。
2. 登入 Vercel。
3. 點選 `Add New Project`。
4. 選擇此專案的 Git repository。
5. Framework Preset 選擇 `Next.js`。
6. Build Command 使用預設 `next build`。
7. Output Directory 保持預設。
8. 點選 Deploy。

部署完成後，Vercel 會提供一個 `*.vercel.app` 網址。

## 綁定自有網域

1. 在 Vercel 專案中進入 `Settings`。
2. 選擇 `Domains`。
3. 輸入你的自有網域，例如 `example.com` 或 `www.example.com`。
4. 依照 Vercel 顯示的 DNS 指示，到你的網域註冊商後台設定紀錄。
5. 常見設定如下：

```text
A Record
Name: @
Value: 76.76.21.21

CNAME Record
Name: www
Value: cname.vercel-dns.com
```

6. 回到 Vercel 等待驗證完成。
7. 在 Vercel 的 Environment Variables 加上：

```text
NEXT_PUBLIC_SITE_URL=https://你的網域
```

8. 重新部署一次，讓 sitemap 與 SEO URL 更新為正式網域。

DNS 生效可能需要幾分鐘到 24 小時不等。

## 專案結構

```text
content/posts            Markdown 文章
src/app                  Next.js App Router 頁面
src/components           共用元件
src/lib/posts.ts         文章讀取、分類、日期格式化
```

## 不包含的功能

此 MVP 目前不包含會員系統、付款系統、留言系統或後台 CMS。若之後需要多人編輯，可以再接 Headless CMS 或 Git-based CMS。
