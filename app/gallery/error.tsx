'use client';

import { ErrorFallback } from '@/components/error-fallback';

export default function GalleryError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <ErrorFallback error={error} retry={retry} title="相簿載入失敗" />;
}
