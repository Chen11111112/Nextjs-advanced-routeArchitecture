import type { Metadata } from 'react';
import { ReactNode } from 'react';

// SEO 最佳實踐:定義全域預設 Metadata
export const metadata: Metadata = {
  title: {
    template: '%s | 你的網站名稱',
    default: '你的網站預設標題 - 最佳解決方案',
  },
  description: '這是針對搜尋引擎最佳化（SEO）的頁面描述，請在此填入吸引人的摘要文字。',
  keywords: ['關鍵字1', '關鍵字2', 'SEO 友善'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://yourwebsite.com',
    title: '你的網站預設標題',
    description: '這是針對搜尋引擎最佳化（SEO）的頁面描述。',
    siteName: '你的網站名稱',
  },
};

export default function SeoOptimizedLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
          
        <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>

      </body>
    </html>
  );
}