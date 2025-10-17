import type { MetadataRoute } from 'next';
import { getPosts } from '@/entities/post/model/posts';
import { SITE_CONFIG } from '@/shared/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${SITE_CONFIG.url}/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
