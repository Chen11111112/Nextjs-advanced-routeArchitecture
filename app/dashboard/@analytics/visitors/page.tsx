import { visitorRows } from '@/lib/analytics';

export default function VisitorsSlot() {
  return (
    <ul className="space-y-3">
      {visitorRows.map((row) => (
        <li key={row.source} className="flex items-center justify-between text-sm">
          <span className="text-slate-400">{row.source}</span>
          <span className="text-slate-100">
            {row.users.toLocaleString('zh-TW')} · {row.share}
          </span>
        </li>
      ))}
    </ul>
  );
}
