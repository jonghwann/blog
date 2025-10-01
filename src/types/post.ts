export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content?: string;
  tags?: string[];
  series?: string;
}
