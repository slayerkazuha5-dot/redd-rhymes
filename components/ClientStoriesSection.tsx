'use client';

import { useEffect, useState } from 'react';

const stories = [
  {
    client: 'HONDA',
    category: 'DIGITAL / CREATIVE',
    title: 'BUILDING A DIGITAL CAMPAIGN THAT MOVES.',
    description: 'How we reimagined Honda’s digital presence to connect with a new generation of drivers.',
    image: '/assets/images/work/client1.png',
    alt: 'Honda red car driving under an overpass',
  },
  {
    client: 'SHARDA HOSPITAL',
    category: 'HEALTHCARE / BRANDING',
    title: 'A HEALTHIER TOMORROW THROUGH BETTER STORIES.',
    description: 'How we helped Sharda Hospital build a more human and approachable brand.',
    image: '/assets/images/work/client4.png',
    alt: 'Doctor and child smiling together',
  },
  {
    client: 'HUNARMAND INDIA',
    category: 'BRANDING / DIGITAL',
    title: 'CELEBRATING INDIA’S ARTISANS.',
    description: 'A digital platform to showcase India’s handcrafted heritage to the world.',
    image: '/assets/images/work/client5.png',
    alt: 'Hands crafting a wooden object',
  },
  {
    client: 'ITC',
    category: 'CREATIVE / CAMPAIGN',
    title: 'TRADITION MEETS A BRIGHTER TOMORROW.',
    description: 'How we created a campaign that brought ITC’s heritage and values to modern audiences.',
    image: '/assets/images/work/img4.png',
    alt: 'ITC Aashirvaad packaging product shot',
  },
  {
    client: 'KIA',
    category: 'DIGITAL / SOCIAL',
    title: 'DRIVING A STRONGER DIGITAL PRESENCE.',
    description: 'A bold social campaign to amplify Kia’s new product range and digital reach.',
    image: '/assets/images/work/img5.png',
    alt: 'Kia SUV in a concrete showroom',
  },
  {
    client: 'HYUNDAI',
    category: 'CAMPAIGN / CREATIVE',
    title: 'PROGRESS IN MOTION.',
    description: 'A multi-platform campaign to showcase Hyundai’s sustainable future vision.',
    image: '/assets/images/work/client6.png',
    alt: 'Hyundai SUV against a mountain sunset',
  },
];

const reviews = [
  {
    quote: 'Working with Red Rhymes was a seamless experience. They understood our vision and brought it to life brilliantly.',
    author: 'RAHUL MEHTA',
    role: 'MARKETING HEAD — HONDA',
  },
  {
    quote: 'Their strategy and storytelling helped us turn a complex healthcare message into something warm and memorable.',
    author: 'DR. ANIKA SHARMA',
    role: 'CHIEF COMMUNICATIONS OFFICER — SHARDA HOSPITAL',
  },
  {
    quote: 'The energy, clarity and craft in the campaign were exceptional. It felt premium from the first idea to the final launch.',
    author: 'KUNAL KHANNA',
    role: 'BRAND LEAD — HUNARMAND INDIA',
  },
  {
    quote: 'Red Rhymes brought a rare mix of strategic thinking and creative confidence to the table. We felt supported at every step.',
    author: 'MEHER GUPTA',
    role: 'HEAD OF MARKETING — KIA',
  },
  {
    quote: 'Their team translated our ambitions into a campaign that was sharp, modern, and genuinely effective across every touchpoint.',
    author: 'ADITYA MALHOTRA',
    role: 'BRAND DIRECTOR — ITC',
  },
];

