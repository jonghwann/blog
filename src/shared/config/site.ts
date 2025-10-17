export const SITE_CONFIG = {
  url: 'https://my-blog.com',
  title: 'my blog title',
  description: 'my blog description',
  siteName: 'my blog',
  ogImage: '/opengraph.png',
  author: {
    username: 'Jonghwan',
    tagline: 'Next.js blog starter by Jonghwan',
    avatar: '/avatar.png',
  },
  social: {
    github: 'https://github.com/{YOUR_GITHUB_USERNAME}',
    linkedin: 'https://linkedin.com/in/{YOUR_PUBLIC_PROFILE_URL}',
  },
  giscus: {
    repo: '{YOUR_GITHUB_USERNAME}/{YOUR_REPOSITORY_NAME}',
    repoId: '{YOUR_GITHUB_REPOSITORY_ID}',
    category: '{YOUR_GITHUB_REPOSITORY_CATEGORY}',
    categoryId: '{YOUR_GITHUB_REPOSITORY_CATEGORY_ID}',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    lang: 'ko',
  },
} as const;
