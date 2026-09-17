'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the brand,\naudience and opportunity.',
    detail: 'We dive deep into your brand, market, audience and opportunity to uncover what truly matters.',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'Build the right creative\nand growth strategy.',
    detail: 'We turn insight into a clear creative and growth strategy built around your biggest opportunity.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'Turn strategy into campaigns\npeople remember.',
    detail: 'We transform strategy into purposeful campaigns, content and experiences people remember.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Measure, learn and scale\nwhat works.',
    detail: 'We measure meaningful signals, learn quickly and scale the work that creates real impact.',
  },
];

export default function FromIdeaToImpact() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <section className="rr-process-section" aria-labelledby="process-heading">
      <div className="rr-process-shell">
        <Reveal className="rr-process-intro" variant="default">
          <Reveal variant="headline"><div>
            <p className="rr-process-kicker"><span /> How we work</p>
            <h2 id="process-heading">From idea<br />to <em>impact</em><b>.</b></h2>
          </div></Reveal>
          <Reveal variant="body" delay={0.1}><p className="rr-process-summary">A simple process built around<br className="rr-process-summary-break" /> clarity, creativity and measurable growth.</p></Reveal>
        </Reveal>

        <Reveal className="rr-process-tracker" role="tablist" aria-label="Our process" staggerChildren={0.12}>
          {steps.map((step, index) => (
            <Reveal className="rr-process-step__reveal" variant="item" key={step.number}>
              <button
              className={`rr-process-step${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`process-panel-${step.number}`}
              type="button"
              >
              <span className="rr-process-step__top">
                <strong>{step.number}</strong>
                <i aria-hidden="true" />
                <span className="rr-process-step__line" aria-hidden="true" />
              </span>
              <span className="rr-process-step__title">{step.title}</span>
              <span className="rr-process-step__description">{step.description}</span>
              </button>
            </Reveal>
          ))}
        </Reveal>

        <Reveal className="rr-process-detail" id={`process-panel-${activeStep.number}`} role="tabpanel">
          <Reveal className="rr-process-detail__copy" variant="default">
            <p className="rr-process-counter"><strong>{activeStep.number}</strong><span>/ 04</span><i /></p>
            <h3>{activeStep.title}</h3>
            <p>{activeStep.detail}</p>
            <button className="rr-process-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % steps.length)}>
              Next <span aria-hidden="true">→</span>
            </button>
          </Reveal>
          <Reveal className="rr-process-detail__visual" variant="image">
            <div className="rr-process-detail__photo" aria-hidden="true" />
            <div className="rr-process-detail__overlay">Better brands<br />start with<br />bigger questions.<span /></div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
