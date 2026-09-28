// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// If you deploy to https://<user>.github.io/<repo>, set `base: '/<repo>'`.
// For a user site (https://<user>.github.io) or a custom domain, leave `base` off.
export default defineConfig({
  site: 'https://jjhochoi.github.io',
  vite: { plugins: [tailwindcss()] },
});
