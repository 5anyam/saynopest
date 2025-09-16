import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.saynopest.com';
  const canonicalUrl = `${baseUrl}/disclaimer`;
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

export default function DisclaimerPage() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl text-primary font-bold mb-6">DISCLAIMER FOR SAYNOPEST</h1>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer for SayNoPest</h2>
        <p>
          The information provided by SayNoPest (we, us or our) on <a href="https://www.saynopest.com" className="text-blue-600 underline">www.saynopest.com</a> is to share helpful tips and promote services we trust. By accessing or using this website, you accept these terms.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Affiliate Disclosure</h2>
        <p>
          SayNoPest works with pest control partners who offer affiliate programs. This means we may earn some amount if you click on any links and book any pest control services through companies we mention on our website. These clicks help us maintain our website and provide you with important information related to the pest market across the United States. However, our editorial content is not influenced by affiliate partnerships.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Third-Party Content and Services</h2>
        <p>
          While we strive to team up with trustworthy pest control companies, we do not run or manage any third-party companies. Therefore, SayNoPest is not responsible for their services, prices, promises, guarantees, claims, or experiences users may encounter after engaging with a third-party service provider. Always perform your own research before finalizing any company.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Accuracy of Information</h2>
        <p>
          The information on SayNoPest is posted with sincere intent and is only meant to provide general knowledge. We try to keep the information as accurate and current as possible. Still, we do not take responsibility for how complete, truthful, or correct the information on the site may be. Pest control solutions and provider availability may change without notice.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. State Regulations and Regional Variations</h2>
        <p>
          Pest control laws, licensing requirements, and service availability vary by state and municipality across the United States. SayNoPest does not claim to reflect all regional differences or comply with every local regulation. It is the responsibility of users to verify that any pest control service provider they choose meets the legal and safety standards in their specific location.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
        <p>
          Under any circumstance, the owner of SayNoPest will not be responsible for any damages, either direct or indirect, caused by using or not using our website or by relying on the information provided.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
        <p>
          If you have any doubts about this Disclaimer, please contact us at:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>📧 Email: <a href="mailto:support@saynopest.com" className="text-blue-600 underline">support@saynopest.com</a></li>
          <li>🌐 Website: <a href="https://www.saynopest.com" className="text-blue-600 underline">www.saynopest.com</a></li>
        </ul>
      </main>
    );
  }
  