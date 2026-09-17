import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Influencer Marketing Company in Noida & Delhi NCR",
    description: "Plan and measure influencer campaigns with Red Rhymes, from creator selection and campaign strategy to content approvals and reporting.",
    alternates: {
        canonical: '/influencer-marketing',
    },
};

export default function Page() {
  return (
    <>
      
      <script
        key="schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org/\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://redrhymes.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Services\",\"item\":\"https://redrhymes.com/services\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Influencer Marketing\",\"item\":\"https://redrhymes.com/influencer-marketing\"}]}" }}
      />

      <section className="flat-title-page bg-img-influ">
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
                                    <h1>
                                        Influencer Marketing<span className="style-color">.</span>
                                    </h1>
                                    <div className="breadcrumb-trail link-style-2">
                                        <a className="home" href="/">Home Page</a><a className="home" href="/services">
                                            &nbsp; Service Page</a><span>Influencer Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            

            <section style={{"paddingTop":"30px","paddingBottom":"30px"}} className="flat-blog-grid style-blog tf-space flat-skill">
                <div className="container">
                    <div className="row">
                        <div style={{"paddingBottom":"0px"}} className="col-lg-12">
                            <div style={{"marginBottom":"25px"}} className="blog-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="500ms">
                                <h2 style={{"fontSize":"28px"}} className="tf-title">
                                    Influencer
                                    <span className="text-color-3 style-title">[Marketing]</span>
                                </h2>
                            </div>
                          
                            <div className="pop-up-form">
                                <p>
                                    <button className="button btn-style4 btn-submit-comment" data-modal="modalOne">
                                        I'm Influencer
                                    </button>
                                    <button className="button btn-style4 btn-submit-comment" data-modal="modalTwo">
                                        I'm Company
                                    </button>
                                </p>
                                <div id="modalOne" className="modal">
                                    <div className="modal-content">
                                        <div id="contact-form" className="contact-form">
                                            <a className="close">×</a>
                                            <form method="post" action="/api/influencer">
                                                <h2 style={{"fontSize":"28px","textAlign":"center"}} className="tf-title">
                                                    I am
                                                    <span className="text-color-3 style-title">Influencer</span>
                                                </h2>
                                                <div className="text-wrap clearfix">
                                                    <fieldset className="name-wrap style-text">
                                                        <input type="text" id="name" className="tb-my-input" name="name" tabIndex={1} placeholder="Enter Full Name" size={32} aria-required required />
                                                    </fieldset>
                                                    <fieldset className="email-wrap style-text">
                                                        <input type="email" id="email" className="tb-my-input" name="email" tabIndex={2} placeholder="Enter Your Email Address" size={32} aria-required required />
                                                    </fieldset>
                                                    <fieldset className="phone-wrap style-text">
                                                        <input type="tel" id="phone" className="tb-my-input" name="phone" tabIndex={1} placeholder="+91 9971 094 965 " size={32} aria-required required />
                                                    </fieldset>

                                                    <fieldset className="site-wrap style-text">
                                                        <input type="text" className="tb-my-input" name="platform" tabIndex={1} placeholder="Platform" size={32} aria-required required />
                                                    </fieldset>
                                                    <fieldset className="follower-wrap style-text">
                                                        <input type="text" className="tb-my-input" name="follower" tabIndex={1} placeholder="Follower" size={32} aria-required required />
                                                    </fieldset>
                                                </div>

                                                <fieldset className="message-wrap">
                                                    <textarea id="comment-message" name="message" rows={8} tabIndex={4} placeholder="Enter Your Message" aria-required></textarea>
                                                </fieldset>
                                                <button name="submit" type="submit" id="comment-reply" className="button btn-style4 btn-submit-comment">
                                                    <span>Submit Now </span>
                                                </button>
                                            </form>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div id="modalTwo" className="modal">
                                    <div className="modal-content">
                                        <div className="contact-form">
                                            <span className="close">×</span>

                                            <form method="post" id="contactform" className="comment-form form-submit" action="/api/company" accept-charset="utf-8" noValidate>
                                                <h2 style={{"fontSize":"28px"}} className="tf-title">
                                                    I am
                                                    <span className="text-color-3 style-title">Company</span>
                                                </h2>
                                                <div className="text-wrap clearfix">
                                                    <fieldset className="name-wrap style-text">
                                                        <input type="text" id="name" className="tb-my-input" name="name" tabIndex={1} placeholder="Enter Full Name*" aria-required required />
                                                    </fieldset>
                                                    <fieldset className="email-wrap style-text">
                                                        <input type="email" id="email" className="tb-my-input" name="email" tabIndex={2} placeholder="Enter Your Business email*" defaultValue="" size={32} aria-required required />
                                                    </fieldset>
                                                    <fieldset className="phone-wrap style-text">
                                                        <input type="text" id="company" className="tb-my-input" name="company" tabIndex={1} placeholder="Company*" aria-required required />
                                                    </fieldset>

                                                    <fieldset className="site-wrap style-text">
                                                        <input type="number" className="tb-my-input" name="phone" tabIndex={1} placeholder="Mobile Number*" aria-required required />
                                                    </fieldset>
                                                   
                                                    <fieldset className="phone-wrap style-text">
                                                        <input type="text" className="tb-my-input" name="site" tabIndex={1} placeholder="Enter Your Website" aria-required required />
                                                    </fieldset>
                                                   
                                                    <fieldset className="site-wrap style-text">
                                                        <label id="label-para" htmlFor="">I'm looking for a solution that
                                                            helps
                                                            with
                                                            (select all that apply):
                                                        </label>
                                                        <label className="checkbox" htmlFor="">
                                                            <input style={{"width":"18px"}} type="radio" name="checkbox" value="Instagram Marketing" />Instagram Marketing</label>
                                                        <label className="checkbox" htmlFor=""><input style={{"width":"18px"}} type="radio" name="checkbox" value="Youtube Marketing" />Youtube Marketing</label>
                                                        <label className="checkbox" htmlFor=""><input style={{"width":"18px"}} type="radio" name="checkbox" value="Both" />Both</label>
                                                    </fieldset>
                                                </div>
                                                <button name="submit" type="submit" id="comment-reply" className="button btn-style4 btn-submit-comment">
                                                    <span>Submit Now </span>
                                                </button>
                                            </form>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="skill-heading">
                                <p style={{"textAlign":"justify","lineHeight":"25px"}}>
                                    Influencer marketing is relatively a new marketing concept
                                    which is going strong with the expansion of social media. It
                                    is an approach where a brand or a company works with an
                                    influencer to promote the product or services. There could
                                    be different objectives for the campaign which may aim at
                                    selling more product or services or improve brand visibility
                                    on social media.<br  />The core concept of this marketing
                                    approach is based on the ability of an individual to
                                    influence the brand perception or the buying journey. As the
                                    digital platforms increasingly impacts the buying process
                                    and decision making this approach has gained momentum and
                                    ground in recent years. An influencer can be broadly seen as
                                    a trusted individual with loyal followings across digital
                                    platforms.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="media">
                                <img src="/assets/images/image-box/influ-img-1.jpg" alt="influencer marketing" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{"padding":"30px 0"}} className="tf-space flat-trusted flat-blog-grid style-blog home3">
                <div className="container">
                    <div className="row">
                        <div style={{"paddingBottom":"0px"}} className="col-lg-12">
                            <div style={{"marginBottom":"35px"}} className="blog-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="500ms">
                                <h2 style={{"fontSize":"28px"}} className="tf-title">
                                    The Leading Agency for Digital Influencer Marketing
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="media-box">
                                <div className="media">
                                    <img src="/assets/images/image-box/influ-img-2.jpg" alt="girl see in phone" />
                                </div>
                            </div>
                        </div>
                        <div id="unike" className="col-lg-6 col-md-7">
                            <p style={{"textAlign":"justify","lineHeight":"25px","marginBottom":"0px"}}>
                                Many brands know that influencer marketing impacts the brand
                                perception positively but they don’t know the roadmap. Redd as
                                Influencer Marketing Agency draws that roadmap and strategy of
                                influencer marketing campaign for our clients. <br  />Agency
                                draws that roadmap and strategy of influencer marketing
                                campaign for our clients.<br  />
                                As an Indian Influencer Marketing Agency, we design the
                                scalable and most trustworthy influencer campaign for the
                                brands to meet the desired outcome.
                            </p>
                            <ul>
                                <li>
                                    -Generate awareness for brands through incisive campaigns
                                </li>
                                <li>-Increase numbers in sales and purchases</li>
                                <li>-Higher traffic to website</li>
                                <li>-More app downloads</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{"paddingTop":"80px","paddingBottom":"0px","marginBottom":"50px"}} className="flat-blog-grid style-blog tf-space flat-skill">
                <div className="container">
                    <div className="row">
                        <div style={{"paddingBottom":"0px"}} className="col-lg-12">
                            <div style={{"marginBottom":"35px"}} className="blog-heading wow fadeInDown" data-wow-delay="0ms" data-wow-duration="500ms">
                                <h2 style={{"fontSize":"28px"}} className="tf-title">
                                    Red Rhymes as
                                    <span className="text-color-3 style-title">[Influencer]</span>
                                    Marketing Agency
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div id="unike" className="skill-heading">
                                <p style={{"textAlign":"justify","lineHeight":"25px"}}>
                                    As an influencer marketing agency we maintain a strong
                                    relationship with influencers from all major areas like
                                    food, lifestyle, fashion, entertainment, sports, movie and
                                    more. Our consistent approach and strong expertise as an
                                    influencer marketing agency in India powers us to match the
                                    right influencer to your brand, product or service. Our team
                                    of experts use past data and tools to ensure all campaigns
                                    are specific and aligned to drive maximum brand awareness or
                                    sales. We curate our recommendations based on past
                                    experiences to ensure the brand meets the right audience at
                                    the right platform for each campaign through our influencer
                                    community.
                                </p>
                                <p style={{"textAlign":"justify","lineHeight":"25px","marginBottom":"0px"}}>
                                    Redd platform of influencers aims to meet brand objectives,
                                    whether it be awareness, engagement, sales or all of them.
                                    Irrespective of your campaign budget we can create the
                                    campaigns. Some of our lead programs are described as below
                                </p>
                                <ul>
                                    <li style={{"listStyleType":"circle","marginLeft":"15px"}}>
                                        Micro Influencer Campaigns
                                    </li>
                                    <li style={{"listStyleType":"circle","marginLeft":"15px"}}>
                                        Strategic Celebrity Partnerships
                                    </li>
                                    <li style={{"listStyleType":"circle","marginLeft":"15px"}}>
                                        YouTube Influencers
                                    </li>
                                    <li style={{"listStyleType":"circle","marginLeft":"15px"}}>
                                        Instagram Influencers
                                    </li>
                                    <li style={{"listStyleType":"circle","marginLeft":"15px"}}>
                                        Brand Awareness
                                    </li>
                                    <li style={{"listStyleType":"circle","marginLeft":"15px"}}>
                                        Celebrity Brand Loyalty Programs
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="media">
                                <img src="/assets/images/image-box/influ-img-3.jpg" alt="influencer marketing" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}
