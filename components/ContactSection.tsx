'use client';

import { FormEvent, useState } from 'react';
import Script from 'next/script';
import { ArrowRight, CheckCircle, Mail, User } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const SERVICES = [
  'Brand strategy',
  'Content and social media',
  'Influencer marketing',
  'Paid media',
  'Creative and design',
  'Web development',
];

type FormValues = {
  name: string;
  email: string;
  challenge: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  challenge: '',
};

function getApiUrl() {
  return (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
}

export default function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const rawCalendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    'https://calendly.com/slayerkazuha5/30min';

  const calendlyUrl = `${rawCalendlyUrl.split('?')[0]}?hide_event_type_details=1&hide_landing_page_details=1&hide_gdpr_banner=1`;

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError('');
  }

  function validate() {
    const nextErrors: Partial<FormValues> = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.challenge) nextErrors.challenge = 'Please choose a service.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${getApiUrl()}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || 'We could not send your enquiry.');
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <section className="rr-contact" aria-labelledby="rr-contact-title">
        <div className="rr-contact__intro">
          <p className="rr-contact__eyebrow">Start a conversation</p>
          <h1 id="rr-contact-title">
            Make your next move
            <span>matter.</span>
          </h1>
          <p className="rr-contact__description">
            Tell us what you are building. We will bring the right strategy,
            creative thinking, and momentum to the table.
          </p>
        </div>

        <div className="rr-contact__panel">
          {!isSubmitted ? (
            <form className="rr-contact__form" onSubmit={handleSubmit} noValidate>
              <div className="rr-contact__field">
                <label htmlFor="rr-contact-name">
                  <User size={16} aria-hidden="true" />
                  Full name
                </label>
                <input
                  id="rr-contact-name"
                  type="text"
                  value={values.name}
                  onChange={(event) => updateValue('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'rr-contact-name-error' : undefined}
                  autoComplete="name"
                  placeholder="Your name"
                />
                {errors.name && <p id="rr-contact-name-error">{errors.name}</p>}
              </div>

              <div className="rr-contact__field">
                <label htmlFor="rr-contact-email">
                  <Mail size={16} aria-hidden="true" />
                  Email address
                </label>
                <input
                  id="rr-contact-email"
                  type="email"
                  value={values.email}
                  onChange={(event) => updateValue('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'rr-contact-email-error' : undefined}
                  autoComplete="email"
                  placeholder="you@company.com"
                />
                {errors.email && <p id="rr-contact-email-error">{errors.email}</p>}
              </div>

              <div className="rr-contact__field">
                <label htmlFor="rr-contact-challenge">What can we help with?</label>
                <select
                  id="rr-contact-challenge"
                  value={values.challenge}
                  onChange={(event) => updateValue('challenge', event.target.value)}
                  aria-invalid={Boolean(errors.challenge)}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.challenge && <p>{errors.challenge}</p>}
              </div>

              {submitError && (
                <p className="rr-contact__submit-error" role="alert">
                  {submitError}
                </p>
              )}

              <button className="rr-contact__button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Continue to scheduling'}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          ) : (
            <div className="rr-contact__calendar">
              <div className="rr-contact__calendar-heading" style={{ marginBottom: '14px' }}>
                <CheckCircle size={22} style={{ color: '#ff2633', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <div>
                  <p className="rr-contact__eyebrow" style={{ color: '#ff2633', fontSize: '11px', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', margin: '0 0 6px' }}>Almost done</p>
                  <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#ffffff', letterSpacing: '-.03em', lineHeight: 1.15, margin: 0 }}>Pick a date and time for your strategy call.</h2>
                </div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)' }}>
                <InlineWidget
                  url={calendlyUrl}
                  styles={{ minWidth: '280px', height: '520px', width: '100%' }}
                  pageSettings={{
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    hideGdprBanner: true,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
