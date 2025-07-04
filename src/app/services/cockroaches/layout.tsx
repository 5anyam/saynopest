
import React from 'react';

interface ServicesLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function ServicesLayout({ children }: ServicesLayoutProps) {
  const canonicalUrl = `https://www.saynopest.com/services/cockroaches`;

  return (
    <html>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body>{children}</body>
    </html>
  );
}
