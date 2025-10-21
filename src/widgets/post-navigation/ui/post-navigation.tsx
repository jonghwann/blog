import type { Navigation } from '@/entities/post';
import { PostNavigationItem } from './post-navigation-item';

export function PostNavigation({ navigation: { prev, next } }: { navigation: Navigation }) {
  return (
    <nav className="mt-15 mb-12 flex flex-col justify-between gap-3 lg:flex-row lg:flex-wrap">
      <PostNavigationItem variant="prev" slug={prev?.slug} title={prev?.title} />
      <PostNavigationItem variant="next" slug={next?.slug} title={next?.title} />
    </nav>
  );
}
