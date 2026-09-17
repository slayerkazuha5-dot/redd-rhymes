import Reveal from '@/components/Reveal';

export default function AboutSection() {
  return (
    <section className="rr-about-section" aria-labelledby="about-home-heading">
      <div className="rr-about-shell">
        <Reveal className="rr-about-media" variant="image">
          <img src="/assets/images/background-section/about.png" alt="About Red Rhymes" />
          <div className="rr-about-media__caption">Creative<br />minds<br />real<br />impact</div>
          <div className="rr-about-badge"><strong>5+</strong><span>Years<br />Experience</span></div>
        </Reveal>
        <Reveal className="rr-about-content" variant="default">
          <p className="rr-section-kicker"><span /> About Red Rhymes</p>
          <h2 id="about-home-heading">Built for<br />brands with<br /><em>ambition</em><b>.</b></h2>
          <p className="rr-about-lead">We combine strategy, creativity and technology to help brands communicate better, connect deeper and create measurable impact.</p>
          <a className="rr-about-link" href="/about-us">More About Red Rhymes <b>↗</b></a>
          <div className="rr-about-stats">
            <div><strong>150+</strong><span>Brands</span></div>
            <div><strong>700+</strong><span>Campaigns</span></div>
            <div><strong>5+</strong><span>Years</span></div>
            <div><strong>20+</strong><span>Industries</span></div>
          </div>
          <p className="rr-about-signoff"><span /> Ideas today.<br />Impact tomorrow.</p>
        </Reveal>
      </div>
    </section>
  );
}
