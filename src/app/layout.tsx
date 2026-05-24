import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://foodthinkthink.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "食事求識 | 食品安全與食品法規知識",
    template: "%s | 食事求識"
  },
  description:
    "專注食品安全、食品法規、食品檢驗與食品加工知識的專業部落格。",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  openGraph: {
    title: "食事求識",
    description:
      "專注食品安全、食品法規、食品檢驗與食品加工知識的專業部落格。",
    url: siteUrl,
    siteName: "食事求識",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "食事求識"
      }
    ],
    locale: "zh_TW",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "食事求識",
    description:
      "專注食品安全、食品法規、食品檢驗與食品加工知識的專業部落格。",
    images: ["/og-image.webp"]
  }
};

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/posts", label: "文章" },
  { href: "/about", label: "關於我" },
  { href: "/contact", label: "聯絡" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="font-sans antialiased">
        <Script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3807886144987847"
          strategy="afterInteractive"
        />
        <header className="border-b border-ink/10 bg-white/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="group">
              <span className="block text-2xl font-bold tracking-normal text-ink">
                食事求識
              </span>
              <span className="text-sm text-ink/70">
                食品安全、法規、檢驗與加工知識
              </span>
            </Link>
            <nav aria-label="主要導覽" className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink/75 transition hover:bg-leaf hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Analytics />
        <footer className="mt-16 border-t border-ink/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-ink/70 sm:px-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="font-semibold text-ink">食事求識</p>
              <p className="mt-2 max-w-2xl">
                以清楚、可信任的方式整理食品安全與食品產業知識。內容僅供教育與資訊參考，實務決策請以最新法規與專業意見為準。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/disclaimer" className="hover:text-ink">
                免責聲明
              </Link>
              <Link href="/privacy" className="hover:text-ink">
                隱私權政策
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
