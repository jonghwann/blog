import { getPosts } from '@/entities/post/model/posts';
import { getSeries } from '@/entities/series/model/series';
import { PostList } from '@/widgets/post-list';

export default async function Page({ params }: { params: Promise<{ slug?: string }> }) {
  const { slug } = await params;
  const seriesSlug = slug && decodeURIComponent(slug);

  const series = getSeries();
  const currentSeries = series.find((s) => s.slug === seriesSlug);
  const posts = getPosts({ series: currentSeries?.name });

  return (
    <section className="w-full">
      <PostList posts={posts} />
    </section>
  );
}

export async function generateStaticParams() {
  const series = getSeries();
  return series.map(({ slug }) => ({ slug }));
}
