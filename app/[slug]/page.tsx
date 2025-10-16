import { notFound } from 'next/navigation';
import type { Navigation, Post } from '@/entities/post';
import { getPost, getPostNavigation, getPosts } from '@/entities/post/model/posts';
import { generateToc } from '@/shared/lib';
import { ScrollProgressBar } from '@/shared/ui';
import { Bio } from '@/widgets/bio';
import { Giscus } from '@/widgets/giscus';
import { PostHeader } from '@/widgets/post-header';
import { PostNavigation } from '@/widgets/post-navigation';
import { PostToc } from '@/widgets/post-toc';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../content/${slug}.mdx`);

  let post: Post;
  let navigation: Navigation;

  try {
    post = getPost(slug);
    navigation = getPostNavigation(slug);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const toc = generateToc(post.content ?? '');

  return (
    <section className="w-full">
      <ScrollProgressBar />
      <PostHeader {...post} />

      <div className="flex gap-16">
        <div className="w-full xl:min-w-[680px]">
          <Post />
          <PostNavigation navigation={navigation} />
          <Bio className="my-12 border-b pb-8" />
          <Giscus />
        </div>

        <PostToc className="hidden min-[1301px]:block" toc={toc} />
      </div>
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
