export interface Frontmatter {
  title: string;
  date: string;
  tags?: string[];
  series?: string;
}

export interface MdxFile {
  slug: string;
  data: Frontmatter;
  content: string;
}
