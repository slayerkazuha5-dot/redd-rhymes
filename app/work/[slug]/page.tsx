import Link from 'next/link';
import HondaCaseStudy from '@/components/HondaCaseStudy';

type WorkProjectPageProps = { params: Promise<{ slug: string }> };

export default async function WorkProjectPage({ params }: WorkProjectPageProps) {
  const { slug } = await params;

  if (slug !== 'honda-brighter-tomorrow') {
    return (
      <main className="case-study-page case-study-page--placeholder">
        <p className="case-study-eyebrow"><span /> SELECTED WORK</p>
        <h1>SELECTED<br /><em>WORK.</em></h1>
        <Link href="/work">← Back to all work</Link>
      </main>
    );
  }

  return <HondaCaseStudy />;
}
