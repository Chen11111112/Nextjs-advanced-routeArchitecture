type LoadingSkeletonProps = {
  label?: string;
};

export function LoadingSkeleton({ label = '載入中' }: LoadingSkeletonProps) {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-4 px-4 py-10 sm:px-6" role="status" aria-live="polite">
      <p className="text-sm text-slate-400">{label}…</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-32 animate-pulse rounded-2xl bg-slate-800" />
        <div className="h-32 animate-pulse rounded-2xl bg-slate-800" />
        <div className="h-32 animate-pulse rounded-2xl bg-slate-800 md:col-span-2" />
      </div>
    </div>
  );
}
