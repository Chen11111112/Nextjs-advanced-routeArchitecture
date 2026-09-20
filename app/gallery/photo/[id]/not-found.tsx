import Link from 'next/link';

export default function PhotoNotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] w-full max-w-xl flex-col justify-center gap-4 px-4">
      <h1 className="text-2xl font-semibold">找不到這張相片</h1>
      <p className="text-sm leading-6 text-slate-400">這個 id 不在相簿資料中。</p>
      <Link href="/gallery" className="text-sm text-sky-300 hover:text-sky-200">
        返回相簿
      </Link>
    </main>
  );
}
