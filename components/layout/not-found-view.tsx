import Link from 'next/link';

type NotFoundViewProps = {
  title?: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
};

export function NotFoundView({
  title = '找不到這個頁面',
  description = '這個路徑沒有對應的 `page.tsx`，或程式主動呼叫了 `notFound()`。',
  backHref = '/',
  backLabel = '回到首頁',
}: NotFoundViewProps) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-start justify-center gap-4 px-4">
      <p className="text-xs uppercase tracking-[0.2em] text-blue-300">404</p>
      <h1 className="text-3xl font-semibold text-slate-100">{title}</h1>
      <p className="leading-7 text-slate-400">{description}</p>
      <Link
        href={backHref}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
      >
        {backLabel}
      </Link>
    </main>
  );
}
