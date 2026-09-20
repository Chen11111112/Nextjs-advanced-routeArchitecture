import { overviewMetrics } from '@/lib/analytics';

export default function AnalyticsOverviewSlot() {
  return (
    <ul className="space-y-3">
      {overviewMetrics.map((metric) => (
        <li key={metric.label} className="flex items-center justify-between text-sm">
          <span className="text-slate-400">{metric.label}</span>
          <span className="font-medium text-slate-100">{metric.value}</span>
        </li>
      ))}
    </ul>
  );
}
