interface LayoutProps {
  children: React.ReactNode;
}

export async function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header />
      <main className="mx-auto mt-25 flex w-full max-w-[712px] flex-1 px-4">{children}</main>
      <footer />
    </div>
  );
}
