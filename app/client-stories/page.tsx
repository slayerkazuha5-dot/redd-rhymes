import type { Metadata } from 'next';
import ClientStoriesSection from '@/components/ClientStoriesSection';

export const metadata: Metadata = {
  title: 'Client Stories',
  description: 'Real collaborations, real conversations and the stories behind the work we create together.',
  alternates: { canonical: '/client-stories' },
};

export default function ClientStoriesPage() {
  return <ClientStoriesSection />;
}
