import { getSeries } from '@/entities/series/model/series';
import { Title } from '@/shared/ui';
import { SeriesList } from '@/widgets/series-list';

export default function Page() {
  const series = getSeries();

  return (
    <section className="w-full">
      <Title className="mb-14">There are {series.length} series.</Title>
      <SeriesList series={series} />
    </section>
  );
}
