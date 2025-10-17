import { getPosts } from '@/entities/post/model/posts';
import { getTags } from '@/entities/tag/model/tags';
import { Title } from '@/shared/ui';
import { PostList } from '@/widgets/post-list';
import { TagGroup } from '@/widgets/tag-group';

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const tagSlug = slug?.[0] && decodeURIComponent(slug[0]);

  const tags = getTags();
  const currentTag = tags.find((tag) => tag.slug === tagSlug);
  const posts = getPosts({ tag: currentTag?.name });

  return (
    <div>
      <Title>
        {currentTag
          ? `There are ${posts.length} posts that match #${currentTag.name}.`
          : `There are ${tags.length} tags.`}
      </Title>

      <TagGroup tags={tags} activeSlug={currentTag?.slug} className="mb-14" />
      <PostList posts={posts} />
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = getTags();
  return [{ slug: undefined }, ...tags.map(({ slug }) => ({ slug: [slug] }))];
}
