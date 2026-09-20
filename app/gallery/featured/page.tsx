import type { Metadata } from 'next';
import Link from 'next/link';
import { PhotoCard } from '@/components/photo-card';
import { photos } from '@/lib/photos';

export const metadata: Metadata = {
  title: '精選相簿',
  description: '從子層以 (..)photo 攔截父層相片，或以 (...)login 從根路徑攔截登入頁。',
};

export default function FeaturedPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-blue-300">(..) / (...)</p>
      <h1 className="mt-2 text-3xl font-semibold">精選與跨級攔截</h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
        點相片會觸發 `@modal/(..)photo`，在目前精選頁上覆寫父層 `/gallery/photo/[id]`。點登入則觸發
        `(...)login`，從根路徑攔截 `/login`。
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/login"
          className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
        >
          攔截根路徑登入
        </Link>
        <Link
          href="/gallery"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200"
        >
          返回相簿
        </Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} href={`/gallery/photo/${photo.id}`} />
        ))}
      </div>
    </main>
  );
}
