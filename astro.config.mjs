import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePresetMinify from 'rehype-preset-minify'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel';

const rehypeExternalLinksConfig = [
    rehypeExternalLinks,
    { target: '_blank', rel: ['noopener', 'noreferrer'] }
]
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
      mdx({
          rehypePlugins: [ rehypeExternalLinksConfig, rehypePresetMinify ]
      }),
      react(),
      sitemap({
      })
	],

  markdown: {
      smartypants: true,
      rehypePlugins: [ rehypeExternalLinksConfig ],
	},

});