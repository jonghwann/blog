import type { Tag } from '@/entities/tag';

export interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content?: string;
  tags?: Tag[];
  series?: string;
}

export interface PostNavigation {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}
