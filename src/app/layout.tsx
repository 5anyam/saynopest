import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Say No Pest",
  description: "Your go to best pest control companies across U.S.",
  openGraph: {
    title: "Say No Pest",
    description: "Top pest control services across the U.S.",
    url: "https://saynopest.com",
    siteName: "Say No Pest",
    images: [
      {
        url: "/saynopest-logo.png", // Place this image in /public
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
  metadataBase: new URL("https://saynopest.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

        <div className="w-screen p-4 md:p-10 mx-auto bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
