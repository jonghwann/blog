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
  prev: PostNavigationItem | null;
  next: PostNavigationItem | null;
}

interface PostNavigationItem {
  slug: string;
  title: string;
}
