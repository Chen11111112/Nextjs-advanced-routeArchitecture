import { notFound } from 'next/navigation';
import { Modal } from '@/components/modal';
import { PhotoDetail } from '@/components/photo-detail';
import { getPhotoById } from '@/lib/photos';

type PhotoModalPageProps = {
  params: Promise<{ id: string }>;
};

export default async function InterceptedPhotoModal({ params }: PhotoModalPageProps) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

  return (
    <Modal title="同級攔截 (.)photo">
      <PhotoDetail photo={photo} />
    </Modal>
  );
}
