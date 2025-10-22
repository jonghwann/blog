<div align="center">
    
# Jonghwan Next.js Blog Template

</div>

<img width="1280" height="720" alt="6c977cb4-2c3b-492b-8f03-390c5e788a34" src="https://github.com/user-attachments/assets/640800c7-c7e7-417a-a5ab-59e6d94c5c8f" />

Demo Website: [jonghwan.blog](https://www.jonghwan.blog/)

<br/>

## 👋 소개

Jonghwan Next.js Blog Template은 빠르고 효율적인 기술 블로그 구축을 위한 템플릿입니다.

MDX 기반의 포스트 작성과 코드 하이라이팅을 지원하며, 태그와 시리즈 기능으로 콘텐츠를 체계적으로 관리할 수 있습니다.\
또한 통합 검색을 통해 원하는 글을 손쉽게 찾을 수 있습니다.

다크 모드, Giscus 댓글 시스템, SEO 최적화, 반응형 디자인 등 기술 블로그에 필요한 모든 기능을 갖추고 있습니다.

깔끔하고 유연한 디자인의 Jonghwan Next.js Blog Template으로 여러분만의 블로그를 시작해 보세요.

<br/>

## ✨ 주요 기능

- 📝 MDX 기반 포스트 작성
- 🌙 다크모드 지원
- 🔍 통합 검색 기능
- 🏷️ 태그 & 시리즈 분류
- 📱 반응형 디자인 적용
- 💬 Giscus 댓글
- 🚀 SEO 최적화

<br/>

## 📁 프로젝트 구조

이 프로젝트는 [Feature-Sliced Design (FSD)](https://feature-sliced.design/) 아키텍처를 따릅니다.  
> 💡 [참고 블로그](https://emewjin.github.io/feature-sliced-design/)

```
/
├── app/              # 라우팅
├── content/          # 블로그 포스트
└── src/
    ├── app/          # 앱 진입점
    ├── entities/     # 비즈니스 엔티티
    ├── pages/        # 페이지
    ├── shared/       # 공통 리소스
    └── widgets/      # UI 블록
```

<br/>

## 🛠️ 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: MDX ([@next/mdx](https://nextjs.org/docs/app/building-your-application/configuring/mdx))
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Comments**: [Giscus](https://giscus.app/)
- **Linter/Formatter**: [Biome](https://biomejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

<br/>

## 🚀 시작하기

### 요구 사항

시작하기 전에 다음 요구 사항을 충족하는지 확인하세요.

- Node.js 20.x 이상
- pnpm 9.x 이상

### 설치

1. 이 저장소를 포크합니다. (우측 상단 `Fork` 버튼 클릭)
2. 로컬에 클론합니다. ```git clone https://github.com/YOUR_USERNAME/nextjs-blog-starter.git```
3. 프로젝트 폴더로 이동합니다. ```cd nextjs-blog-starter```
4. 의존성을 설치합니다. ```pnpm install```
5. 개발 서버를 실행합니다. ```pnpm dev```
6. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 확인합니다.

<br/>

## ⚙️ 설정 가이드

`src/shared/config/site.ts` 파일에서 블로그의 기본 정보, 작성자 정보, Giscus 댓글을 설정할 수 있습니다.

### 블로그 기본 정보

Metadata 및 RSS에 사용되는 정보입니다:

```typescript
export const SITE_CONFIG = {
  url: '블로그 도메인',
  title: '블로그 제목',
  description: '블로그 설명',
  siteName: '블로그 이름',
  ogImage: 'OG 이미지 경로',
}
```

### 작성자 정보

Bio 섹션에 표시되는 정보입니다:

```typescript
author: {
  username: '이름',
  tagline: '한 줄 소개',
  avatar: '프로필 이미지 경로',
},
social: {
  github: 'https://github.com/{YOUR_GITHUB_USERNAME}',
  linkedin: 'https://linkedin.com/in/{YOUR_PUBLIC_PROFILE_URL}',
}
```

### Giscus 댓글 설정

1. GitHub 저장소에서 **Discussions 활성화**해주세요. (Settings > General > Features > ☑️ Discussions)
2. [Giscus 앱](https://github.com/apps/giscus)을 설치해 주세요.
3. [Giscus 설정 페이지](https://giscus.app/ko)에서 설정값을 생성해 주세요.
4. 생성된 값을 입력해 주세요:

```typescript
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
}
```

### 이미지 교체

`public/` 폴더의 이미지를 교체하세요:

- `avatar.png` - 프로필 이미지 (권장: 128x128px)
- `opengraph.png` - 소셜 공유 이미지 (권장: 1200x630px)

<br/>

## 📝 사용법

### 새 포스트 작성

모든 포스트는 `content/` 디렉터리의 `.mdx` 파일로 관리됩니다.\
아래 예시처럼 Frontmatter(메타데이터)와 본문을 작성하세요.

```mdx
---
title: "Next.js Blog Starter 소개"
date: "2025-01-01"
tags: ["nextjs", "blog", "starter"]
series: "nextjs-tutorial"
---

## 특징

- 다크 모드 지원  
- 검색 기능  
- 태그 및 시리즈 관리  
```
> 💡 MDX에서는 React 컴포넌트를 자유롭게 사용할 수 있습니다.

### 배포하기

Vercel을 이용하면 블로그를 손쉽게 배포할 수 있습니다.

1. [Vercel Dashboard](https://vercel.com/dashboard)에서 `New Project` 를 클릭합니다.
2. 저장소를 연결하고 기본 설정을 유지한 채 `Deploy` 를 선택합니다.
3. 이후 변경사항을 커밋 후 푸시하면 Vercel이 자동으로 새 버전을 빌드 및 배포합니다.

<br/>

## 🌟 스타 히스토리

[![Star History Chart](https://api.star-history.com/svg?repos=jonghwann/jonghwan-nextjs-blog-template&type=date&legend=top-left)](https://www.star-history.com/#jonghwann/jonghwan-nextjs-blog-template&type=date&legend=top-left)

