import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import WorkGrid from '@/components/WorkGrid';
import MoreThanCampaigns from '@/components/MoreThanCampaigns';
import ClientStoriesSection from '@/components/ClientStoriesSection';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected campaigns, identities, and digital experiences created by Red Rhymes for ambitious brands.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <main className="work-page">
      <Reveal as="section" className="work-hero" variant="headline" aria-labelledby="work-heading">
        <div className="work-hero__copy">
          <p className="work-eyebrow"><span /> SELECTED WORK</p>
          <h1 id="work-heading">WORK THAT<br /><em>MOVES</em> BRANDS<span>.</span></h1>
          <p className="work-hero__description">A selection of campaigns, identities and digital experiences created for ambitious brands.</p>
          <div className="work-hero__cta-row">
            <a className="work-hero__link" href="#work-projects">EXPLORE WORK <span>↓</span></a>
          </div>

          <div className="work-hero__metrics">
            <div className="work-hero__metric">
              <span className="work-hero__metric-num">50<b aria-hidden="true">+</b></span>
              <span className="work-hero__metric-label">PROJECTS</span>
            </div>
            <div className="work-hero__metric-sep" aria-hidden="true" />
            <div className="work-hero__metric">
              <span className="work-hero__metric-num">14<b aria-hidden="true">+</b></span>
              <span className="work-hero__metric-label">GLOBAL BRANDS</span>
            </div>
            <div className="work-hero__metric-sep" aria-hidden="true" />
            <div className="work-hero__metric">
              <span className="work-hero__metric-num">100<b aria-hidden="true">%</b></span>
              <span className="work-hero__metric-label">MEASURABLE IMPACT</span>
            </div>
          </div>
        </div>

        <div className="work-hero__visual">
          <img src="/assets/images/work/background.png" alt="Red Rhymes creative work composition" />
          
          <div className="work-hero__badge">
            <div className="work-hero__badge-top">
              <span className="work-hero__badge-dash" aria-hidden="true" />
              <span className="work-hero__badge-code">ARCHIVE / 2026</span>
            </div>
            <p className="work-hero__badge-headline">
              STRATEGY <span>×</span> CREATIVE <span>×</span> DIGITAL
            </p>
            <div className="work-hero__badge-tags">
              <span>AUTOMOTIVE</span>
              <span>HEALTHCARE</span>
              <span>TECHNOLOGY</span>
              <span>CONSUMER</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="div" variant="body">
        <WorkGrid />
      </Reveal>
      <Reveal as="div" variant="body">
        <MoreThanCampaigns />
      </Reveal>
      <Reveal as="div" variant="body">
        <ClientStoriesSection />
      </Reveal>
    </main>
  );
}
