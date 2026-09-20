import { pageViewRows } from '@/lib/analytics';

export default function PageViewsSlot() {
  return (
    <ul className="space-y-3">
      {pageViewRows.map((row) => (
        <li key={row.path} className="flex items-center justify-between text-sm">
          <span className="font-mono text-slate-400">{row.path}</span>
          <span className="text-slate-100">
            {row.views.toLocaleString('zh-TW')} · {row.trend}
          </span>
        </li>
      ))}
    </ul>
  );
}
