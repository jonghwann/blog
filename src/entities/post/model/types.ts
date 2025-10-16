export interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content?: string;
  readingTime?: number;
  tags?: string[];
  series?: string;
}

export interface GetPostsOptions {
  tag?: string;
  series?: string;
  includeContent?: boolean;
}

export interface Navigation {
  prev: NavigationItem | null;
  next: NavigationItem | null;
}

interface NavigationItem {
  slug: string;
  title: string;
}
