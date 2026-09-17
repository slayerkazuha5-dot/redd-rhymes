import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Web Development Services in Noida | Red Rhymes",
    description: "Build a fast, credible website with Red Rhymes web development support for business websites, landing pages, and digital campaigns.",
    alternates: { canonical: '/web-development' },
};

export default function Page() {
  return (
    <>
      
      <script
        key="schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org/\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://redrhymes.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Services\",\"item\":\"https://redrhymes.com/services\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Web Development\",\"item\":\"https://redrhymes.com/web-development\"}]}" }}
      />

      <section className="flat-title-page bg-img-web-develop">
                    <div className="overlay-page"></div>
                    <div className="elip-header">
                        <img src="/assets/images/mark-page/ab-header.png" alt="black and white images" />
                    </div>
                    <div className="elip-header1">
                        <img src="/assets/images/mark-page/ellipse1.png" alt="white page" />
                    </div>
                    <div className="elip-header2">
                        <img src="/assets/images/mark-page/Ellipse2.png" alt="white page" />
                    </div>
                    <div className="elip-header3">
                        <img src="/assets/images/mark-page/mark-page.png" alt="red line" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="breadcrumbs">
                                    <h1>Web Development<span className="style-color">.</span></h1>
                                    <div className="breadcrumb-trail link-style-2">
                                        <a className="home" href="/">Home Page</a><a className="home" href="/services">
                                            &nbsp; Service Page</a><span>Web Development</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            

            <section style={{"paddingTop":"80px","paddingBottom":"0px"}} className="flat-blog-grid style-blog tf-space flat-skill">
                <div className="container">
                    <div className="row">
                        <div style={{"paddingBottom":"0px"}} className="col-lg-12">
                            <div style={{"marginBottom":"35px"}} className="blog-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="500ms">
                                
                                <h2 style={{"fontSize":"28px"}} className="tf-title">Web <span className="text-color-3 style-title">[Designing]</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="skill-heading">

                                <p style={{"textAlign":"justify","lineHeight":"25px"}}>We provide expert net graph offerings
                                    at lower priced charges to assist your commercial enterprise appeal to extra traffic
                                    and maintain them on your site! More than stunning design, we construct web sites
                                    with a whole approach designed to flip your web page site visitors into customers.
                                    <br  /> Indeed, internet site plan performs a integral function in accomplishing
                                    commercial enterprise pursuits and desires. However, if the internet site is now not
                                    up to the trendy parameter, then the opportunity of getting out of the market
                                    opposition is higher. So, the website's sketch have to now not be taken lightly, and
                                    you have to pay equal interest as you pay to others. <br  />Red Rhymes is a foremost
                                    website design company with a top-class design team that creates creative,
                                    influential websites that seize the attention of the audience of the brand. It also
                                    improves your conversion rates and maximizes your income to help develop the
                                    business and achieve the purpose of our customers. Our company created a masterful
                                    design, invested the time to understand our business and audience, and delivered a
                                    well-thought-out plan in very little time. <br  /></p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="media">
                                <img src="/assets/images/image-box/web-img-1.jpg" alt="website Development" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{"padding":"30px 0","marginTop":"50px"}} className="tf-space flat-trusted flat-blog-grid style-blog home3">
                <div className="container">
                    <div className="row">
                        <div style={{"paddingBottom":"0px"}} className="col-lg-12">
                            <div style={{"marginBottom":"35px"}} className="blog-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="500ms">
                                
                                <h2 style={{"fontSize":"28px"}} className="tf-title">Technical <span className="text-color-3 style-title">[Search Engine Optimization]</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="media-box">
                                <div className="media">
                                    <img src="/assets/images/image-box/web-img-2.jpg" alt="technical seo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">

                            <p>our team also takes care of off-Page SEO because it plays an important role to drive
                                traffic to your website. <br  /> A set of practices designed to improve the accessibility
                                and positioning of a website in organic search is called Search Engine Optimization.
                                On-page, Off-page, Technical, Mobile, Content and more are some of the practices that
                                come in on-page, off-page, technical, Mobile, Content and more. <br  /> Search Engine
                                Optimization is making a website and making it look better for it to rank higher on
                                search engines. This would allow your audience to discover your website on search
                                engines when someone searches for a specific phrase. Our in-house experts create the
                                entire strategy and implement it for you to improve your website's ranking on search
                                engines. <br  />With Red Rhymes, your website's technical SEO gets done with in-depth
                                research to find the right words for your business, product or service. <br  />We know that
                                your customers are looking for certain things. Specific terms will affect your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}