export default function ClientStoriesSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);

  const goToNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const goToPreviousReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const goToPreviousStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const reviewInterval = window.setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4200);

    return () => window.clearInterval(reviewInterval);
  }, []);

  useEffect(() => {
    const storyInterval = window.setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 4200);

    return () => window.clearInterval(storyInterval);
  }, []);

  const activeReview = reviews[currentReview];
  return (
    <section className="client-stories-page" aria-label="Client Stories section">
      <div className="client-stories-shell">
        <header className="client-stories-hero" aria-label="Client stories hero section">
          <div className="client-stories-hero__intro">
            <p className="client-stories-kicker"><span /> CLIENT STORIES</p>
            <h1 className="client-stories-hero__title">
              <span>THE BRANDS</span>
              <span>BEHIND <span className="client-stories-hero__title--accent">THE WORK.</span></span>
            </h1>
          </div>

          <div className="client-stories-hero__description-wrap">
            <p className="client-stories-hero__description">
              Real collaborations, real conversations and the stories behind the work we create together.
            </p>
            <a className="client-stories-hero__link" href="#client-stories-grid">
              EXPLORE STORIES <span>→</span>
            </a>
          </div>

          <div className="client-stories-hero__meta" aria-label="Story categories">
            <span>IDEAS</span>
            <span>BRANDS</span>
            <span>PEOPLE</span>
            <span>PROGRESS</span>
            <i />
          </div>
        </header>

        <div className="client-stories-headerbar" aria-label="Client stories header bar">
          <p className="client-stories-kicker client-stories-kicker--small"><span /> CLIENT STORIES</p>
          <p className="client-stories-headerbar__all">ALL STORIES <span>→</span></p>
        </div>

        <div id="client-stories-grid" className="client-stories-grid client-stories-grid--desktop" aria-label="Client story cards">
          {stories.map((story) => (
            <article key={story.client} className="client-story-card">
              <div className="client-story-card__image">
                <img src={story.image} alt={story.alt} />
              </div>

              <div className="client-story-card__meta">
                <p>{story.client}</p>
                <span>{story.category}</span>
              </div>

              <h2 className="client-story-card__title">{story.title}</h2>

              <div className="client-story-card__footer">
                <p>{story.description}</p>
                <a href="#" aria-label={`Read story for ${story.client}`}>
                  READ STORY <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="client-stories-slider" aria-label="Client story slider">
          <div className="client-stories-slider__viewport">
            <div className="client-stories-slider__track" style={{ transform: `translateX(-${currentStory * 100}%)` }}>
              {stories.map((story) => (
                <article key={`${story.client}-mobile`} className="client-story-card client-story-card--slide">
                  <div className="client-story-card__image">
                    <img src={story.image} alt={story.alt} />
                  </div>

                  <div className="client-story-card__meta">
                    <p>{story.client}</p>
                    <span>{story.category}</span>
                  </div>

                  <h2 className="client-story-card__title">{story.title}</h2>

                  <div className="client-story-card__footer">
                    <p>{story.description}</p>
                    <a href="#" aria-label={`Read story for ${story.client}`}>
                      READ STORY <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="client-stories-slider__controls" aria-label="Client story controls">
            <button type="button" aria-label="Previous story" onClick={goToPreviousStory}>←</button>
            <button type="button" aria-label="Next story" className="is-active" onClick={goToNextStory}>→</button>
          </div>
        </div>
      </div>

      <footer className="client-stories-testimonial" aria-label="Client testimonial">
        <div className="client-stories-testimonial__quote-wrap">
          <span className="client-stories-testimonial__mark">“</span>
          <span className="client-stories-testimonial__divider" aria-hidden="true" />
          <p className="client-stories-testimonial__quote">
            {activeReview.quote}
          </p>
        </div>

        <div className="client-stories-testimonial__details">
          <span className="client-stories-testimonial__divider" aria-hidden="true" />
          <div className="client-stories-testimonial__person">
            <p className="client-stories-testimonial__name">{activeReview.author}</p>
            <p className="client-stories-testimonial__role">{activeReview.role}</p>
          </div>
          <div className="client-stories-testimonial__controls" aria-label="Testimonial navigation">
            <button type="button" aria-label="Previous testimonial" onClick={goToPreviousReview}>←</button>
            <button type="button" aria-label="Next testimonial" className="is-active" onClick={goToNextReview}>→</button>
          </div>
        </div>
      </footer>
    </section>
  );
}
