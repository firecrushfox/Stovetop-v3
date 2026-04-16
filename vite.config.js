import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const useHttps = mode === 'https' || mode === 'https-pwa';
  const enableDevPwa = mode === 'pwa-dev' || mode === 'https-pwa';

  return {
    server: {
      port: 4173,
      https: useHttps
    },
    preview: {
      port: 4174,
      https: useHttps
    },
    plugins: [
      react(),
      useHttps && basicSsl(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: enableDevPwa
        },
        includeAssets: [
          'favicon.ico',
          'favicon-180x180.png',
          'favicon-192x192.png',
          'favicon-512x512.png'
        ],
        manifest: {
          id: '/',
          name: 'Stovetop',
          short_name: 'Stovetop',
          description: 'A PWA recipe organizer powered by Markdown files.',
          theme_color: '#1a3d1a',
          background_color: '#f5f0e6',
          scope: '/',
          display: 'standalone',
          display_override: ['standalone'],
          start_url: '/',
          categories: ['food', 'lifestyle', 'productivity'],
          icons: [
            {
              src: '/favicon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/favicon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,md}']
        }
      })
    ]
  };
});
