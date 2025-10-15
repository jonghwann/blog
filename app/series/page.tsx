import Link from 'next/link';
import { getSeries } from '@/entities/series/model/series';
import { Title } from '@/shared/ui';

export default function Page() {
  const seriesList = getSeries();

  return (
    <section className="w-full">
      <Title className="mb-14">There are {seriesList.length} series.</Title>

      <ul>
        {seriesList.map((series) => (
          <li
            key={series.slug}
            className="mb-8 border-b pb-12 last:mb-0 last:border-none last:pb-0"
          >
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
          </li>
        ))}
      </ul>
    </section>
  );
}
