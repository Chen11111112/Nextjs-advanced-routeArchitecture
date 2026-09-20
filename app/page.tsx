import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '架構總覽',
  description: 'Next.js App Router 特殊檔案慣例、平行路由、攔截路由與 SEO 動態檔案的實戰入口。',
};

const highlights = [
  {
    href: '/dashboard',
    title: '平行路由',
    description: '以 `@sidebar` 與 `@analytics` 同時渲染側邊欄與分析面板，並可獨立切換分頁。',
  },
  {
    href: '/gallery',
    title: '攔截路由',
    description: '相簿以 `(.)`、`(..)`、`(...)` 在同級或跨級覆寫載入模態框，重新整理則進入完整頁。',
  },
  {
    href: '/login',
    title: '特殊檔案慣例',
    description: '全站配置 `layout`、`template`、`error`、`loading`、`not-found` 與動態 SEO 檔案。',
  },
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold tracking-wide text-white">
          App Router
        </p>
        <h1 className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Next.js 全端實戰訓練
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          這個專案展示官方建議的 Root Layout、特殊檔案慣例、平行與攔截路由，以及 `sitemap.ts` 與
          `robots.ts` 的 SEO 動態產生。
        </p>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:-translate-y-1 hover:border-slate-600"
          >
            <h2 className="text-lg font-semibold text-slate-100">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
