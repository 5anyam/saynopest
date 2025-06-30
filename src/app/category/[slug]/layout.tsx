import PreloaderWrapper from '@/components/PreloaderWrapper';
import React from 'react';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const canonicalUrl = `https://www.saynopest.com/category/${params.slug}`;
  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <PreloaderWrapper>{children}</PreloaderWrapper>;
}
