import Link from 'next/link';
import type { Series } from '@/entities/series';

export function SeriesItem({ series }: { series: Series }) {
  return (
    <article>
      <Link
        href={`/series/${series.slug}`}
        className="mb-6 inline-block hover:text-accent-foreground"
      >
        <h2 className="font-bold text-[32px] leading-[1.2]">{series.name}</h2>
      </Link>

      <p className="font-nanum-square-round text-secondary-foreground text-sm leading-[1]">
        {series.count} posts · Last updated on {series.updatedAt}
      </p>
    </article>
  );
}
