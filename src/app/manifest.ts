import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OUR Cafe',
    short_name: 'OUR Cafe',
    description: 'Pampanga\'s largest minimalist dining space. Coffee, pastries, and experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: '#451a03',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}