export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto w-full max-w-[680px]">{children}</section>;
}
