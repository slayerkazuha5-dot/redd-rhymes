import Image from 'next/image';
import type { Metadata } from 'next';
import TopicFilter from '@/components/TopicFilter';
import ClientTestimonials from '@/components/ClientTestimonials';
import BuildCta from '@/components/BuildCta';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
    title: "Social Media Insights and Marketing Guides",
    description: "Read practical Red Rhymes insights about social media strategy, content, influencer marketing, digital growth, and online brand safety.",
    alternates: { canonical: '/blog' },
};

export default function Page() {
  const insightNav = [
    { label: 'Featured Insight', href: '#featured-insight' },
    { label: 'Explore Topics', href: '#explore-topics' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'CTA', href: '#cta' },
  ];

  return (
    <main className="insights-page">

      {/* ── Hero ────────────────────────────────── */}
      <section className="insights-hero" aria-labelledby="insights-hero-title">
        <Reveal className="insights-hero__content" variant="default">
          <Reveal variant="body">
            <div className="insights-hero__eyebrow">
              <span className="insights-hero__dash" aria-hidden="true" />
              <span>INSIGHTS</span>
            </div>
          </Reveal>

          <Reveal variant="headline" delay={0.08}>
            <h1 id="insights-hero-title" className="insights-hero__headline">
              <span className="insights-hero__line">IDEAS WORTH</span>
              <span className="insights-hero__line insights-hero__line--red">
                SHARING<span className="insights-hero__dot">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal variant="body" delay={0.14}>
            <p className="insights-hero__description">
              Perspectives on branding, marketing,<br />
              creativity and digital growth.
            </p>
          </Reveal>

          <Reveal variant="button" delay={0.2}>
            <a href="#" className="insights-hero__link">
              LATEST THINKING <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <div className="insights-hero__divider" aria-hidden="true" />

          <Reveal variant="body" delay={0.26}>
            <div className="insights-hero__meta">
              <div className="insights-hero__brand">RED RHYMES</div>
              <div className="insights-hero__meta-divider" aria-hidden="true" />
              <div className="insights-hero__tags" aria-label="Red Rhymes topics">
                <span>BRANDS</span>
                <span>IDEAS</span>
                <span>PEOPLE</span>
                <span>PROGRESS</span>
              </div>
            </div>
          </Reveal>
        </Reveal>
      </section>

      <nav className="insights-page__nav" aria-label="Insights sections">
        <ul className="insights-page__nav-list">
          {insightNav.map((item) => (
            <li key={item.href} className="insights-page__nav-item">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Featured Insight ────────────────────── */}
      <section id="featured-insight" className="fi" aria-labelledby="fi-headline">

        {/* Top eyebrow row */}
        <Reveal className="fi__header" variant="default">
          <div className="fi__eyebrow">
            <span className="fi__eyebrow-dash" aria-hidden="true" />
            <span className="fi__eyebrow-label">Featured Insight</span>
          </div>
          <div className="fi__corner">
            <span className="fi__corner-rule" aria-hidden="true" />
            <p className="fi__corner-text">IDEAS<br />THAT<br />MOVE<br />BRANDS</p>
          </div>
        </Reveal>

        {/* Main 62/38 grid */}
        <div className="fi__body">

          {/* Left — full-bleed image with smooth scale reveal */}
          <Reveal className="fi__image-wrap" variant="image">
            <Image
              src="/assets/images/insight/feature.png"
              alt="A Bolder Tomorrow — brand strategy editorial composition"
              fill
              sizes="(max-width: 960px) 100vw, 62vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </Reveal>

          {/* Right — editorial column with staggered entrance */}
          <div className="fi__editorial">
            <Reveal variant="body">
              <div className="fi__meta-row">
                <span className="fi__category">Brand Strategy</span>
                <span className="fi__date">18 Sep 2026</span>
              </div>
            </Reveal>

            <Reveal variant="headline" delay={0.08}>
              <h2 id="fi-headline" className="fi__headline">
                <span className="fi__headline-black">WHY BRAND</span>
                <span className="fi__headline-black">POSITIONING</span>
                <span className="fi__headline-red">MATTERS MORE</span>
                <span className="fi__headline-red">THAN EVER</span>
              </h2>
            </Reveal>

            <Reveal variant="body" delay={0.14}>
              <p className="fi__description">
                Strong brands are built on clarity. Discover why
                positioning has become one of the most important
                foundations for modern brands.
              </p>
            </Reveal>

            <Reveal variant="button" delay={0.2}>
              <a href="#" className="fi__read-link">Read Article ↗</a>
            </Reveal>
          </div>
        </div>

        {/* Bottom footer bar */}
        <Reveal className="fi__footer" variant="default" delay={0.1}>
          <div className="fi__footer-left">
            <span className="fi__footer-brand">Red Rhymes</span>
            <span className="fi__footer-line" aria-hidden="true" />
          </div>
          <span className="fi__footer-tags">
            Creative&nbsp;/&nbsp;Branding&nbsp;/&nbsp;Marketing&nbsp;/&nbsp;Impact
          </span>
        </Reveal>

      </section>

      {/* ── Topic Filter ─────────────────────────── */}
      <div id="explore-topics">
        <TopicFilter />
      </div>

      {/* ── Client Testimonials ────────────────── */}
      <div id="testimonials">
        <ClientTestimonials />
      </div>

      {/* ── Build CTA ─────────────────────────── */}
      <div id="cta">
        <BuildCta />
      </div>

    </main>
  );
}
