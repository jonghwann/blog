import { getPosts } from '@/entities/post/model/posts';
import { getTags } from '@/entities/tag/model/tags';
import { Title } from '@/shared/ui';
import { PostList } from '@/widgets/post-list';
import { TagFilter } from '@/widgets/tag-filter';

export default async function TagPage({ params }: { params: Promise<{ tag?: string[] }> }) {
  const { tag: tagArray } = await params;
  const tag = tagArray?.[0] && decodeURIComponent(tagArray[0]);

  const tags = getTags();
  const posts = getPosts(tag);

  return (
    <section className="w-full">
      <Title>
        {tag
          ? `There are ${posts.length} posts that match #${tag}.`
          : `There are ${tags.length} tags.`}
      </Title>

      <TagFilter tags={tags} tag={tag} className="mb-14" />
      <PostList posts={posts} />
    </section>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = getTags();
  return [{ tag: undefined }, ...tags.map(({ name }) => ({ tag: [name] }))];
}
