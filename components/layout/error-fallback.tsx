'use client';

import { useEffect } from 'react';

type ErrorFallbackProps = {
  error: Error & { digest?: string };
  retry: () => void;
  title?: string;
};

export function ErrorFallback({
  error,
  retry,
  title = '發生未預期的錯誤',
}: ErrorFallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[40vh] w-full max-w-xl flex-col items-start justify-center gap-4 px-4">
      <p className="text-xs uppercase tracking-[0.2em] text-rose-300">Error Boundary</p>
      <h2 className="text-2xl font-semibold text-slate-100">{title}</h2>
      <p className="text-sm leading-6 text-slate-400">
        這個區段已被 `error.tsx` 捕捉。你可以重試載入，或稍後再回來。
      </p>
      {error.digest ? (
        <p className="font-mono text-xs text-slate-500">digest: {error.digest}</p>
      ) : null}
      <button
        type="button"
        onClick={() => retry()}
        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
      >
        重試
      </button>
    </div>
  );
}
