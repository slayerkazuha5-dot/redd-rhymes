import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Red Rhymes | Book a Social Media Strategy Call',
  description: 'Talk to Red Rhymes about social media strategy, content, influencer campaigns, paid social, and digital growth for your business.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
