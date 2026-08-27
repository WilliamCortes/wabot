import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wabot365 — Chatbot de WhatsApp',
    short_name: 'Wabot365',
    description: 'Chatbots de WhatsApp para microempresas en Colombia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF6EF',
    theme_color: '#1F9D5A',
    icons: [
      { src: '/icon.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
