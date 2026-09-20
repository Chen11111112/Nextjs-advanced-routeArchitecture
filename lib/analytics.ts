export type Metric = {
  label: string;
  value: string;
  hint: string;
};

export const overviewMetrics: readonly Metric[] = [
  { label: '瀏覽量', value: '18,420', hint: '過去 7 日' },
  { label: '訪客', value: '6,234', hint: '獨立工作階段' },
  { label: '跳出率', value: '32%', hint: '低於基準線' },
  { label: '平均停留', value: '2m 18s', hint: '內容互動時間' },
] as const;

export const visitorRows: readonly { source: string; users: number; share: string }[] = [
  { source: '自然搜尋', users: 2840, share: '46%' },
  { source: '直接造訪', users: 1710, share: '27%' },
  { source: '推薦連結', users: 980, share: '16%' },
  { source: '社群媒體', users: 704, share: '11%' },
] as const;

export const pageViewRows: readonly { path: string; views: number; trend: string }[] = [
  { path: '/', views: 6420, trend: '+12%' },
  { path: '/gallery', views: 3180, trend: '+8%' },
  { path: '/dashboard', views: 2090, trend: '+4%' },
  { path: '/login', views: 870, trend: '-2%' },
] as const;
