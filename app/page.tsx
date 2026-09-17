import type { Metadata } from 'next';
import FeaturedServices from '@/components/FeaturedServices';
import FromIdeaToImpact from '@/components/FromIdeaToImpact';
import ClientTestimonials from '@/components/ClientTestimonials';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import BuildCta from '@/components/BuildCta';
import Reveal from '@/components/Reveal';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: "Social Media Consultancy in Noida",
  description: "Red Rhymes is a social media consultancy in Noida helping brands grow through strategy, content, influencer marketing, paid social, and measurable campaigns.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Red Rhymes | Social Media Consultancy in Noida',
    description: 'Social media strategy, content, influencer marketing, and paid social campaigns for ambitious brands.',
    url: 'https://redrhymes.com/',
    type: 'website',
  },
};

const clientLogos: { name: string; src?: string }[] = [
  { name: 'CTN', src: '/assets/images/logo/ctn.png' },
  { name: 'HMD', src: '/assets/images/logo/hmd.png' },
  { name: 'Honda', src: '/assets/images/logo/honda.png' },
  { name: 'Hunarmand India', src: '/assets/images/logo/hunarmand.png' },
  { name: 'Hyundai', src: '/assets/images/logo/hyundai.png' },
  { name: 'HCL' },
  { name: 'ITC Labs', src: '/assets/images/logo/itc.png' },
  { name: 'Kia', src: '/assets/images/logo/kia.png' },
  { name: 'Mahindra', src: '/assets/images/logo/mahindra.png' },
  { name: 'MG', src: '/assets/images/logo/mg.png' },
  { name: 'The Safepharmacy', src: '/assets/images/logo/safepharmacy.png' },
  { name: 'Sahaj', src: '/assets/images/logo/sahaj.png' },
  { name: 'DS Group', src: '/assets/images/logo/ds.png' },
  { name: 'Sharda Hospital', src: '/assets/images/logo/sharda.png' },
];

