'use client';

import { notoSansTC } from '@/components/layout/fonts';
import './globals.css';

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="zh-Hant">
      <body className={`${notoSansTC.className} flex min-h-screen items-center justify-center bg-slate-950 text-slate-100`}>
        <div className="space-y-4 px-6 text-center">
          <title>全域錯誤 | Next.js 全端實戰</title>
          <h2 className="text-2xl font-semibold">根佈局發生錯誤</h2>
          <p className="text-sm text-slate-400">
            {error.digest ? `digest: ${error.digest}` : '請稍後再試，或重新載入這個應用程式。'}
          </p>
          <button
            type="button"
            onClick={() => retry()}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
          >
            重試
          </button>
        </div>
      </body>
    </html>
  );
}
