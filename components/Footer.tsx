import Link from 'next/link';
import Reveal from '@/components/Reveal';

const linkGroups = [
  {
    title: 'Work',
    links: [
      ['Featured Projects', '/work'],
      ['Case Studies', '/work'],
      ['Client Stories', '/work'],
      ['All Work', '/work'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Brand Strategy', '/brand-strategy'],
      ['Digital Marketing', '/digital-marketing'],
      ['Content & Creative', '/content-marketing'],
      ['Performance', '/paid-media'],
      ['Web & Technology', '/web-development'],
    ],
  },
  {
    title: 'About',
    links: [
      ['Our Story', '/about-us'],
      ['Our Approach', '/about-us'],
      ['Team', '/about-us'],
      ['Careers', '/contact'],
    ],
  },
  {
    title: 'INSIGHTS',
    links: [
      ['Featured Insight', '/blog#featured-insight'],
      ['Explore Topics', '/blog#explore-topics'],
      ['Testimonials', '/blog#testimonials'],
      ['CTA', '/blog#cta'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="rr-site-footer" id="site-footer">
      <div className="rr-site-footer__shell">
        <Reveal className="rr-site-footer__main" staggerChildren={0.1}>
          <Reveal className="rr-site-footer__brand" variant="default">
            <Link href="/" className="rr-site-footer__logo" aria-label="Red Rhymes home">
              <strong>RED</strong><span>RHYMES</span><b>.</b>
            </Link>
            <p className="rr-site-footer__tagline">Creative ideas. Real impact.</p>
            <p className="rr-site-footer__description">
              We&apos;re a creative marketing agency helping brands grow through strategy, creativity and technology.
            </p>
            <div className="rr-site-footer__socials">
              <a href="https://www.instagram.com/redrhymes_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>
              <a href="https://www.linkedin.com/company/red-rhymes-consulting/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://www.youtube.com/@Redd.1" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            </div>
          </Reveal>

          {linkGroups.map((group) => (
            <Reveal className="rr-site-footer__links" variant="item" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="rr-site-footer__contact" variant="default">
            <h2>Contact</h2>
            <a href="https://maps.google.com/?q=Noida,India">⌖ <span>Noida, India</span></a>
            <a href="mailto:admin@redrhymes.com">✉ <span>admin@redrhymes.com</span></a>
            <i />
            <h3>Stay in the loop.</h3>
            <p>Get the latest insights, ideas and updates.</p>
            <form action="#" method="post">
              <input type="email" name="email" placeholder="Your email address" aria-label="Your email address" required />
              <button type="submit" aria-label="Subscribe">→</button>
            </form>
          </Reveal>
        </Reveal>

        <Reveal className="rr-site-footer__bottom" variant="body">
          <p>© 2026 Red Rhymes. All rights reserved.</p>
          <nav aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-service">Terms of Service</Link>
            <span>|</span>
            <Link href="/sitemap.xml">Sitemap</Link>
          </nav>
          <a href="#page">Back to top ↑</a>
        </Reveal>
      </div>
    </footer>
  );
}
