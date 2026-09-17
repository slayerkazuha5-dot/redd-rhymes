import Reveal from '@/components/Reveal';

export default function BuildCta() {
  return (
    <section className="rr-build-cta" aria-labelledby="build-cta-heading">
      <img className="rr-build-cta__background" src="/assets/images/background-section/cta.png" alt="" />
      <Reveal className="rr-build-cta__shell" variant="default">
        <p className="rr-build-cta__kicker"><span /> Let&apos;s build something that moves.</p>
        <Reveal variant="headline"><h2 id="build-cta-heading">Have a brand worth<br />building?</h2></Reveal>
        <Reveal variant="body" delay={0.1}><p className="rr-build-cta__description">Let&apos;s turn your next idea into<br />something people remember.</p></Reveal>
        <Reveal className="rr-build-cta__actions" variant="button" delay={0.15}>
          <a className="rr-build-cta__primary" href="/contact">Start a conversation <span>↗</span></a>
          <a className="rr-build-cta__secondary" href="tel:+919971094965">Call us</a>
        </Reveal>
      </Reveal>
    </section>
  );
}
