import dayjs from 'dayjs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import type { Navigation, Post } from '@/entities/post';
import { getPost, getPostNavigation, getPosts } from '@/entities/post/model/posts';
import { SITE_CONFIG } from '@/shared/config';
import { generateToc } from '@/shared/lib';
import { ScrollProgressBar } from '@/shared/ui';
import { Bio } from '@/widgets/bio';
import { Giscus } from '@/widgets/giscus';
import { PostHeader } from '@/widgets/post-header';
import { PostNavigation } from '@/widgets/post-navigation';
import { PostToc } from '@/widgets/post-toc';

const getCachedPost = cache(getPost);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { title, description, date } = getCachedPost(slug);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: dayjs(date).toISOString(),
      url: `${SITE_CONFIG.url}/${slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let PostContent: React.ComponentType;
  let post: Post;
  let navigation: Navigation;

  try {
    const { default: PostComponent } = await import(`../../../content/${slug}.mdx`);
    PostContent = PostComponent;
    post = getCachedPost(slug);
    navigation = getPostNavigation(slug);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const toc = generateToc(post.content ?? '');

  return (
    <div>
      <ScrollProgressBar />
      <PostHeader {...post} />

      <div className="flex gap-14">
        <div className="w-full lg:min-w-[680px]">
          <PostContent />
          <PostNavigation navigation={navigation} />
          <Bio className="my-12 border-b pb-8" />
          <Giscus />
        </div>

        <PostToc className="hidden xl:block" toc={toc} />
      </div>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
