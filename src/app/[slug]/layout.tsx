
import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function BlogLayout({ children, params }: BlogLayoutProps) {
  const resolvedParams = await params;
  const canonicalUrl = `https://www.saynopest.com/${resolvedParams.slug}`;

  return (
    <html>
      <head>
        <link rel="canonical" href={canonicalUrl}/>
      </head>
      <body>{children}</body>
    </html>
  );
}
