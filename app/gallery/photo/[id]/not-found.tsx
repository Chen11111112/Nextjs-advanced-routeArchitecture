import { NotFoundView } from '@/components/layout/not-found-view';

export default function PhotoNotFound() {
  return (
    <NotFoundView
      title="找不到這張相片"
      description="這個 id 不在相簿資料中。"
      backHref="/gallery"
      backLabel="返回相簿"
    />
  );
}
