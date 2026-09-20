import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PhotoDetail } from '@/components/photo-detail';
import { getPhotoById, getPhotoIds } from '@/lib/photos';

type PhotoPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getPhotoIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PhotoPageProps): Promise<Metadata> {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    return { title: '找不到相片' };
  }

  return {
    title: photo.title,
    description: photo.description,
  };
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Full Photo Page</p>
      <div className="mt-6">
        <PhotoDetail photo={photo} />
      </div>
      <Link href="/gallery" className="mt-8 inline-flex text-sm text-sky-300 hover:text-sky-200">
        返回相簿
      </Link>
    </main>
  );
}
