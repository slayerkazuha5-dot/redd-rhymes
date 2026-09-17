import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScriptLoader from '@/components/ScriptLoader';
import SiteStructuredData from '@/components/SiteStructuredData';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://redrhymes.com'),
  title: {
    default: 'Red Rhymes | Social Media Consultancy in Noida',
    template: '%s | Red Rhymes',
  },
  description:
    'Red Rhymes is a social media consultancy in Noida helping brands grow through strategy, content, influencer marketing, paid social, and measurable campaigns.',
  openGraph: {
    type: 'website',
    siteName: 'Red Rhymes',
    title: 'Red Rhymes | Social Media Consultancy in Noida',
    description:
      'Social media strategy, content, influencer marketing, and paid social campaigns for ambitious brands.',
    url: 'https://redrhymes.com',
    images: [
      {
        url: '/assets/images/logo/redd_Black.png',
        width: 512,
        height: 512,
        alt: 'Red Rhymes logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Red Rhymes | Social Media Consultancy in Noida',
    description:
      'Social media strategy, content, influencer marketing, and paid social campaigns for ambitious brands.',
    images: ['/assets/images/logo/redd_Black.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'https://redrhymes.com/' }],
  icons: {
    icon: '/assets/icon/Favicon.png',
    apple: '/assets/icon/Favicon.png',
  },
  other: {
    'ahrefs-site-verification': '9b6091e59f3eee1aedae8ef953fa879352bbb5811b40e5c0fb554d825d2ff397',
    'google-site-verification': '2Pj5p1HNwPsc_t1MHn9F6vdKnCFYgsLd2Pu_6nG-dE4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/shortcodes.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/twentytwenty.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/popoform.css" />
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 769px) {
              .button-slider {
                display: none;
                visibility: hidden;
              }
            }
          `
        }} />
      </head>
      <body className="counter-scroll">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHLQRXSN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Google Tag Manager Script */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NHLQRXSN');
          `}
        </Script>

        {/* Google Analytics gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ND6XCCTPL5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ND6XCCTPL5');
            gtag('config', 'G-BF5G4F4DN4');
          `}
        </Script>

        {/* Preloader */}
        <div className="preload preload-container">
          <div className="preload-logo"></div>
        </div>

        <div id="wrapper" className="animation">
          <div id="page" className="clearfix">
            <Header />
            <SiteStructuredData />
            {children}
            <Footer />
          </div>
        </div>

        <WhatsAppButton />
        <ScriptLoader />
      </body>
    </html>
  );
}
