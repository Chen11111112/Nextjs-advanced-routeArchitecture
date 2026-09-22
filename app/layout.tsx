import type { Metadata, Viewport } from 'next';
import { DemoErrorProvider } from '@/components/layout/demo-error-provider';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { geistSans, notoSansTC } from '@/components/layout/fonts';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${geistSans.variable} ${notoSansTC.variable} scroll-smooth`}>
      <body className={`${notoSansTC.className} flex min-h-screen flex-col bg-slate-950 text-slate-100 antialiased`}>
        <DemoErrorProvider>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </DemoErrorProvider>
      </body>
    </html>
  );
}
