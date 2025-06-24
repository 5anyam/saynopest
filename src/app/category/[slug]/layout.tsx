import PreloaderWrapper from '@/components/PreloaderWrapper';
import React from 'react';

interface CategoryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function CategoryLayout({ children, params }: CategoryLayoutProps) {
  const resolvedParams = await params;
  const canonicalUrl = `https://www.saynopest.com/${resolvedParams.slug}`;

  return (
    <html>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body><PreloaderWrapper>{children}</PreloaderWrapper></body>
    </html>
  );
}
