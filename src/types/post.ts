export interface Tag {
  name: string;
  count?: number;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content?: string;
  tags?: Tag[];
  series?: string;
}
