import type { Series } from '@/entities/series';
import { SeriesItem } from '@/entities/series';

export function SeriesList({ seriesList }: { seriesList: Series[] }) {
  return (
    <ul>
      {seriesList.map((series) => (
        <li key={series.slug} className="mb-8 border-b pb-12 last:mb-0 last:border-none last:pb-0">
          <SeriesItem series={series} />
        </li>
      ))}
    </ul>
  );
}
