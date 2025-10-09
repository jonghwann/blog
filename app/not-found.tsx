import Link from 'next/link';
import { Button } from '@/shared/ui';

export default function NotFound() {
  return (
    <section className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="mb-4 font-bold text-2xl">Not Found</h1>

      <p className="mb-8 text-lg">찾을 수 없는 페이지입니다.</p>

      <Button asChild className="w-[116px]">
        <Link href="/">홈으로</Link>
      </Button>
    </section>
  );
}
