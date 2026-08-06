import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    // Only scan the HTML entry — avoids pre-bundling huge question banks
    entries: ['index.html'],
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      devOptions: { enabled: false },
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'og-image.png',
        'og-image.jpg',
        'apple-touch-icon.png',
        'pwa-192.png',
        'pwa-512.png',
        'robots.txt',
        'sitemap.xml',
      ],
      manifest: {
        name: 'frontendprep',
        short_name: 'frontendprep',
        description: '1,200 timed frontend quiz questions — HTML, CSS, React & more.',
        theme_color: '#f6f6f4',
        background_color: '#f6f6f4',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,png,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /scripts\/banks\/.*\.mjs$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'question-banks',
              expiration: { maxEntries: 12, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
})
