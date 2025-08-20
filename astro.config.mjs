// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Uncomment and modify if deploying to a subdirectory
  // site: 'https://yourdomain.com',
  // base: '/subdirectory',
});
