import Link from 'next/link';

const links = [
  { href: '/dashboard', label: '總覽' },
  { href: '/dashboard/visitors', label: '訪客' },
  { href: '/dashboard/page-views', label: '瀏覽量' },
  { href: '/gallery', label: '前往相簿' },
] as const;

export default function SidebarSlot() {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">@sidebar</p>
      <nav className="flex flex-col gap-1" aria-label="儀表板側邊欄">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
