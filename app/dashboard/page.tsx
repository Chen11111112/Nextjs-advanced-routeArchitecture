import type { Metadata } from 'next';
import { overviewMetrics } from '@/lib/analytics';

export const metadata: Metadata = {
  title: '儀表板',
  description: '以平行路由同時呈現側邊欄、主內容與分析面板。',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Parallel Routes</p>
        <h1 className="mt-2 text-2xl font-semibold">多面板佈局</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          `@sidebar`、`children` 與 `@analytics` 是三個獨立槽位，可在同一 URL 下同時渲染。
        </p>
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        {overviewMetrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <dt className="text-xs text-slate-500">{metric.label}</dt>
            <dd className="mt-2 text-2xl font-semibold text-slate-100">{metric.value}</dd>
            <p className="mt-1 text-xs text-slate-500">{metric.hint}</p>
          </div>
        ))}
      </dl>
    </div>
  );
}
