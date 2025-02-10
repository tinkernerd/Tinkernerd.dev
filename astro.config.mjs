// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://tinkernerd.dev/',
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel(),
  server: {
      port: parseInt(process.env.PORT || '3000')
	},
  integrations: [
    icon()
  ],
  env: {
    schema: {
      PUBLIC_AVWX_API_KEY: envField.string({ context: "client", access: "public" }),
    }
  },
});