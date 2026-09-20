import type { Photo } from '@/lib/photos';

type PhotoDetailProps = {
  photo: Photo;
};

export function PhotoDetail({ photo }: PhotoDetailProps) {
  return (
    <article className="space-y-4">
      <div className={`h-52 rounded-xl bg-gradient-to-br ${photo.accent}`} />
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{photo.id}</p>
        <h1 className="text-2xl font-semibold text-slate-100">{photo.title}</h1>
        <p className="leading-7 text-slate-400">{photo.description}</p>
      </div>
    </article>
  );
}
