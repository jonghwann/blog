import { getPosts } from '@/entities/post/model/posts';
import { Giscus } from '@/widgets/giscus';

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../content/${slug}.mdx`);

  return (
    <section className="mt-3 w-full">
      <Post />
      <Giscus />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
