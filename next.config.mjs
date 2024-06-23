/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['example.com'],
      formats: ['image/avif', 'image/webp'],
    },
    async headers() {
      return [
        {
          source: '/example-path/:path*',
          headers: [
            {
              key: 'X-Example-Header',
              value: 'value',
            },
          ],
        },
      ];
    },
    i18n: {
      locales: ['en', 'fr', 'es'],
      defaultLocale: 'en',
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = { fs: false, module: false };
      }
      return config;
    },
  };
  
  export default nextConfig;
  