import Link from 'next/link';

const tabs = [
  { href: '/dashboard', label: '摘要' },
  { href: '/dashboard/visitors', label: '訪客' },
  { href: '/dashboard/page-views', label: '瀏覽量' },
] as const;

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">@analytics</p>
      <nav className="flex flex-wrap gap-2" aria-label="分析分頁">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-blue-400 hover:text-white"
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
}
