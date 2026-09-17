import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: 'About Red Rhymes | Social Media Consultancy in Noida',
  description: 'Learn how Red Rhymes helps brands in Noida and Delhi NCR grow through social media strategy, content, campaigns, and digital services.',
  alternates: { canonical: '/about-us' },
};

export default function Page() {
  return (
    <>
      <script
        key="schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://redrhymes.com/"},{"@type":"ListItem","position":2,"name":"About Us","item":"https://redrhymes.com/about-us"}]}'
        }}
      />

      <AboutSection />
    </>
  );
}
