// app/blog/[slug]/layout.tsx

export default function BlogLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { slug: string };
  }) {
    const canonicalUrl = `https://www.saynopest.com/${params.slug}`;
  
    return (
      <>
        <head>
          <link rel="canonical" href={canonicalUrl} />
        </head>
        {children}
      </>
    );
  }
  