import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Strategy',
  description:
    'Build a brand with a clear point of view, purposeful creativity, and a strategy that knows where it is going.',
  alternates: { canonical: '/brand-strategy' },
};

const serviceItems = [
  ['01', 'POSITIONING', 'Define where your brand belongs, who it serves and what makes it different.', '25%'],
  ['02', 'AUDIENCE', 'Understand the people you want to reach and what matters to them.', '42%'],
  ['03', 'BRAND VOICE', 'Create a distinct personality and tone that makes your brand recognizable.', '60%'],
  ['04', 'MESSAGING', 'Shape your value proposition, key messages and brand story.', '78%'],
  ['05', 'BRAND DIRECTION', 'Create the strategic foundation for your identity, marketing and communication.', '92%'],
];

const approachSteps = [
  ['01', 'UNDERSTAND', 'Business, market and audience.'],
  ['02', 'DEFINE', 'Purpose, positioning and personality.'],
  ['03', 'DIFFERENTIATE', 'Voice, message and competitive distinction.'],
  ['04', 'DIRECT', 'A clear foundation for branding and marketing.'],
];

const brandStrategyImages = [
  '/assets/images/services/brand/brand.png',
  '/assets/images/services/brand/landing.png',
  '/assets/images/services/brand/approach.png',
];

export default function BrandStrategyPage() {
  return (
    <main className="brand-strategy-page">
      <section className="brand-strategy-hero">
        <div className="brand-strategy-hero__intro">
          <p className="brand-strategy-eyebrow"><span /> BRAND STRATEGY</p>
          <h1 id="brand-strategy-heading">BUILD A BRAND<br />PEOPLE <em>REMEMBER.</em></h1>
          <p className="brand-strategy-description">We help businesses define their position, personality and message — creating a clear foundation for everything they do.</p>
          <a className="brand-strategy-explore" href="#brand-strategy-approach">EXPLORE OUR APPROACH <span>↓</span></a>
          <div className="brand-strategy-hero__list"><span>STRATEGY</span><span>POSITIONING</span><span>IDENTITY</span><span>DIRECTION</span></div>
        </div>
        <div className="brand-strategy-hero__image">
          <img src="/assets/images/services/brand/landing.png" alt="Black and white brand strategy moodboard with red accents" />
        </div>
      </section>

      <section className="brand-strategy-approach" id="brand-strategy-approach">
        <div className="brand-strategy-approach__top">
          <div className="brand-strategy-section-heading">
            <p className="brand-strategy-eyebrow"><span /> OUR APPROACH</p>
            <h2><em>CLARITY</em> BEFORE<br />CREATIVITY<span className="brand-strategy-dot">.</span></h2>
            <p>We start by understanding your business, then build a strategic direction that makes your brand easier to recognize, communicate and grow.</p>
            <small>A STRONGER TOMORROW<br />THROUGH CLEARER BRANDS.</small>
          </div>
          <div className="brand-strategy-approach__visual" aria-hidden="true">
            <img src="/assets/images/services/brand/approach.png" alt="" />
          </div>
        </div>
        <div className="brand-strategy-steps">
          {approachSteps.map(([number, title, description], index) => (
            <article className={`brand-strategy-step${index === 0 ? ' is-active' : ''}`} key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true">—›</b>
            </article>
          ))}
          <div className="brand-strategy-steps__line" aria-hidden="true" />
        </div>
      </section>

      <section className="brand-strategy-help">
        <div className="brand-strategy-help__heading">
          <div className="brand-strategy-section-heading">
            <p className="brand-strategy-eyebrow"><span /> WHAT WE HELP WITH</p>
            <h2>FROM UNCLEAR TO<br /><em>UNMISTAKABLE.</em></h2>
          </div>
          <div><p>We bring clarity to the ideas behind your brand and turn them into a direction your business can consistently communicate.</p><small>STRATEGY CREATES MOMENTUM.</small></div>
        </div>
        <div className="brand-strategy-help__list">
          {serviceItems.map(([number, title, description, position], index) => (
            <article className="brand-strategy-help__item" key={number}>
              <span>{number}</span><i>—</i><h3>{title}</h3><p>{description}</p>
              <div className="brand-strategy-help__thumb"><img src={brandStrategyImages[index % brandStrategyImages.length]} alt="" style={{ objectPosition: position }} /></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
