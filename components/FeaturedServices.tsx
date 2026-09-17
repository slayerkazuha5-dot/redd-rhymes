'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const services = [
  { number: '01', title: 'Brand Strategy', href: '/brand-strategy', image: 'brand/brand.png', description: 'Build a clear strategic foundation for brands that want to grow.', detail: 'We help define your purpose, positioning, audience and long-term growth roadmap through insights, strategy and brand thinking.' },
  { number: '02', title: 'Digital Marketing', href: '/digital-marketing', image: 'digital.png', description: 'Connect the right channels, campaigns and content to your audience.', detail: 'We build practical digital systems that turn attention into measurable action across search, social and owned platforms.' },
  { number: '03', title: 'Performance Marketing', href: '/paid-media', image: 'performance.png', description: 'Make every campaign clearer, sharper and more accountable.', detail: 'We plan, launch and optimize paid campaigns around meaningful business outcomes, not surface-level numbers.' },
  { number: '04', title: 'Social Media', href: '/social-media', image: 'social.png', description: 'Build a recognizable presence people want to follow.', detail: 'We combine platform-native creative, community thinking and useful reporting to make social work harder for your brand.' },
  { number: '05', title: 'Creative & Design', href: '/graphic-design', image: 'creative.png', description: 'Turn ideas into a visual language people remember.', detail: 'We shape identities, campaigns and content systems that make your brand easier to recognize and trust.' },
  { number: '06', title: 'Video Production', href: '/video-production', image: 'video.png', description: 'Give your story movement, rhythm and emotional pull.', detail: 'From concept to final cut, we create purposeful video for campaigns, social channels, launches and brand stories.' },
  { number: '07', title: 'Influencer Marketing', href: '/influencer-marketing', image: 'influence.png', description: 'Find credible voices that make your message travel further.', detail: 'We connect brands with relevant creators and build partnerships that feel natural to their communities.' },
  { number: '08', title: 'Brand Activation', href: '/brand-activation', image: 'activation.png', description: 'Create moments that bring people closer to your brand.', detail: 'We turn strategy into memorable launches, experiences and activations with a clear role in the larger brand story.' },
];

export default function FeaturedServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="rr-services-section" aria-labelledby="services-heading">
      <div className="rr-services-shell">
        <Reveal className="rr-services-heading" variant="default">
          <div>
            <p className="rr-section-kicker"><span /> Our Services</p>
            <h2 id="services-heading" className="rr-services-single-line">WHAT WE <em>DO</em><b>.</b></h2>
          </div>
          <p className="rr-services-note">Ideas<br />brands<br />people<br /><b>impact</b></p>
        </Reveal>
        <div className="rr-services-layout">
          <Reveal className="rr-services-list" role="tablist" aria-label="Services" staggerChildren={0.1}>
            {services.map((service, index) => (
              <Reveal
                className="rr-services-list__item"
                key={service.number}
                variant="item"
              >
                <button
                  className={index === activeIndex ? 'is-featured' : ''}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  role="tab"
                  aria-selected={index === activeIndex}
                >
                <span>{service.number}</span>
                <i />
                <strong>{service.title}</strong>
                </button>
                <Link className="rr-services-list__link" href={service.href} aria-label={`Open ${service.title}`}>
                  <b>→</b>
                </Link>
              </Reveal>
            ))}
          </Reveal>
          <Reveal className="rr-service-feature" variant="default" role="tabpanel">
            <Reveal
              className="rr-service-feature__image"
              variant="image"
              style={{ backgroundImage: `url('/assets/images/services/${activeService.image}')` }}
            />
            <Reveal className="rr-service-feature__copy" variant="default">
              <span>{activeService.number}</span>
              <i />
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
              <p>{activeService.detail}</p>
              <Link href={activeService.href}>Explore service <b>↗</b></Link>
              <div className="rr-service-feature__nav" aria-label="Service navigation">
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex - 1 + services.length) % services.length)}
                  aria-label="Previous service"
                >
                  ←
                </button>
                <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % services.length)}
                  aria-label="Next service"
                >
                  →
                </button>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
