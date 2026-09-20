export const siteConfig = {
  name: 'Next.js 全端實戰',
  shortName: 'Next 實戰',
  description:
    '以 Next.js App Router 為核心的全端實戰專案，涵蓋特殊檔案慣例、平行路由、攔截路由與 SEO 最佳化。',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'zh-TW',
  keywords: [
    'Next.js',
    'App Router',
    'Server Actions',
    'Parallel Routes',
    'Intercepting Routes',
    'SEO',
  ],
} as const;

export function getSiteUrl(pathname = '/'): string {
  return new URL(pathname, siteConfig.url).toString();
}
