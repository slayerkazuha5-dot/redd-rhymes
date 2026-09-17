'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const questions = [
  {
    question: 'What services do you offer?',
    answer: 'We offer end-to-end creative and digital marketing services including brand strategy, creative campaigns, social media, performance marketing, content production, website development and more. Our approach is tailored to your business goals.',
  },
  {
    question: 'How do you approach a campaign?',
    answer: 'We begin by understanding your goals, audience and opportunity, then build a clear strategy before developing creative work and measuring its impact.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with ambitious brands across automotive, healthcare, technology, consumer, education and many other sectors.',
  },
  {
    question: 'How do we get started?',
    answer: 'Send us a message with a little context about your brand and goals. We will schedule a conversation to understand the opportunity and recommend the best next step.',
  },
  {
    question: 'How much does digital marketing cost?',
    answer: 'Budgets depend on the scope, channels and goals involved. After an initial conversation, we create a focused proposal with clear deliverables and investment.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Timelines vary by project, but we set clear milestones from the start and keep communication consistent throughout the engagement.',
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="rr-faq" aria-labelledby="faq-heading">
      <div className="rr-faq__shell">
        <Reveal className="rr-faq__intro" variant="default">
          <p className="rr-faq__kicker"><span /> Grow your business</p>
          <h2 id="faq-heading" className="rr-faq__heading">Frequently<br />asked<br />questions<b>.</b></h2>
          <p className="rr-faq__description">
            Everything you need to know about<br />
            working with us. Still have a question?<br />
            We&apos;re just a message away.
          </p>
          <i className="rr-faq__divider" />
          <p className="rr-faq__footer">Ideas<br />People<br />Brands<br />Grow</p>
        </Reveal>

        <Reveal className="rr-faq__list" staggerChildren={0.1}>
          {questions.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <Reveal className={`rr-faq__item${isOpen ? ' is-open' : ''}`} variant="item" key={item.question}>
                <button
                  type="button"
                  className="rr-faq__question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <b aria-hidden="true">{isOpen ? '−' : '+'}</b>
                </button>
                <div
                  className="rr-faq__answer"
                  id={`faq-answer-${index}`}
                  aria-hidden={!isOpen}
                  style={{ maxHeight: isOpen ? '180px' : '0px' }}
                >
                  <p>{item.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
