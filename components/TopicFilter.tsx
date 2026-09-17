'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const TOPICS = [
  { id: '01', label: 'ALL' },
  { id: '02', label: 'BRAND\nSTRATEGY' },
  { id: '03', label: 'DIGITAL\nMARKETING' },
  { id: '04', label: 'PERFORMANCE\nMARKETING' },
  { id: '05', label: 'SOCIAL\nMEDIA' },
  { id: '06', label: 'CREATIVE\n& DESIGN' },
  { id: '07', label: 'VIDEO\nPRODUCTION' },
  { id: '08', label: 'INFLUENCER\nMARKETING' },
  { id: '09', label: 'BRAND\nACTIVATION' },
];

export default function TopicFilter() {
  const [active, setActive] = useState('01');

  return (
    <section className="tad" aria-label="Explore topics by discipline">

      {/* Top eyebrow row */}
      <Reveal className="tad__header" variant="default">
        <div className="tad__eyebrow">
          <span className="tad__eyebrow-dash" aria-hidden="true" />
          <span className="tad__eyebrow-label">Explore Topics</span>
        </div>
        <div className="tad__corner">
          <span className="tad__corner-rule" aria-hidden="true" />
          <p className="tad__corner-text">IDEAS<br />THAT<br />MOVE<br />BRANDS</p>
        </div>
      </Reveal>

      {/* Headline row */}
      <div className="tad__headline-row">
        <Reveal className="tad__headline-wrap" variant="headline">
          <h2 className="tad__headline">
            <span className="tad__hl-black">THINKING ACROSS</span>
            <span className="tad__hl-red">DISCIPLINES.</span>
          </h2>
        </Reveal>
        <Reveal className="tad__headline-aside" variant="body" delay={0.12}>
          <p className="tad__aside-text">
            DIFFERENT PERSPECTIVES.<br />A BRIGHTER TOMORROW.
          </p>
          <span className="tad__aside-rule" aria-hidden="true" />
        </Reveal>
      </div>

      {/* Topic filter grid */}
      <Reveal className="tad__filters" role="list" aria-label="Topic filters" variant="default" delay={0.08}>
        {TOPICS.map((topic, i) => {
          const isActive = active === topic.id;
          return (
            <button
              key={topic.id}
              className={`tad__filter-item${isActive ? ' tad__filter-item--active' : ''}`}
              onClick={() => setActive(topic.id)}
              aria-pressed={isActive}
              role="listitem"
              style={i === 0 ? { borderLeft: '1px solid rgba(11,11,11,0.12)' } : undefined}
            >
              <span className="tad__filter-num">{topic.id}</span>
              <span className="tad__filter-label">
                {topic.label.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </span>
              <span className="tad__filter-arrow" aria-hidden="true">→</span>
              {isActive && <span className="tad__filter-bar" aria-hidden="true" />}
            </button>
          );
        })}
      </Reveal>

      {/* Footer row */}
      <Reveal className="tad__footer" variant="default" delay={0.1}>
        <span className="tad__footer-left">INSIGHTS FOR A BRIGHTER TOMORROW</span>
        <span className="tad__footer-right">2026</span>
      </Reveal>

    </section>
  );
}
