// app/privacy-policy/page.tsx

export const metadata = {
    title: 'Privacy Policy - SayNoPest',
    description: 'Read our privacy policy on how we collect, use, and protect your data at SayNoPest.com.',
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
  
        <p className="mb-4">
          At SayNoPest.com (Website) we take your privacy seriously and our team members work to their utmost potential to protect your personal data. Our Privacy Policy provides you all the information on:
        </p>
  
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>The types of data we collect</li>
          <li>How we use the data</li>
          <li>The stuff our team do to ensure that your information is safe with us.</li>
        </ul>
  
        <p className="mb-4">When you visit our website, you will agree to the terms and conditions mentioned in this Policy.</p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
        <p className="mb-4">
          Under our children’s policy, children under the age of fifteen should not use saynopest. We do not intentionally collect any personal information from persons under the age of 15 years. Please get in touch with us at www.saynopest.com if you are a parent or guardian and think that your child has given us any personal information by mistake.
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
        <p className="mb-2">Email: <em>…@saynopest.com</em></p>
        <p className="mb-4">Mailing Address:<br />SayNoPest<br />[Saynopest’s Business Address Here]</p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We can change our Policy whenever needed. Updates will be posted here with a revised date.
        </p>
      </main>
    );
  }
  