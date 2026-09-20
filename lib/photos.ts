export type Photo = {
  id: string;
  title: string;
  description: string;
  accent: string;
};

export const photos: readonly Photo[] = [
  {
    id: 'aurora',
    title: '北極光',
    description: '高緯度夜空中流動的綠色光帶，展示同級攔截路由的模態預覽。',
    accent: 'from-cyan-400 to-emerald-500',
  },
  {
    id: 'canyon',
    title: '峽谷',
    description: '層層岩石被夕陽染成琥珀與鐵鏽紅，適合作為跨級覆寫的範例。',
    accent: 'from-amber-400 to-rose-500',
  },
  {
    id: 'harbor',
    title: '港灣',
    description: '薄霧中的碼頭燈火，對應硬重新整理時的完整相片頁。',
    accent: 'from-sky-400 to-indigo-500',
  },
  {
    id: 'ridge',
    title: '山脊',
    description: '晨霧沿著稜線流動，用來示範可分享的深層連結。',
    accent: 'from-violet-400 to-fuchsia-500',
  },
] as const;

export function getPhotoById(id: string): Photo | undefined {
  return photos.find((photo) => photo.id === id);
}

export function getPhotoIds(): string[] {
  return photos.map((photo) => photo.id);
}
