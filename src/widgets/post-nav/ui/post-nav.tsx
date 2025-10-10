import type { PostNavigation } from '@/entities/post';
import { PostNavItem } from './post-nav-item';

export function PostNav({ navigation: { prev, next } }: { navigation: PostNavigation }) {
  return (
    <nav className="mt-15 mb-12 flex flex-col justify-between gap-3 md:flex-row md:flex-wrap">
      <PostNavItem variant="prev" slug={prev?.slug} title={prev?.title} />
      <PostNavItem variant="next" slug={next?.slug} title={next?.title} />
    </nav>
  );
}
