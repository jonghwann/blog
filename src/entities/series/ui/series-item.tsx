import Link from 'next/link';
import type { Series } from '@/entities/series';

export function SeriesItem({ name, slug, count, updatedAt }: Series) {
  return (
    <article>
      <Link href={`/series/${slug}`} className="mb-6 inline-block">
        <h2 className="font-bold text-[32px] leading-[1.2]">{name}</h2>
      </Link>

      <div className="font-nanum-square-round text-secondary-foreground text-sm leading-[1]">
        <span>{count} posts</span>
        <span> · </span>
        <span>
          Last updated on <time>{updatedAt}</time>
        </span>
      </div>
    </article>
  );
}
