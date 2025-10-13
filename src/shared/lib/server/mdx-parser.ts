import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { Frontmatter, MdxFile } from '@/shared/types';

const POSTS_PATH = path.join(process.cwd(), 'content');

/**
 * content 폴더의 모든 MDX 파일을 읽고 파싱합니다.
 */
export function parseMdxFiles(): MdxFile[] {
  const files = readdirSync(POSTS_PATH);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  return mdxFiles.map((mdxFile) => {
    const slug = mdxFile.replace(/\.mdx$/, '');
    const fullPath = path.join(POSTS_PATH, mdxFile);
    const file = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(file);

    return { slug, data: data as Frontmatter, content };
  });
}
