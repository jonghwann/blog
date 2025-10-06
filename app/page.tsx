import { getPosts } from '@/entities/post';
import { getTags } from '@/entities/tag';
import { Bio } from '@/widgets/bio';
import { PostList } from '@/widgets/post-list';
import { TagList } from '@/widgets/tag-list';

export default function Page() {
  const posts = getPosts();
  const tags = getTags();

  return (
    <section className="mt-7 w-full">
      <Bio className="mb-12 border-b pb-12" />

      <div className="relative">
        <PostList posts={posts} />
        <TagList tags={tags} className="absolute top-0 left-[112%] hidden min-[1301px]:block" />
      </div>
    </section>
  );
}
