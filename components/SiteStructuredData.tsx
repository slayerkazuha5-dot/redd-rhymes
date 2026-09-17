export default function SiteStructuredData() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Red Rhymes',
      url: 'https://redrhymes.com/',
      logo: 'https://redrhymes.com/assets/images/logo/redd_Black.png',
      email: 'admin@redrhymes.com',
      telephone: '+91 9971 094 965',
      sameAs: [
        'https://www.facebook.com/redrhymes1',
        'https://www.instagram.com/redrhymes_/',
        'https://www.youtube.com/@Redd.1',
        'https://www.linkedin.com/company/red-rhymes-consulting/',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Red Rhymes',
      url: 'https://redrhymes.com/',
      image: 'https://redrhymes.com/assets/images/logo/redd_Black.png',
      telephone: '+91 9971 094 965',
      email: 'admin@redrhymes.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'E-2, Sector 63',
        addressLocality: 'Noida',
        postalCode: '201301',
        addressCountry: 'IN',
      },
      areaServed: ['Noida', 'Delhi NCR'],
      serviceType: [
        'Social media strategy',
        'Content marketing',
        'Influencer marketing',
        'Paid social campaigns',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Red Rhymes',
      url: 'https://redrhymes.com/',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a social media consultancy do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A social media consultancy connects audience research, platform strategy, content planning, community management, campaigns, and reporting to support clear business goals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which social platforms should my business use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The right platforms depend on your audience, offer, goals, and available resources. Red Rhymes helps businesses prioritize the platforms where their customers already spend time.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you measure social media performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Performance can include engagement quality, audience growth, website traffic, enquiries, leads, conversions, and campaign efficiency, depending on the agreed goals.',
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
