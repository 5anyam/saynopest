// app/privacy-policy/page.tsx
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com';
  const canonicalUrl = `${baseUrl}/privacy-policy`;
  const featuredImage = `${baseUrl}/types/ants-hero-image.jpg`; // or use your main ant image
  
  const title = "Common Types of Ants in the US | Identification & Control Guide";
  const description = "Discover the most common ant species found in American homes including Fire Ants, Carpenter Ants, Pavement Ants, and more. Learn identification tips and effective control methods.";
  
  return {
    title: title,
    description: description,
    keywords: "ants, ant types, fire ants, carpenter ants, pavement ants, army ants, twig ants, argentine ants, ant identification, pest control, ant removal, ant infestation",
    authors: [{ name: 'Say No Pest' }],
    creator: 'Say No Pest',
    publisher: 'Say No Pest',
    
    // Open Graph
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: 'Say No Pest',
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: "Common types of ants found in US homes - identification guide",
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [featuredImage],
      creator: '@saynopest',
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Additional SEO
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Category and topic metadata
    category: 'Pest Control',
    
    // Additional structured metadata
    other: {
      'article:section': 'Ant Control',
      'article:tag': 'fire ants, carpenter ants, pavement ants, army ants, twig ants, argentine ants, pest identification',
      'og:image:alt': 'Guide to common ant types found in US homes',
      'twitter:image:alt': 'Guide to common ant types found in US homes',
      // Schema.org hints
      'schema:breadcrumb': 'Home > Pest Control > Ants > Ant Types',
      'geo:region': 'US',
      'geo:placename': 'United States',
    },
  };
}
  export default function PrivacyPolicyPage() {
    return (
      <main className="max-w-4xl mt-24 lg:mt-0 mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
  
        <p className="mb-4">
          At SayNoPest.com we take your privacy seriously and our team members work to their utmost potential to protect your personal data. Our Privacy Policy provides you all the information on:
        </p>
  
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>The types of data we collect</li>
          <li>How we use the data</li>
          <li>The stuff our team do to ensure that your information is safe with us.</li>
        </ul>
  
        <p className="mb-4">When you visit our website, you will agree to the terms and conditions mentioned in this Policy.</p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
        <p className="mb-4">
          Under our children’s policy, children under the age of thirteen should not use saynopest. We do not intentionally collect any personal information from persons under the age of 15 years. Please get in touch with us at www.saynopest.com if you are a parent or guardian and think that your child has given us any personal information by mistake.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">What Personal Information We Collect</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">1. Information Provided Voluntarily:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Your name</li>
          <li>Email address</li>
          <li>Location (City/State/Country)</li>
          <li>Any details you provide in any comment section</li>
        </ul>
  
        <h3 className="text-xl font-semibold mt-4 mb-2">2. Information Collected Automatically:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Pages visited and time spent on site</li>
          <li>Clicks, scroll behavior, and page interactions</li>
          <li>Cookies and session information</li>
        </ul>
        <p className="mb-4">Cookies help us in improving your experience by remembering your preferences. But you can choose to disable cookies.</p>
  
        <h3 className="text-xl font-semibold mt-4 mb-2">3. Information from Third Parties:</h3>
        <p className="mb-4">We might get information about you from email service methods, advertising platforms, data analysis businesses, and partners who are affiliates.</p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Provide you with relevant pest control content and product suggestions</li>
          <li>Monitor and evaluate user activity to improve our website</li>
          <li>Revert to your inquiries and solve your doubts</li>
          <li>Customize user experience</li>
          <li>Display ads or links to third-party services</li>
          <li>Serve Remarketing Advertisements</li>
          <li>Send updates and promotional messages only when you agree</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Disclosure (Keeping It Transparent)</h2>
        <p className="mb-4">
          If you follow some links on SayNoPest.com and book a service or make a purchase, we may receive a small commission for that at no additional cost to you.
        </p>
        <p className="mb-4">
          We only promote products, treatments, or service providers that we truly believe can help solve real pest problems. However, we always recommend that you do your own research before making any purchase.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Share Your Information</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>We do not sell your personal information</li>
          <li>Affiliate links track referrals for commissions</li>
          <li>Analytics tools like Google Analytics or Meta Pixel help us improve the site</li>
          <li>Email providers store emails securely for updates</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
        <p className="mb-4">
          SayNoPest.com holds onto your personal info as long as needed for service, improvement, or legal obligations. You may request to view, change, or delete your data at any time.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
        <p className="mb-4">
          We use restricted systems with regular updates to protect your data. However, no system is 100% secure.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Google Ads and Tools</h2>
        <p className="mb-4">
          We use Google Ads and remarketing tools to show you relevant ads based on your visits to SayNoPest.com.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Links</h2>
        <p className="mb-4">
          We share links to pest control service providers or retailers. While we choose these links carefully, we are not responsible for their content or privacy practices. Please review their privacy policies before sharing personal information.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-2">Email: <em>support@saynopest.com</em></p>
        <p className="mb-4">Mailing Address:<br />SayNoPest<br />16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA</p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We can change our Policy whenever needed. Updates will be posted here with a revised date.
        </p>
      </main>
    );
  }
  