'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const cards = [
  {
    id: '01',
    title: 'STRATEGY',
    text: 'Start with the business problem,<br />audience and opportunity.',
    href: '/brand-strategy',
    image: '/assets/images/work/img4.png',
    alt: 'Abstract brand strategy composition',
  },
  {
    id: '02',
    title: 'CREATIVITY',
    text: 'Turn insight into ideas,<br />stories and experiences.',
    href: '/graphic-design',
    image: '/assets/images/work/img2.png',
    alt: 'Creative campaign composition',
  },
  {
    id: '03',
    title: 'PERFORMANCE',
    text: 'Measure what matters<br />and keep improving.',
    href: '/paid-media',
    image: '/assets/images/work/img5.png',
    alt: 'Performance marketing composition',
  },
];

export default function MoreThanCampaigns() {
  const [mobileSlide, setMobileSlide] = useState(0);

  const previousCard = () => setMobileSlide((current) => Math.max(current - 1, 0));
  const nextCard = () => setMobileSlide((current) => Math.min(current + 1, cards.length - 1));

  return (
    <section className="rr-different-approach" aria-labelledby="different-approach-heading">
      <div className="rr-difference-top">
        <Reveal className="rr-difference-intro" variant="default">
          <p className="rr-different-kicker"><span /> THE RED RHYMES DIFFERENCE</p>
          <h2 id="different-approach-heading">MORE THAN<br /><em>JUST</em><br />CAMPAIGNS<span>.</span></h2>
          <p>We bring strategy, creativity and performance together to create work that moves brands forward.</p>
        </Reveal>
        <Reveal className="rr-difference-collage" variant="image">
          <img src="/assets/images/work/feature1.png" alt="Strategy, creativity and performance collage" />
        </Reveal>
      </div>
      <div className="rr-difference-ribbon" aria-label="Strategy, creativity and performance">
        <span>STRATEGY</span><b>+</b><span>CREATIVITY</span><b>+</b><span>PERFORMANCE</span><i /><small>IDEAS<br />PEOPLE<br />PROGRESS.</small>
      </div>

      <div className="rr-difference-grid" aria-live="polite">
        {cards.map((card) => (
          <Reveal className="rr-difference-card" key={card.id} variant="item">
            <div className="rr-difference-card__heading"><span>{card.id}</span><i /><h3>{card.title}</h3></div>
            <p dangerouslySetInnerHTML={{ __html: card.text }} />
            <a href={card.href}><b>↗</b> LEARN MORE <i /></a>
            <div className="rr-difference-card__image"><img src={card.image} alt={card.alt} /></div>
          </Reveal>
        ))}
      </div>

      <div className="rr-difference-slider" aria-live="polite">
        <div className="rr-difference-slider__viewport">
          <div className="rr-difference-slider__track" style={{ transform: `translateX(-${mobileSlide * 100}%)` }}>
            {cards.map((card) => (
              <div className="rr-difference-slide" key={`${card.id}-slide`}>
                <Reveal className="rr-difference-card rr-difference-card--mobile" variant="item">
                  <div className="rr-difference-card__heading"><span>{card.id}</span><i /><h3>{card.title}</h3></div>
                  <p dangerouslySetInnerHTML={{ __html: card.text }} />
                  <a href={card.href}><b>↗</b> LEARN MORE <i /></a>
                  <div className="rr-difference-card__image"><img src={card.image} alt={card.alt} /></div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <div className="rr-difference-slider__controls">
          <button type="button" aria-label="Previous strategy card" disabled={mobileSlide === 0} onClick={previousCard}>←</button>
          <button type="button" aria-label="Next strategy card" disabled={mobileSlide === cards.length - 1} onClick={nextCard}>→</button>
        </div>
      </div>
    </section>
  );
}
