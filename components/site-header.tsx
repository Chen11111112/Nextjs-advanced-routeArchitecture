import Link from 'next/link';

const navItems = [
  { href: '/', label: '首頁' },
  { href: '/dashboard', label: '儀表板' },
  { href: '/gallery', label: '相簿' },
  { href: '/login', label: '登入' },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
          Next.js 全端實戰
        </Link>
        <nav aria-label="主要導覽" className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
