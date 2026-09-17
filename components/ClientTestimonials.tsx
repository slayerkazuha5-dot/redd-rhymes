'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

const testimonials = [
  {
    quote: "Red Rhymes didn't just execute our vision, they elevated it. Strategic, creative and true partners throughout the journey.",
    name: 'Priyank Sharma',
    role: 'Marketing Head',
    company: 'AutoNext India',
  },
  {
    quote: 'They brought clarity to our story and turned every idea into work that people remembered.',
    name: 'Ananya Mehta',
    role: 'Brand Director',
    company: 'Northstar Living',
  },
  {
    quote: 'A rare partner that balances ambitious creative thinking with measurable business results.',
    name: 'Rohan Kapoor',
    role: 'Growth Lead',
    company: 'Vertex Mobility',
  },
  {
    quote: 'Red Rhymes helped us move faster, think bigger and build a brand our customers believe in.',
    name: 'Meera Shah',
    role: 'Founder',
    company: 'Common Ground',
  },
];

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const changeTestimonial = (direction: number) => {
    setActiveIndex((activeIndex + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="rr-testimonials" aria-labelledby="testimonials-heading">
      <div className="rr-testimonials__shell">
        <Reveal className="rr-testimonials__intro" variant="default">
          <p className="rr-testimonials__kicker"><span /> Testimonials</p>
          <h2 id="testimonials-heading" className="rr-testimonials__heading">What our<br />clients<br />say<b>.</b></h2>
          <p className="rr-testimonials__tagline">Real people.<br />Real partnerships.<br />Real results.</p>
          <i className="rr-testimonials__divider" />
        </Reveal>

        <Reveal className="rr-testimonials__visual" variant="image">
          <div className="rr-testimonials__photo" role="img" aria-label="Red Rhymes client portrait" />
          <p className="rr-testimonials__visual-top">Great brands are built<br />together.<span /></p>
          <p className="rr-testimonials__visual-bottom">More than<br />marketing.<span /></p>
        </Reveal>

        <Reveal className="rr-testimonials__quote" variant="default">
          <div className="rr-testimonials__quote-mark" aria-hidden="true">“</div>
          <blockquote>“{testimonial.quote}”</blockquote>
          <i className="rr-testimonials__quote-divider" />
          <div className="rr-testimonials__person">
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
            <span>{testimonial.company}</span>
          </div>
          <div className="rr-testimonials__controls">
            <button type="button" onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial">← <span>Previous</span></button>
            <span><b>{String(activeIndex + 1).padStart(2, '0')}</b> / {String(testimonials.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => changeTestimonial(1)} aria-label="Next testimonial"><span>Next</span> →</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
