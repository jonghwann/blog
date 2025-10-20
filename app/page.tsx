import { getPosts } from '@/entities/post/model/posts';
import { getTags } from '@/entities/tag/model/tags';
import { Bio } from '@/widgets/bio';
import { PostList } from '@/widgets/post-list';
import { TagList } from '@/widgets/tag-list';

export default function Page() {
  const posts = getPosts();
  const tags = getTags();

  return (
    <section className="mx-auto mt-7 w-full max-w-[812px]">
      <Bio className="mb-12" />
      <PostList posts={posts} className="float-left w-full border-t pt-12 lg:w-[590px]" />
      <TagList tags={tags} className="sticky top-28 float-right mt-12 hidden lg:block" />
    </section>
  );
}
