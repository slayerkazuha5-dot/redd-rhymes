'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.classList.add('rr-mobile-menu-open');
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollbarWidth}px`;

    const closeForEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    const closeForDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeForEscape);
    window.addEventListener('resize', closeForDesktop);

    return () => {
      document.removeEventListener('keydown', closeForEscape);
      window.removeEventListener('resize', closeForDesktop);
      body.classList.remove('rr-mobile-menu-open');
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsDesktopServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsServicesOpen(false);
    }
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div id="site-header-wrap">
      <header
        id="site-header"
        className={`${isScrolled ? 'is-scrolled ' : ''}${isMenuOpen ? 'rr-mobile-header-open' : ''}`}
        style={{
          zIndex: 1002,
        }}
      >
        <div id="site-logo" className="clearfix">
          <div id="site-log-inner">
            <Link href="/" rel="home" className="main-logo">
              <span className="rr-brand-logo" aria-label="Red Rhymes">
                <img src="/assets/images/logo/logo.png" alt="" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        <button
          className={`mobile-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <span
            className="rr-mobile-button__bar"
            style={{ transform: isMenuOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-6px)' }}
          ></span>
          <span
            className="rr-mobile-button__bar"
            style={{ opacity: isMenuOpen ? 0 : 1, transform: 'translateY(0)' }}
          ></span>
          <span
            className="rr-mobile-button__bar"
            style={{ transform: isMenuOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(6px)' }}
          ></span>
        </button>

        <div id="site-header-inner">
          <div className="wrap-inner clearfix">
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                <li className={`menu-item ${isActive('/work') ? 'current-menu-item' : ''}`}>
                  <Link href="/work">Work</Link>
                </li>
                <li
                  className={`menu-item menu-item-has-children ${isActive('/services') || isActive('/brand-strategy') || isActive('/digital-marketing') || isActive('/paid-media') || isActive('/social-media') || isActive('/brand-activation') || isActive('/graphic-design') || isActive('/video-production') || isActive('/influencer-marketing') ? 'current-menu-item' : ''}`}
                  onMouseEnter={() => setIsDesktopServicesOpen(true)}
                  onMouseLeave={() => setIsDesktopServicesOpen(false)}
                  onFocus={() => setIsDesktopServicesOpen(true)}
                  onBlur={() => setIsDesktopServicesOpen(false)}
                >
                  <Link href="/services" className="rr-services-menu-link" aria-expanded={isDesktopServicesOpen} aria-haspopup="true">
                    <span>Services</span>
                    <svg
                      className="rr-services-menu-arrow"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1.25L5 4.75L9 1.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <ul
                    className="sub-menu"
                    style={{
                      opacity: isDesktopServicesOpen ? 1 : 0,
                      visibility: isDesktopServicesOpen ? 'visible' : 'hidden',
                      pointerEvents: isDesktopServicesOpen ? 'auto' : 'none',
                      transform: isDesktopServicesOpen ? 'translateY(0)' : 'translateY(10px)',
                    }}
                  >
                    <li className="menu-item">
                      <Link href="/brand-strategy">Brand Strategy</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/digital-marketing">Digital Marketing</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/paid-media">Performance Marketing</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/social-media">Social Media</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/graphic-design">Creative &amp; Design</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/video-production">Video Production</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/influencer-marketing">Influencer Marketing</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/brand-activation">Brand Activation</Link>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item ${isActive('/about-us') ? 'current-menu-item' : ''}`}>
                  <Link href="/about-us">About</Link>
                </li>
                <li className={`menu-item ${isActive('/blog') ? 'current-menu-item' : ''}`}>
                  <Link href="/blog">Insights</Link>
                </li>
                <li className={`menu-item header-contact ${isActive('/contact') ? 'current-menu-item' : ''}`}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <nav
          id="rr-mobile-nav-panel"
          className={`rr-mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-hidden={!isMenuOpen}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsMenuOpen(false);
            }
          }}
        >
            <ul id="menu-primary-menu-mobile" className="menu">
              <li className={`menu-item ${isActive('/work') ? 'current-menu-item' : ''}`}>
                <Link href="/work" onClick={closeMenu}>Work</Link>
              </li>
              <li className={`menu-item ${isActive('/about-us') ? 'current-menu-item' : ''}`}>
                <Link href="/about-us" onClick={closeMenu}>About</Link>
              </li>
              <li className="menu-item menu-item-has-children">
                <div
                  className="rr-mobile-services-toggle"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  role="button"
                  aria-expanded={isServicesOpen}
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setIsServicesOpen((open) => !open);
                    }
                  }}
                >
                  <span>Services</span>
                  <span className={`arrow ${isServicesOpen ? 'active' : ''}`} aria-hidden="true"></span>
                </div>
                <ul className={`sub-menu ${isServicesOpen ? 'is-open' : ''}`} style={{ maxHeight: isServicesOpen ? '800px' : '0px' }}>
                  <li className="menu-item">
                    <Link href="/brand-strategy" onClick={closeMenu}>Brand Strategy</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/digital-marketing" onClick={closeMenu}>Digital Marketing</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/paid-media" onClick={closeMenu}>Performance Marketing</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/social-media" onClick={closeMenu}>Social Media</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/graphic-design" onClick={closeMenu}>Creative &amp; Design</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/video-production" onClick={closeMenu}>Video Production</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/influencer-marketing" onClick={closeMenu}>Influencer Marketing</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/brand-activation" onClick={closeMenu}>Brand Activation</Link>
                  </li>
                </ul>
              </li>
              <li className={`menu-item ${isActive('/blog') ? 'current-menu-item' : ''}`}>
                <Link href="/blog" onClick={closeMenu}>Insights</Link>
              </li>
              <li className={`menu-item header-contact ${isActive('/contact') ? 'current-menu-item' : ''}`}>
                <Link href="/contact" onClick={closeMenu}>Contact</Link>
              </li>
              <li className="menu-item header-mobile-phone">
                <a href="tel:+919971094965" onClick={closeMenu}>
                  <img src="/assets/images/contact/telephone.png" alt="" aria-hidden="true" className="rr-header-phone-icon" />
                  <span>+91 9971 094 965</span>
                </a>
              </li>
              <li className="menu-item header-cta">
                <Link href="/contact" className="button btn-style4" onClick={closeMenu}>Let&apos;s Talk <span>↗</span></Link>
              </li>
            </ul>
        </nav>

        <div className="icon-header">
          <a href="https://www.facebook.com/redrhymes1" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/redrhymes_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/redrhymes_?s=20&t=klliiFgJgdbhAUbPvanO5g" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/@Redd.1" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="phone-header phone-style">
          <div className="icon-headphone">
            <a href="tel:+919971094965">
              <img src="/assets/images/contact/telephone.png" alt="" aria-hidden="true" className="rr-header-phone-icon" />
              <span>+91 9971 094 965</span>
            </a>
          </div>
        </div>
        <Link href="/contact" className="header-desktop-cta">Let&apos;s Talk <span>↗</span></Link>
      </header>
    </div>
  );
}
