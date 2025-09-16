import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com';
  const canonicalUrl = `${baseUrl}/terms-and-conditions`;
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

export default function TermsPage() {
    return (
      <main className="max-w-4xl mx-auto mt-10 px-4 py-12">
        <h1 className="text-3xl text-primary font-bold mb-6">TERMS AND CONDITIONS FOR SAYNOPEST</h1>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Terms and Conditions</h2>
        <p><strong>Effective Date:</strong> 27th May 2025</p>
        <p><strong>Website:</strong> <a href="https://www.saynopest.com" className="text-blue-600 underline">www.saynopest.com</a></p>
        <p className="mt-4">Welcome to our site, SayNoPest. By using this website, you’re confirming that you’ve read and agreed to all our Terms and Conditions.</p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          These Terms and Conditions are the rules you agree to follow while using our website. Your continued use of the Website means you’re okay with everything outlined here.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Affiliate Disclosure</h2>
        <p>
          SayNoPest works with trusted pest control companies through affiliate partnerships. That means we might earn a small amount if you click a link and book a service or make a purchase from a provider we mention. These small commissions help us maintain the site and keep sharing helpful tips and information related to pest control across the U.S.
        </p>
        <p className="mt-2">We don’t run or manage any of the companies we talk about.</p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Website</h2>
        <p>By using our site, you agree to use it responsibly and legally. Please don’t:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use the site in a way that breaks any laws</li>
          <li>Try to hack into the website or its systems</li>
          <li>Use bots or tools to grab information without permission</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property Rights</h2>
        <p>
          All content on this site — including text, images, logos, and tools — is owned by SayNoPest and protected by copyright laws. Please don’t copy, share, or use any of it without permission.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
        <p>
          As far as the law allows, SayNoPest is not responsible for any loss or damage resulting from using our site or any third-party services we link to. We also can’t guarantee the performance or availability of those services.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Websites and Services</h2>
        <p>
          We may link to other websites we don’t control. SayNoPest is not responsible for what those sites say or do. Any actions you take with them are between you and that provider.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. User Conduct</h2>
        <p>By using our site, you agree not to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Post or transmit content that’s defamatory, obscene, fraudulent, or harmful</li>
          <li>Interfere with the operation of the website</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination of Use</h2>
        <p>
          If anyone violates these Terms or harms the website, its partners, or users, we reserve the right to deny or limit access to the Website.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
        <p>
          This agreement is governed by U.S. law. Any disputes must be handled in a competent court within the United States.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Modifications to Terms</h2>
        <p>
          SayNoPest may change these Terms at any time without prior notice. Updated Terms will be posted here with a new “Effective Date.” Continued use of the site means you accept the changes.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, feel free to contact us:</p>
        <ul className="list-disc list-inside mt-2">
          <li>📧 Email: <a href="mailto:support@saynopest.com" className="text-blue-600 underline">support@saynopest.com</a></li>
          <li>🌐 Website: <a href="https://www.saynopest.com" className="text-blue-600 underline">www.saynopest.com</a></li>
        </ul>
      </main>
    );
  }
  