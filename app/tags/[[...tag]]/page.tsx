import { getPosts } from '@/entities/post';
import { getTags } from '@/entities/tag';
import { PostList } from '@/widgets/post-list';
import { TagFilter } from '@/widgets/tag-filter';

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: encodedTag } = await params;
  const tag = encodedTag && decodeURIComponent(encodedTag);

  const tags = getTags();
  const posts = getPosts(tag);

  return (
    <section className="w-full">
      <TagFilter tags={tags} tag={tag} className="mb-14" />
      <PostList posts={posts} />
    </section>
  );
}
