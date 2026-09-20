import type { Metadata } from 'next';
import Link from 'next/link';
import { PhotoCard } from '@/components/photo-card';
import { photos } from '@/lib/photos';

export const metadata: Metadata = {
  title: '相簿',
  description: '以攔截路由在相簿上以模態框預覽相片，重新整理則進入完整頁。',
};

export default function GalleryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">(.) Intercept</p>
          <h1 className="mt-2 text-3xl font-semibold">相簿</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            從這裡點進相片會由 `@modal/(.)photo` 攔截，覆寫為模態框。重新整理或直接開啟網址則顯示完整頁。
          </p>
        </div>
        <Link
          href="/gallery/featured"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400"
        >
          精選與跨級攔截
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} href={`/gallery/photo/${photo.id}`} />
        ))}
      </div>
    </main>
  );
}
