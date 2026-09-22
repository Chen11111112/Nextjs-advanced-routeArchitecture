'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useDemoError } from '@/components/layout/demo-error-provider';

const linkClassName =
  'rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-100 transition hover:border-rose-300 hover:bg-rose-500/20';

export function ErrorTriggers() {
  const { throwInRootLayout } = useDemoError();
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('示範：頁面發生錯誤，由 error.tsx 處理');
  }

  return (
    <section className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-rose-300">Error Playground</p>
      <h2 className="mt-2 text-lg font-semibold text-slate-100">主動觸發錯誤畫面</h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        `error.tsx` 捕捉頁面錯誤；`global-error.tsx` 捕捉 Root Layout 錯誤；找不到的路徑與相片會分別進入對應的
        `not-found.tsx`。
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={() => setShouldThrow(true)} className={linkClassName}>
          觸發 error.tsx
        </button>
        <button type="button" onClick={throwInRootLayout} className={linkClassName}>
          觸發 global-error.tsx
        </button>
        <Link href="/does-not-exist" className={linkClassName}>
          觸發 not-found.tsx
        </Link>
        <Link href="/gallery/photo/missing" className={linkClassName}>
          觸發相片 not-found.tsx
        </Link>
      </div>
    </section>
  );
}
