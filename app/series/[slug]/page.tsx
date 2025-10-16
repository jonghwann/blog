import { notFound } from 'next/navigation';
import { getPosts } from '@/entities/post/model/posts';
import { getSeries } from '@/entities/series/model/series';
import { PostList } from '@/widgets/post-list';
import { SeriesHeader } from '@/widgets/series-header';

export default async function Page({ params }: { params: Promise<{ slug?: string }> }) {
  const { slug } = await params;
  const seriesSlug = slug && decodeURIComponent(slug);

  const series = getSeries();
  const currentSeries = series.find((s) => s.slug === seriesSlug);
  const posts = getPosts({ series: currentSeries?.name });

  if (!currentSeries) {
    notFound();
  }

  return (
    <section className="w-full">
      <SeriesHeader {...currentSeries} />
      <PostList posts={posts} />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const series = getSeries();
  return series.map(({ slug }) => ({ slug }));
}
