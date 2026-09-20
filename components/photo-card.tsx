import Link from 'next/link';
import type { Photo } from '@/lib/photos';

type PhotoCardProps = {
  photo: Photo;
  href: string;
};

export function PhotoCard({ photo, href }: PhotoCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-slate-600"
    >
      <div className={`h-36 bg-gradient-to-br ${photo.accent}`} />
      <div className="space-y-2 p-4">
        <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">
          {photo.title}
        </h3>
        <p className="text-sm leading-6 text-slate-400">{photo.description}</p>
      </div>
    </Link>
  );
}
