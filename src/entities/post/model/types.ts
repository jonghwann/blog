export interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content?: string;
  tags?: string[];
  series?: string;
}

export interface PostNavigation {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}
