import { getPosts } from '@/entities/post/model/posts';
import { getTags } from '@/entities/tag/model/tags';
import { Title } from '@/shared/ui';
import { PostList } from '@/widgets/post-list';
import { TagFilter } from '@/widgets/tag-filter';

export default async function Page({ params }: { params: Promise<{ tag?: string[] }> }) {
  const { tag: tagArray } = await params;
  const tagSlug = tagArray?.[0] && decodeURIComponent(tagArray[0]);

  const tags = getTags();
  const tag = tags.find(({ slug }) => slug === tagSlug);
  const posts = getPosts(tag?.name);

  return (
    <section className="w-full">
      <Title>
        {tag
          ? `There are ${posts.length} posts that match #${tag.name}.`
          : `There are ${tags.length} tags.`}
      </Title>

      <TagFilter tags={tags} tag={tag?.slug} className="mb-14" />
      <PostList posts={posts} />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = getTags();
  return [{ tag: undefined }, ...tags.map(({ slug }) => ({ tag: [slug] }))];
}
