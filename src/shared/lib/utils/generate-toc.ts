import type { Toc } from '@/shared/types';
import { slugify } from './slugify';

/**
 * 마크다운 콘텐츠에서 목차(TOC)를 생성합니다.
 * @param markdown - 마크다운 콘텐츠
 * @returns h2, h3 기반의 목차 배열
 */
export function generateToc(markdown: string): Toc[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const matches = markdown.matchAll(headingRegex);

  return Array.from(matches).map(([_, hashes, title], id) => ({
    id,
    title: title.trim(),
    link: `#${slugify(title)}`,
    depth: hashes.length - 2,
  }));
}
