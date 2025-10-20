export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-11 flex h-16 items-center justify-center border-t px-4">
      <small className="text-xs">
        © <time>{year}</time>. jonghwan All rights reserved.
      </small>
    </footer>
  );
}
