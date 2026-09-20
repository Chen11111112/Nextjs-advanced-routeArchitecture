export default function DashboardLayout({
  children,
  sidebar,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 lg:grid-cols-[240px_minmax(0,1fr)_320px] sm:px-6">
      <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-4">{sidebar}</aside>
      <main className="min-w-0 rounded-2xl border border-slate-800 bg-slate-900 p-6">{children}</main>
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-4">{analytics}</section>
    </section>
  );
}
