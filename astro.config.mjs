// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), mdx()],
  adapter: vercel()
});