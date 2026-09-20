'use client';

import { ErrorFallback } from '@/components/error-fallback';

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return <ErrorFallback error={error} retry={retry} title="根層路由發生錯誤" />;
}
