'use client';

import Script from 'next/script';
import React, { useEffect } from 'react';

export default function ScriptLoader() {
  useEffect(() => {
    // Hide preloader if present
    const preloader = document.querySelector('.preload');
    if (preloader) {
      setTimeout(() => {
        (preloader as HTMLElement).style.opacity = '0';
        setTimeout(() => {
          (preloader as HTMLElement).style.display = 'none';
        }, 500);
      }, 500);
    }
  }, []);

  return (
    <>
      <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/countto.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
      <Script src="/assets/js/shortcodes.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper.js" strategy="lazyOnload" />
    </>
  );
}
