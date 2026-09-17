'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';

const SERVICES = [
  'Brand Strategy',
  'Digital Marketing',
  'Performance Marketing',
  'Social Media Management',
  'Creative & Design',
  'Video Production',
  'Influencer Marketing',
  'Brand Activation',
  'Web Development',
];

export default function ContactHero() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      details: (form.elements.namedItem('details') as HTMLTextAreaElement).value,
    };
    try {
      await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (_) {}
    setSending(false);
    setSent(true);
  }

  return (
    <section ref={sectionRef} className="ch" aria-labelledby="ch-headline">

      {/* Full-bleed background */}
      <div className="ch__bg" aria-hidden="true" />

      {/* Left content */}
      <div className="ch__left">
        <div className="ch__eyebrow">
          <span className="ch__eyebrow-dash" aria-hidden="true" />
          <span className="ch__eyebrow-label">Start a Conversation</span>
        </div>

        <h1 id="ch-headline" className="ch__headline">
          <span className="ch__hl-white">LET'S TALK</span>
          <span className="ch__hl-white">ABOUT YOUR</span>
          <span className="ch__hl-red">NEXT MOVE.</span>
        </h1>

        <p className="ch__description">
          Tell us about your business, project or idea.<br />
          We'll get back to you and explore how we can build<br />
          something meaningful together.
        </p>

        <span className="ch__contact-divider" aria-hidden="true" />

        <div className="ch__contact-row">
          <span className="ch__contact-label">EMAIL</span>
          <a href="mailto:admin@redrhymes.com" className="ch__contact-link">
            admin@redrhymes.com <span className="ch__contact-arrow" aria-hidden="true">↗</span>
          </a>
          <span className="ch__contact-underline" aria-hidden="true" />
        </div>

        <div className="ch__contact-row">
          <span className="ch__contact-label">PHONE</span>
          <a href="tel:+919971094965" className="ch__contact-link">+91 9971 094 965</a>
        </div>

        <div className="ch__bottom-tag">
          <span className="ch__bottom-rule" aria-hidden="true" />
          <p className="ch__bottom-text">
            CREATIVE<br />
            MARKETING<br />
            BRANDING<br />
            FOR A BOLDER TOMORROW
          </p>
        </div>
      </div>

      {/* Right — glass form card */}
      <div className="ch__form-card" role="complementary" aria-label="Contact form">

        <div className="ch__form-header">
          <span className="ch__form-header-rule" aria-hidden="true" />
          <p className="ch__form-header-text">GOOD IDEAS<br />BRIGHTER BRANDS</p>
        </div>

        {sent ? (
          <div className="ch__success">
            <span className="ch__success-icon" aria-hidden="true">✓</span>
            <p>Thank you! We'll be in touch shortly.</p>
          </div>
        ) : (
          <form className="ch__form" onSubmit={handleSubmit} noValidate>

            <div className="ch__form-row-2">
              <div className="ch__field">
                <label htmlFor="cf-name" className="ch__label">Your Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  className="ch__input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="ch__field">
                <label htmlFor="cf-email" className="ch__label">Work Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  className="ch__input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="ch__field">
              <label htmlFor="cf-company" className="ch__label">Company</label>
              <input
                id="cf-company"
                name="company"
                type="text"
                className="ch__input"
                placeholder="Company name"
              />
            </div>

            <div className="ch__field">
              <label htmlFor="cf-service" className="ch__label">What Do You Need?</label>
              <div className="ch__select-wrap">
                <select id="cf-service" name="service" className="ch__select" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="ch__chevron" aria-hidden="true">⌄</span>
              </div>
            </div>

            <div className="ch__field">
              <label htmlFor="cf-details" className="ch__label">Project Details</label>
              <textarea
                id="cf-details"
                name="details"
                className="ch__textarea"
                placeholder="Tell us about your project..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="ch__submit"
              disabled={sending}
              aria-label="Send inquiry"
            >
              {sending ? 'Sending…' : 'Send Inquiry ↗'}
            </button>

          </form>
        )}

        <div className="ch__form-footer">
          <span className="ch__form-footer-line" aria-hidden="true" />
          <p className="ch__form-footer-text">LET'S BUILD WHAT'S<br />NEXT TOGETHER.</p>
        </div>

      </div>

    </section>
  );
}
