import Link from 'next/link';

export default function HondaCaseStudy() {
  return (
    <section className="case-study-template" aria-label="Honda case study detail">
      <header className="case-study-template__hero">
        <div className="case-study-template__hero-copy">
          <div className="case-study-template__eyebrow-wrap">
            <span className="case-study-template__red-bar" />
            <p className="case-study-template__eyebrow">CASE STUDY</p>
          </div>

          <h1 className="case-study-template__title">
            <span>HONDA</span>
            <span><em>DIGITAL</em> CAMPAIGN</span>
          </h1>

          <p className="case-study-template__intro">
            A DIGITAL DRIVE TOWARDS<br />
            A BRIGHTER TOMORROW.
          </p>

          <div className="case-study-template__meta">
            <div>
              <span>CLIENT</span>
              <b>HONDA</b>
            </div>
            <div>
              <span>SERVICES</span>
              <b>STRATEGY / CREATIVE / DIGITAL</b>
            </div>
            <div>
              <span>YEAR</span>
              <b>2026</b>
            </div>
          </div>
        </div>

        <div
          className="case-study-template__hero-visual"
          style={{ backgroundImage: "url('/assets/images/work/client1.png')" }}
          aria-label="Honda Civic driving under a city overpass"
        >
          <span className="case-study-template__hero-rule" />
        </div>
      </header>

      <div className="case-study-template__summary">
        <div className="case-study-template__index">01</div>

        <div className="case-study-template__entry">
          <span className="case-study-template__label">CHALLENGE</span>
          <h2>THE CHALLENGE</h2>
          <p>Honda wanted to strengthen its digital presence and connect with a new generation of customers who value innovation, sustainability and a more meaningful driving experience.</p>
        </div>

        <div className="case-study-template__entry">
          <span className="case-study-template__label">APPROACH</span>
          <h2>FROM INSIGHT TO IDEA.</h2>
          <p>We combined consumer insights, brand purpose and digital innovation to craft a campaign that showcases Honda as a brand for a brighter, more connected tomorrow.</p>
        </div>

        <div className="case-study-template__stack">
          <div className="case-study-template__stack-item">
            <strong>INSIGHT</strong>
            <small>PEOPLE &amp; OPPORTUNITIES</small>
            <i />
          </div>
          <div className="case-study-template__stack-item">
            <strong>STRATEGY</strong>
            <small>BRAND &amp; AUDIENCE</small>
            <i />
          </div>
          <div className="case-study-template__stack-item">
            <strong>CREATIVE</strong>
            <small>IDEAS &amp; EXPERIENCES</small>
            <i />
          </div>
          <div className="case-study-template__stack-item">
            <strong>EXECUTION</strong>
            <small>MULTI-PLATFORM LAUNCH</small>
            <i />
          </div>
        </div>
      </div>

      <section className="case-study-template__execution">
        <div className="case-study-template__exec-copy">
          <div className="case-study-template__index">03</div>
          <span className="case-study-template__label case-study-template__label--light">EXECUTION</span>
          <h2>THE IDEA<br />IN ACTION.</h2>
          <p>A multi-platform campaign brought Honda&apos;s vision to life through powerful storytelling, dynamic content and immersive digital experiences.</p>
          <span className="case-study-template__underline" />
        </div>

        <div className="case-study-template__exec-visual case-study-template__exec-visual--main">
          <img src="/assets/images/work/client3.png" alt="Honda CR-V by a mountain road" />
        </div>

        <div className="case-study-template__exec-column">
          <div className="case-study-template__mini-tile">
            <img src="/assets/images/work/client4.png" alt="Close-up portrait of a woman in motion" />
            <span>MORE THAN<br />A DRIVE</span>
          </div>
          <div className="case-study-template__mini-tile">
            <img src="/assets/images/work/client5.png" alt="Honda steering wheel close-up" />
            <span>INNOVATION FOR A BRIGHTER TOMORROW</span>
          </div>
        </div>

        <div className="case-study-template__exec-visual case-study-template__exec-visual--side">
          <img src="/assets/images/work/client2.png" alt="City skyline over a highway" />
          <span>DRIVE EXPLORE BELONG</span>
        </div>
      </section>

      <section className="case-study-template__results">
        <div className="case-study-template__index">04</div>

        <div className="case-study-template__results-copy">
          <span className="case-study-template__label">RESULTS</span>
          <h2>MEASURING<br />THE <em>IMPACT.</em></h2>
          <div className="case-study-template__stats">
            <div>
              <strong>+XX%</strong>
              <span>ENGAGEMENT</span>
            </div>
            <div>
              <strong>+XX%</strong>
              <span>REACH</span>
            </div>
            <div>
              <strong>+XX%</strong>
              <span>CONVERSIONS</span>
            </div>
            <div>
              <strong>XXM+</strong>
              <span>IMPRESSIONS</span>
            </div>
          </div>
        </div>

        <Link className="case-study-template__next" href="/work/sharda-care-beyond-treatment">
          <div className="case-study-template__next-copy">
            <span className="case-study-template__label case-study-template__label--light">NEXT PROJECT</span>
            <h3>SHARDA HOSPITAL<br />BRAND CAMPAIGN</h3>
            <b>→</b>
          </div>
          <div className="case-study-template__next-visual">
            <img src="/assets/images/work/client6.png" alt="Doctor and child smiling" />
            <span>For Healthier Tomorrows</span>
          </div>
        </Link>
      </section>
    </section>
  );
}