export default function Page() {
  return (
    <>
      
      <script
        key="schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Red Rhymes\",\"alternateName\":\"Redd\",\"url\":\"https://redrhymes.com/\",\"logo\":\"https://redrhymes.com/assets/images/logo/redd_Black.png\",\"sameAs\":[\"https://www.facebook.com/redrhymes1\",\"https://twitter.com/redrhymes_\",\"https://www.instagram.com/redrhymes_/\",\"https://www.youtube.com/channel/UCKj_ym095MmVw75HCxIOF3Q\",\"https://www.linkedin.com/company/red-rhymes-consulting/\",\"https://redrhymes.com/\"]}" }}
      />

      <script
        key="schema-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org/\",\"@type\":\"WebSite\",\"name\":\"Red Rhymes\",\"url\":\"https://redrhymes.com/\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"https://redrhymes.com/{search_term_string}\",\"query-input\":\"required name=search_term_string\"}}" }}
      />

      <script
        key="schema-2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org/\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://redrhymes.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"About Us\",\"item\":\"https://redrhymes.com/about-us\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Services\",\"item\":\"https://redrhymes.com/services\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"Blog\",\"item\":\"https://redrhymes.com/blog\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"Contact\",\"item\":\"https://redrhymes.com/contact\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"Content Marketing\",\"item\":\"https://redrhymes.com/content-marketing\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"Social Media\",\"item\":\"https://redrhymes.com/social-media\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"Search Engine Optimization\",\"item\":\"https://redrhymes.com/seo\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"Paid Media\",\"item\":\"https://redrhymes.com/paid-media\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"Graphic Design\",\"item\":\"https://redrhymes.com/graphic-design\"},{\"@type\":\"ListItem\",\"position\":11,\"name\":\"Video Production\",\"item\":\"https://redrhymes.com/video-production\"},{\"@type\":\"ListItem\",\"position\":12,\"name\":\"Web Development\",\"item\":\"https://redrhymes.com/web-development\"},{\"@type\":\"ListItem\",\"position\":13,\"name\":\"Influencer Marketing\",\"item\":\"https://redrhymes.com/influencer-marketing\"},{\"@type\":\"ListItem\",\"position\":14,\"name\":\"Blog 1\",\"item\":\"https://redrhymes.com/youtube-handles-rolling-out-soon-are-you-eligible\"},{\"@type\":\"ListItem\",\"position\":15,\"name\":\"Blog 2\",\"item\":\"https://redrhymes.com/beware-of-the-app-which-may-steal-your-facebook-and-instagram-log-in-info\"}]}" }}
      />

      <script
        key="schema-3"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Red Rhymes - Best Digital Marketing Agency in Noida & Delhi NCR\",\"image\":\"https://redrhymes.com/assets/images/logo/redd_Black.png\",\"@id\":\"https://business.google.com/n/10509774558991166214/searchprofile?hl=en-GB\",\"url\":\"https://business.google.com/n/10509774558991166214/searchprofile?hl=en-GB\",\"telephone\":\"099710 94965\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"LL3, E-2, Sector - 63\",\"addressLocality\":\"Noida\",\"postalCode\":\"201301\",\"addressCountry\":\"IN\"},\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":28.6305989,\"longitude\":77.38252469999999},\"openingHoursSpecification\":{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],\"opens\":\"09:30\",\"closes\":\"18:00\"},\"sameAs\":[\"https://www.facebook.com/redrhymes1\",\"https://twitter.com/redrhymes_\",\"https://www.instagram.com/redrhymes_/\",\"https://www.youtube.com/@Redd.1\",\"https://www.linkedin.com/company/red-rhymes-consulting/\",\"https://redrhymes.com/\"]}" }}
      />

      <section className="rr-home-hero" aria-labelledby="home-hero-heading">
        <div className="rr-home-hero__backdrop" aria-hidden="true" />
        <div className="rr-home-hero__wash" aria-hidden="true" />
        <Reveal className="rr-home-hero__content" variant="default">
          <p className="rr-home-hero__eyebrow">Strategy <span>×</span> Creative <span>×</span> Performance</p>
          <Reveal variant="headline"><h1 id="home-hero-heading"><span className="rr-home-hero__build-word">We build</span><br /><em className="rr-home-hero__brand-word">brands</em><br />that move<span>.</span></h1></Reveal>
          <Reveal variant="body" delay={0.1}><p className="rr-home-hero__lead">Strategy, creativity and performance<br className="rr-home-hero__desktop-break" /> for brands ready to grow.</p></Reveal>
          <Reveal variant="button" delay={0.15}><div className="rr-home-hero__actions">
            <a href="/contact" className="rr-home-button rr-home-button--primary">Let&apos;s Talk <span>↗</span></a>
            <a href="/work" className="rr-home-button rr-home-button--outline">View Our Work <span>↗</span></a>
          </div></Reveal>
        </Reveal>
      </section>

      <section className="rr-clients-section" aria-labelledby="clients-heading">
        <div className="rr-clients-shell">
          <Reveal className="rr-clients-intro" variant="default">
            <div>
              <p className="rr-section-kicker"><span /> Selected Clients</p>
              <h2 id="clients-heading">Trusted by<br /><em>ambitious</em> brands<span>.</span></h2>
              <p className="rr-clients-lead">From automotive and healthcare to technology and consumer brands.</p>
            </div>
            <p className="rr-clients-note">Different<br />industries<br />one common<br />direction<br /><b>growth.</b></p>
          </Reveal>
          <Reveal className="rr-client-logo-grid" staggerChildren={0.1}>
            {clientLogos.map((client) => (
              <Reveal className="rr-client-logo" variant="item" key={client.name}>
                {client.src ? <img src={client.src} alt={client.name} /> : <span>{client.name}</span>}
              </Reveal>
            ))}
          </Reveal>
          <div className="rr-client-marquee" aria-label="Selected clients">
            {[clientLogos.slice(0, 7), clientLogos.slice(7)].map((row, rowIndex) => (
              <div className={`rr-client-marquee__row rr-client-marquee__row--${rowIndex + 1}`} key={rowIndex}>
                <div className="rr-client-marquee__track">
                  {[row, row].map((logos, groupIndex) => (
                    <div className="rr-client-marquee__group" aria-hidden={groupIndex === 1} key={groupIndex}>
                      {logos.map((client) => (
                        <div className="rr-client-logo" key={`${rowIndex}-${groupIndex}-${client.name}`}>
                          {client.src ? <img src={client.src} alt={groupIndex === 0 ? client.name : ''} /> : <span>{client.name}</span>}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <FeaturedServices />

      <FromIdeaToImpact />

      <FrequentlyAskedQuestions />

      <ClientTestimonials />

      <BuildCta />

      
      <section style={{"paddingBottom":"20px"}} className="tf-space flat-service rr-legacy-home-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="tf-sub-title">Insight, Intelligence &amp; Design</div>
                <h2 className="tf-title rr-what-we-do-title">WHAT WE DO</h2>
              </div>
            </div>
            <div id="call_id" className="col-lg-12 hand-animate">
              <div className="service-slider">
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="media">
                    <a href="/content-marketing">
                      <img src="/assets/images/image-box/content-marketing.png" alt="paper and pen" width="70px" height="70px" />
                    </a>
                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3>
                      <a href="/content-marketing">Content Marketing</a>
                    </h3>
                    <p>
                      Content marketing is a marketing approach that involves
                      creating and sharing valuable, relevant, and consistent
                      content to attract and retain a clearly defined audience
                      with the goal of driving profitable customer action.
                    </p>
                    <div className="read-more">
                      <a href="/content-marketing" className="readmore"></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1700ms">
                  <div className="media">
                    <a href="/social-media">
                      <img src="/assets/images/image-box/social-media.png" alt="social icons png image" width="70px" height="70px" />
                    </a>
                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3><a href="/social-media">Social Media</a></h3>
                    <p>
                      Social media refers to a group of internet-based
                      applications and technologies that allow people to
                      create, share or exchange information, ideas, and
                      content in virtual communities and networks. Some of the
                      most popular social media platforms include Facebook,
                      Instagram, YouTube etc
                    </p>
                    <div className="read-more">
                      <a href="/social-media" className="readmore"></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                  <div className="media">
                    <a href="/brand-activation">
                      <img src="/assets/images/services/brand/brand.png" alt="Brand Activation" width="70px" height="70px" />
                    </a>
                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3><a href="/brand-activation">Brand Activation</a></h3>
                    <p>
                       Brand Activation is the process of creating meaningful and memorable experiences that connect consumers with a brand. It goes beyond traditional advertising by engaging audiences through interactive campaigns, live events, retail promotions, mall activations, roadshows, product launches, and experiential marketing. 
                    </p>
                    <div className="read-more">
                      <a href="/brand-activation" className="readmore"></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2100ms">
                  <div className="media">
                    <a href="/paid-media">
                      <img src="/assets/images/image-box/paid-media.png" alt="paid media speaker video" width="70px" height="70px" />
                    </a>
                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3><a href="/paid-media">Paid Media</a></h3>
                    <p>
                      Paid media refers to advertising that a business or
                      organization pays for to promote its products, services,
                      or brand. Paid media can take many forms, including
                      search engine advertising (such as Google Ads), social
                      media advertising (such as Facebook Ads), display
                      advertising (such as banner ads), sponsored content
                      (such as sponsored posts on social media) and more.
                    </p>
                    <div className="read-more">
                      <a href="/paid-media" className="readmore"></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2300ms">
                  <div className="media">
                    <a href="/graphic-design">
                      <img src="/assets/images/image-box/graphic design.png" alt="graphic design tv paint" width="70px" height="70px" />
                    </a>
                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3><a href="/graphic-design">Graphics Design</a></h3>
                    <p>
                      Graphic design is the art and practice of creating
                      visual content to communicate ideas, messages, and
                      information. It is a creative process that involves
                      combining typography, images, illustrations, and other
                      visual elements to create designs that are aesthetically
                      pleasing and effectively convey a message.
                    </p>
                    <div className="read-more">
                      <a href="/graphic-design" className="readmore"></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="media">
                    <a href="/video-production">

                      <img src="/assets/images/image-box/video production.png" alt="video production" width="70px" height="70px" />
                    </a>
                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3>
                      <a href="/video-production">Video Production</a>
                    </h3>
                    <p>
                      Video production refers to the process of creating video
                      content for a variety of purposes, such as marketing,
                      entertainment, education, and training. Video production
                      can involve many different stages, including
                      pre-production, production, and post-production.
                    </p>
                    <div className="read-more">
                      <a href="/video-production" className="readmore"></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2300ms">
                  <div className="media">
                    <a href="/web-development">

                      <img src="/assets/images/image-box/web development.png" alt="web development" width="70px" height="70px" />
                    </a>
                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3>
                      <a href="/web-development">Web Development</a>
                    </h3>
                    <p>
                      Web development refers to the process of creating and
                      maintaining websites, web applications, and other online
                      platforms. It involves a variety of skills and
                      techniques, including programming languages, web design,
                      user experience design, and database management.
                    </p>
                    <div className="read-more">
                      <a href="/web-development" className="readmore"></a>
                    </div>
                  </div>
                </div>
                <div className="mobile-screen service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2300ms">
                  <div className="media">
                    <a href="/influencer-marketing">
                      <img src="/assets/images/image-box/influencer-marketing.png" alt="influencer marketing" width="70px" height="70px" />
                    </a>

                  </div>
                  <div style={{"paddingBottom":"22px"}} className="content">
                    <h3>
                      <a href="/influencer-marketing">Influencer Marketing</a>
                    </h3>
                    <p>
                      Influencer marketing is a type of marketing that
                      involves partnering with social media influencers, who
                      have a large following on platforms such as Instagram,
                      YouTube to promote a brand, product, or service.
                      Influencers are individuals who have built a reputation
                      and following by sharing their opinions, expertise, and
                      experiences on social media.
                    </p>
                    <div className="read-more">
                      <a href="/influencer-marketing" className="readmore"></a>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div id="call_by" className="col-lg-12 hand-animate">
              <div className="swiper-container service-slider carousel-4">
                <div className="swiper-wrapper">
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="media">
                      <a href="/content-marketing">
                        <img src="/assets/images/image-box/content-marketing.png" alt="paper and pen" width="70px" height="70px" />
                      </a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                      <h3>
                        <a href="/content-marketing">Content Marketing</a>
                      </h3>
                      <p style={{"marginBottom":"130px"}}>
                        Content marketing is a marketing approach that
                        involves creating and sharing valuable, relevant, and
                        consistent content to attract and retain a clearly
                        defined audience with the goal of driving profitable
                        customer action.
                      </p>
                      <div className="read-more">
                        <a href="/content-marketing" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1700ms">
                    <div className="media">
                      <a href="/social-media"><img src="/assets/images/image-box/social-media.png" alt="social icons png image" width="70px" height="70px" /></a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                      <h3><a href="/social-media">Social Media</a></h3>
                      <p style={{"marginBottom":"70px"}}>
                        Social media refers to a group of internet-based
                        applications and technologies that allow people to
                        create, share or exchange information, ideas, and
                        content in virtual communities and networks. Some of
                        the most popular social media platforms include
                        Facebook, Instagram, YouTube etc
                      </p>
                      <div className="read-more">
                        <a href="/social-media" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                    <div className="media">
                      <a href="/brand-activation"><img src="/assets/images/services/brand/brand.png" alt="Brand Activation" width="70px" height="70px" /></a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                       <h3><a href="/brand-activation">Brand Activation</a></h3>
                    <p>
                       Brand Activation is the process of creating meaningful and memorable experiences that connect consumers with a brand. It goes beyond traditional advertising by engaging audiences through interactive campaigns, live events, retail promotions, mall activations, roadshows, product launches, and experiential marketing. 
                    </p>
                      <div className="read-more">
                        <a href="/brand-activation" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2100ms">
                    <div className="media">
                      <a href="/paid-media"><img src="/assets/images/image-box/paid-media.png" alt="paid media speaker video" width="70px" height="70px" /></a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                      <h3><a href="/paid-media">Paid Media</a></h3>
                      <p style={{"marginBottom":"12px"}}>
                        Paid media refers to advertising that a business or
                        organization pays for to promote its products,
                        services, or brand. Paid media can take many forms,
                        including search engine advertising (such as Google
                        Ads), social media advertising (such as Facebook Ads),
                        display advertising (such as banner ads), sponsored
                        content (such as sponsored posts on social media), and
                        more.
                      </p>
                      <div className="read-more">
                        <a href="/paid-media" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2300ms">
                    <div className="media">
                      <a href="/graphic-design"> <img src="/assets/images/image-box/graphic design.png" alt="graphic design tv paint" width="70px" height="70px" /></a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                      <h3>
                        <a href="/graphic-design">Graphics Design</a>
                      </h3>
                      <p style={{"marginBottom":"72px"}}>
                        Graphic design is the art and practice of creating
                        visual content to communicate ideas, messages, and
                        information. It is a creative process that involves
                        combining typography, images, illustrations, and other
                        visual elements to create designs that are
                        aesthetically pleasing and effectively convey a
                        message.
                      </p>
                      <div className="read-more">
                        <a href="/graphic-design" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="media">
                      <a href="/video-production"> <img src="/assets/images/image-box/video production.png" alt="video production" width="70px" height="70px" /></a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                      <h3>
                        <a href="/video-production">Video Production</a>
                      </h3>
                      <p style={{"marginBottom":"72px"}}>
                        Video production refers to the process of creating
                        video content for a variety of purposes, such as
                        marketing, entertainment, education, and training.
                        Video production can involve many different stages,
                        including pre-production, production, and
                        post-production.
                      </p>
                      <div className="read-more">
                        <a href="/video-production" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2300ms">
                    <div className="media">
                      <a href="/web-development"><img src="/assets/images/image-box/web development.png" alt="web development" width="70px" height="70px" /></a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                      <h3>
                        <a href="/web-development">Web Development</a>
                      </h3>
                      <p style={{"marginBottom":"102px"}}>
                        Web development refers to the process of creating and
                        maintaining websites, web applications, and other
                        online platforms. It involves a variety of skills and
                        techniques, including programming languages, web
                        design, user experience design, and database
                        management.
                      </p>
                      <div className="read-more">
                        <a href="/web-development" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide service-post style-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2300ms">
                    <div className="media">
                      <a href="/influencer-marketing"><img src="/assets/images/image-box/influencer-marketing.png" alt="influencer marketing" width="70px" height="70px" /></a>
                    </div>
                    <div style={{"paddingBottom":"22px"}} className="content">
                      <h3>
                        <a href="/influencer-marketing">Influencer Marketing</a>
                      </h3>
                      <p style={{"marginBottom":"12px"}}>
                        Influencer marketing is a type of marketing that
                        involves partnering with social media influencers, who
                        have a large following on platforms such as Instagram,
                        YouTube to promote a brand, product, or service.
                        Influencers are individuals who have built a
                        reputation and following by sharing their opinions,
                        expertise, and experiences on social media.
                      </p>
                      <div className="read-more">
                        <a href="/influencer-marketing" className="readmore"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="tf-space flat-trusted">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <div className="media img-1">
                <img src="/assets/images/image-box/Index Mkt img 1.jpg" alt="ai girl in image" />
              </div>
              <div className="media img-2">
                
                <div className="trusted-years wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <h5>
                    5+Years <br  />
                    Experience
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="trusted-heading">
                <div className="tf-sub-title">Please Get To Know Us</div>
                <h2 style={{"fontSize":"28px"}} className="tf-title">
                  A SOCIAL-FIRST CONSULTANCY FOR AMBITIOUS BRANDS
                </h2>
              </div>
              <h3 className="text-color-3">
                We combine sharp strategy, strong creative, and clear reporting
                so your social presence supports real business goals.
              </h3>
              <p>
                From content planning and community building to influencer and
                paid social campaigns, we build practical systems around your
                audience, your voice, and the outcomes you need.
              </p>
              <div className="content-progress-box">
                <div className="progress-bar" data-percentage="80%">
                  <h4 className="progress-title-holder">
                    
                    
                    
                    
                    
                    
                  </h4>
                  
                  
                  
                </div>
              </div>
              
              
              
              
              
              
              
            </div>
          </div>
        </div>
      </section>

      
      

      

      
      <section className="tf-space flat-skill">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="skill-heading">
                <div className="tf-sub-title">Social Media Consultancy</div>
                <h2 className="tf-title">
                Strategy, Content, and Growth That Work Together.
                </h2>
                <p>
                  We help brands make better decisions about what to say, where
                  to show up, and how to turn attention into meaningful action.
                  Our work brings together audience insight, platform-native
                  creative, community management, and performance reporting.
                </p>
                <div className="progress-box1">
                  <div className="progress-skill">
                    <div className="couter">
                      <div className="chart" data-percent="90">
                        <span className="percent">0</span>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>Audience and Competitor Insight</h3>
                  </div>
                </div>
                <div className="progress-box2">
                  <div className="progress-skill">
                    <div className="couter">
                      <div className="chart" data-percent="80">
                        <span className="percent">0</span>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>Content and Campaign Reporting</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="media">
                <img src="/assets/images/image-box/Social Media.jpg" alt="Digital Marketing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{"paddingTop":"10px","paddingBottom":"0px"}} className="flat-team flat-blog-grid rr-legacy-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="500ms">
                <h2 className="tf-title">Our Clients</h2>
              </div>
            </div>
            
            
            
            
            
            
            
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1700ms">
                <div className="media">
                  <img src="/assets/images/image-box/ctn.png" alt="CTN company" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/hmd logo.png" alt="hmd" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/honda logo.png" alt="honda india car" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/Hunarmand India.png" alt="Hunarmand india job search" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/hyundai logo.png" alt="hyundia india car" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/icon.png" alt="icon services" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/itc.png" alt="itc" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/kia logo.png" alt="kia car" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/mahindra logo.png" alt="mahindra cars" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/mg logo.png " alt="mg cars" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/the safepharmacy.png" alt="safepharmacy medical store" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/sahaj.png" alt="Sahaj" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2 mt-3">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/ds-group.png" alt="DS Group" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-2">
              <div className="team-box grid-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1900ms">
                <div className="media">
                  <img src="/assets/images/image-box/Sharda.png" alt="Sharda Hospital" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-space flat-and">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <div className="and-heading">
                <div className="tf-sub-title">Grow Your Business</div>
                <h2 className="tf-title">frequently Asked questions.</h2>
                
                
                <div className="media">
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              
              
              <div className="flat-accordion fl-faq-content">
                <div className="flat-toggle">
                  <h5 className="toggle-title active">
                    What does a social media consultancy do?<span className="btn-toggle"></span>
                  </h5>
                  <div className="toggle-content section-desc">
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <p>A social media consultancy connects audience research, platform strategy, content planning,
                      community management, campaigns, and reporting so your social presence supports clear business
                      goals.</p>
                  </div>
                </div>
                <div className="flat-toggle">
                  <h5 className="toggle-title">
                    Which social platforms should my business use?
                    <span className="btn-toggle"></span>
                  </h5>
                  <div className="toggle-content section-desc">
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <p>That depends on your audience, offer, goals, and available resources. We help you prioritize the
                      platforms where your customers already spend time instead of spreading your effort everywhere.</p>
                  </div>
                </div>
                <div className="flat-toggle">
                  <h5 className="toggle-title">
                    How long does it take to see social media results?<span className="btn-toggle"></span>
                  </h5>
                  <div className="toggle-content section-desc">
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <p>Results depend on your starting point, category, consistency, and goals. We track useful leading
                      signals such as reach, engagement, enquiries, and qualified traffic while building toward longer-term
                      business outcomes.</p>
                  </div>
                </div>
                <div className="flat-toggle">
                  <h5 className="toggle-title">
                    Do you create the content as well as the strategy?<span className="btn-toggle"></span>
                  </h5>
                  <div className="toggle-content section-desc">
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <p>Yes. Depending on your engagement, we can support content pillars, calendars, copy, creative
                      direction, short-form video, publishing, community management, and campaign reporting.</p>
                  </div>
                </div>
                <div className="flat-toggle">
                  <h5 className="toggle-title">
                    How do you measure social media performance?
                    <span className="btn-toggle"></span>
                  </h5>
                  <div className="toggle-content section-desc">
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <p>We agree on the right measures at the beginning, then report on progress against them. Depending
                      on your goals, this can include engagement quality, audience growth, website traffic, enquiries,
                      leads, conversions, and campaign efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="flat-blog-grid style-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="500ms">
                <div className="tf-sub-title">News &amp; Blogs</div>
                <h2 className="tf-title">LATEST News &amp; ARTICLES</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="grid-post">
                <div className="media">
                  <img src="/assets/images/image-box/blog-1 (1).jpg" alt=" man writing in a notebook" />
                  <div className="tags">01 - Sep - 2022</div>
                </div>
                <div className="content">
                  <div className="meta link-style-3 font">
                    <a className="entry-author" href="/youtube-handles-rolling-out-soon-are-you-eligible">
                      Admin</a>
                    <a className="entry-comment" href="/youtube-handles-rolling-out-soon-are-you-eligible#comments">0
                      Comments</a>
                  </div>
                  <h3 className="title-item">
                    <a href="/youtube-handles-rolling-out-soon-are-you-eligible">You Tube handles rolling out soon,
                      Are you eligible
                      ?</a>
                  </h3>
                  <div className="read-more link-style-5">
                    <a href="/youtube-handles-rolling-out-soon-are-you-eligible" className="readmore">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="grid-post style-blog">
                <div className="media">
                  <img src="/assets/images/image-box/blog-2 (1).jpg" alt="men working on laptop" />
                  <div className="tags">01 - Sep - 2022</div>
                </div>
                <div className="content">
                  <div className="meta link-style-3 font">
                    <a className="entry-author" href="/beware-of-the-app-which-may-steal-your-facebook-and-instagram-log-in-info">
                      Admin</a>
                    <a className="entry-comment" href="/beware-of-the-app-which-may-steal-your-facebook-and-instagram-log-in-info#comments">0
                      Comments</a>
                  </div>
                  <h3 className="title-item">
                    <a href="/beware-of-the-app-which-may-steal-your-facebook-and-instagram-log-in-info">Beware of
                      the App which may steal your Facebook and
                      Instagram Log-in Info</a>
                  </h3>
                  <div className="read-more link-style-5">
                    <a href="/beware-of-the-app-which-may-steal-your-facebook-and-instagram-log-in-info" className="readmore">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
}
