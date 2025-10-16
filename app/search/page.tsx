import { getPosts } from '@/entities/post/model/posts';
import { SearchPage } from '@/pages/search';

export default function Page() {
  const posts = getPosts({ includeContent: true });
  return <SearchPage posts={posts} />;
}
