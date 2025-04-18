// const nextConfig = {};
// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  output: "standalone",
  images: {
    unoptimized: true,
  }
};

// export default nextConfig;
export default withNextIntl(nextConfig);
