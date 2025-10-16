import type { Series } from '@/entities/series';
import { SeriesItem } from '@/entities/series';

export function SeriesList({ series }: { series: Series[] }) {
  return (
    <ul>
      {series.map((s) => (
        <li key={s.slug} className="mb-8 border-b pb-12 last:mb-0 last:border-none last:pb-0">
          <SeriesItem {...s} />
        </li>
      ))}
    </ul>
  );
}
