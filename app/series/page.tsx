import { getSeries } from '@/entities/series/model/series';
import { Title } from '@/shared/ui';
import { SeriesList } from '@/widgets/series-list';

export default function Page() {
  const seriesList = getSeries();

  return (
    <section className="w-full">
      <Title className="mb-14">There are {seriesList.length} series.</Title>
      <SeriesList seriesList={seriesList} />
    </section>
  );
}
