import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/((?!api/).*)',
        destination: '/static-app-shell',
      },
    ];
  },
};

<<<<<<< HEAD
export default nextConfig;
=======
export default nextConfig;
>>>>>>> parent of 2f55361 (pwa)
