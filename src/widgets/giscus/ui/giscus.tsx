'use client';
import Comments from '@giscus/react';
import { useTheme } from 'next-themes';

export function Giscus({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className={className}>
      <Comments
        repo="jonghwann/blog"
        repoId="R_kgDOP5iebg"
        category="Announcements"
        categoryId="DIC_kwDOP5iebs4CwcAG"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="ko"
      />
    </div>
  );
}
