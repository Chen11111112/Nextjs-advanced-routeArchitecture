export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="template-enter">{children}</div>;
}
