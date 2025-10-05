interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  const { default: Post } = await import(`../../content/${slug}.mdx`);

  return <Post />;
}
