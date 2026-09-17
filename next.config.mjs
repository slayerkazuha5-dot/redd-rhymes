/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/about-us.html', destination: '/about-us' },
      { source: '/services.html', destination: '/services' },
      { source: '/content-marketing.html', destination: '/content-marketing' },
      { source: '/digital-marketing.html', destination: '/digital-marketing' },
      { source: '/social-media.html', destination: '/social-media' },
      { source: '/paid-media.html', destination: '/paid-media' },
      { source: '/graphic-design.html', destination: '/graphic-design' },
      { source: '/video-production.html', destination: '/video-production' },
      { source: '/web-development.html', destination: '/web-development' },
      { source: '/influencer-marketing.html', destination: '/influencer-marketing' },
      { source: '/brand-activation.php', destination: '/brand-activation' },
      { source: '/seo.html', destination: '/seo' },
      { source: '/contact.html', destination: '/contact' },
      { source: '/blog.html', destination: '/blog' },
      { source: '/Influencer-secrets-no-one-talks-about.html', destination: '/Influencer-secrets-no-one-talks-about' },
      { source: '/beware-of-the-app-which-may-steal-your-facebook-and-instagram-log-in-info.html', destination: '/beware-of-the-app-which-may-steal-your-facebook-and-instagram-log-in-info' },
      { source: '/youtube-handles-rolling-out-soon-are-you-eligible.html', destination: '/youtube-handles-rolling-out-soon-are-you-eligible' },
      { source: '/privacy-policy.html', destination: '/privacy-policy' },
      // API rewrites for legacy form action URLs
      { source: '/submit_form.php', destination: '/api/submit-form' },
      { source: '/influ.php', destination: '/api/influencer' },
      { source: '/cpny.php', destination: '/api/company' },
      { source: '/contact/contact-process.php', destination: '/api/contact' },
    ];
  },
};

export default nextConfig;
