import { notFound } from 'next/navigation';
import type { Navigation } from '@/entities/post';
import { getPostNavigation, getPosts } from '@/entities/post/model/posts';
import { ScrollProgressBar } from '@/shared/ui';
import { Bio } from '@/widgets/bio';
import { Giscus } from '@/widgets/giscus';
import { PostNavigation } from '@/widgets/post-navigation';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../content/${slug}.mdx`);

  let navigation: Navigation;

  try {
    navigation = getPostNavigation(slug);
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <section className="mt-3 w-full">
      <ScrollProgressBar />
      <div />

      <div className="flex gap-16">
        <div className="w-full xl:min-w-[680px]">
          <Post />
          <PostNavigation navigation={navigation} />
          <Bio className="mt-12 border-b pb-8" />
          <Giscus />
        </div>

        <div className="hidden min-[1301px]:block" />
      </div>
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
