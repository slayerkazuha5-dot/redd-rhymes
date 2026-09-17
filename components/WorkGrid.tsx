'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

const filters = ['ALL', 'BRANDING', 'DIGITAL', 'SOCIAL', 'WEB', 'CAMPAIGNS', 'VIDEO'];

const projects = [
  { client: 'HONDA', number: '01', slug: 'honda-brighter-tomorrow', category: 'DIGITAL', label: 'DIGITAL CAMPAIGN', title: <>DRIVE A <em>BRIGHTER</em><br />TOMORROW</>, image: '/assets/images/work/img1.png', caption: ['PUSHING', 'POSSIBILITIES', 'FURTHER'] },
  { client: 'HUNARMAND INDIA', number: '02', slug: 'hunarmand-india-stronger-tomorrow', category: 'CAMPAIGNS', label: 'BRAND CAMPAIGN', title: <>SKILLS FOR A <em>STRONGER</em><br />TOMORROW</>, image: '/assets/images/work/img2.png', caption: ['PEOPLE', 'SKILLS', 'OPPORTUNITIES', 'REAL CHANGE'] },
  { client: 'SHARDA HOSPITAL', number: '03', slug: 'sharda-care-beyond-treatment', category: 'CAMPAIGNS', label: 'CAMPAIGN', title: <>CARE<br /><em>BEYOND</em> TREATMENT</>, image: '/assets/images/work/img3.png', caption: ['HEALTHIER', 'PEOPLE', 'HAPPIER', 'TOMORROWS'] },
  { client: 'ITC', number: '04', slug: 'itc-cleaner-greener-tomorrow', category: 'BRANDING', label: 'CREATIVE CAMPAIGN', title: <>A CLEANER<br /><em>GREENER</em><br />TOMORROW</>, image: '/assets/images/work/img4.png', caption: ['A HEALTHIER', 'PLANET', 'A BRIGHTER', 'TOMORROW'] },
  { client: 'KIA', number: '05', slug: 'kia-movement-that-inspires', category: 'DIGITAL', label: 'DIGITAL EXPERIENCE', title: <>MOVEMENT<br />THAT <em>INSPIRES</em></>, image: '/assets/images/work/img5.png', caption: ['MOVEMENT', 'PEOPLE', 'A BRIGHTER', 'TOMORROW'] },
  { client: 'MAHINDRA', number: '06', slug: 'mahindra-built-for-whats-next', category: 'SOCIAL', label: 'SOCIAL CAMPAIGN', title: <>BUILT FOR <em>WHAT&apos;S</em><br />NEXT</>, image: '/assets/images/work/img6.png', caption: ['BOLDER', 'LANDSCAPES', 'STRONGER', 'PEOPLE'] },
];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [mobileSlide, setMobileSlide] = useState(0);

  const visibleProjects = useMemo(
    () => (activeFilter === 'ALL' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  const mobilePairs = useMemo(() => {
    const pairs: typeof visibleProjects[] = [];

    for (let index = 0; index < visibleProjects.length; index += 2) {
      pairs.push(visibleProjects.slice(index, index + 2));
    }

    return pairs;
  }, [visibleProjects]);

  useEffect(() => {
    setMobileSlide(0);
  }, [activeFilter]);

  const previousPair = () => setMobileSlide((current) => Math.max(current - 1, 0));
  const nextPair = () => setMobileSlide((current) => Math.min(current + 1, Math.max(mobilePairs.length - 1, 0)));

  return (
    <section className="work-projects" id="work-projects" aria-labelledby="work-projects-heading">
      <h2 id="work-projects-heading" className="sr-only">Selected projects</h2>
      <div className="work-filter" role="tablist" aria-label="Filter projects">
        <div className="work-filter__tabs">
          {filters.map((filter) => (
            <button className={activeFilter === filter ? 'is-active' : ''} key={filter} type="button" role="tab" aria-selected={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid work-grid--desktop" aria-live="polite">
        {visibleProjects.map((project) => (
          <Link className="work-card" href={`/work/${project.slug}`} key={`${activeFilter}-${project.slug}`}>
            <div className="work-card__copy">
              <div className="work-card__meta"><span>{project.client}</span><b>{project.number}</b></div>
              <h3>{project.title}</h3>
              <p className="work-card__category">{project.label}</p>
            </div>
            <div className="work-card__image">
              <img src={project.image} alt={`${project.client} ${project.label.toLowerCase()}`} />
              <i />
            </div>
          </Link>
        ))}
      </div>

      <div className="work-grid-mobile" aria-live="polite">
        {mobilePairs.length > 0 && (
          <>
            <div className="work-grid-mobile__viewport">
              <div className="work-grid-mobile__track" style={{ transform: `translateX(-${mobileSlide * 100}%)` }}>
                {mobilePairs.map((pair, pairIndex) => (
                  <div className="work-grid-mobile__slide" key={`${activeFilter}-pair-${pairIndex}`}>
                    {pair.map((project) => (
                      <Link className="work-card work-card--mobile" href={`/work/${project.slug}`} key={`${activeFilter}-${project.slug}`}>
                        <div className="work-card__copy">
                          <div className="work-card__meta"><span>{project.client}</span><b>{project.number}</b></div>
                          <h3>{project.title}</h3>
                          <p className="work-card__category">{project.label}</p>
                        </div>
                        <div className="work-card__image">
                          <img src={project.image} alt={`${project.client} ${project.label.toLowerCase()}`} />
                          <i />
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="work-grid-mobile__controls">
              <button type="button" aria-label="Previous projects" disabled={mobileSlide === 0} onClick={previousPair}>
                ←
              </button>
              <button type="button" aria-label="Next projects" disabled={mobileSlide === Math.max(mobilePairs.length - 1, 0)} onClick={nextPair}>
                →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
