// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';  // Add the React integration

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()]  // Include both Tailwind and React
});
