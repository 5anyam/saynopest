import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Pest Control Services & Insect Information | SayNoPest",
  description: "SayNoPest connects you with trusted pest control providers and offers expert insights on insects, treatments, and home protection across the USA.",
  openGraph: {
    title: "Say No Pest",
    description: "Top pest control services across the U.S.",
    url: "https://www.saynopest.com",
    siteName: "Say No Pest",
    images: [
      {
        url: "/saynopest-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Say No Pest",
    description: "Your go to best pest control companies across U.S.",
    images: ["/saynopest-logo.png"],
  },
  metadataBase: new URL("https://www.saynopest.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "SayNoPest",
    "url": "https://www.saynopest.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.saynopest.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SayNoPest",
    "image": "https://www.saynopest.com/_next/image?url=%2Fsaynopest-logo.png&w=384&q=75",
    "@id": "https://www.saynopest.com/",
    "url": "https://www.saynopest.com/",
    "telephone": "+121-7773-5600",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16192 Coastal Highway",
      "addressLocality": "Lewes",
      "addressRegion": "DE",
      "postalCode": "19958",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.7646723,
      "longitude": -75.21184819999999
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/people/Saynopest/61575434679519/",
      "https://www.instagram.com/saynopest/",
      "https://www.linkedin.com/company/saynopest/"
    ]
  };


  return (
    <html lang="en">
      <head>
        {/* CookieYes */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/5f6936e797dbab1bcbc19be4/script.js"
          strategy="afterInteractive"
        />

        {/* SEO Meta Tags */}
        <meta
          name="google-adsense-account"
          content="ca-pub-7212342270102504"
        />
        <meta
          name="google-site-verification"
          content="SrhB-NOlpPpJPL5wP3FpRwuT1yDTE2e0SdFOtcrkfa0"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8BRKYL2QR2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8BRKYL2QR2');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5PWLLD2N');
          `}
        </Script>
        
      </head>
      <body
        className={`${inter.className} antialiased overflow-y-scroll w-full overflow-x-hidden`}
      >
        {/* GTM NoScript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PWLLD2N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
          }}
        />

        <div className="w-screen p-4 md:p-10 mx-auto bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
