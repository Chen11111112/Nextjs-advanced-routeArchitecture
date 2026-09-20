'use client';

import { ErrorFallback } from '@/components/error-fallback';

export default function DashboardError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <ErrorFallback error={error} retry={retry} title="儀表板載入失敗" />;
}
