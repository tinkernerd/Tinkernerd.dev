import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { siteConfig} from '@/site-config';

const docs = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().default(siteConfig.description).optional(),
	}),
});
export const collections = { docs };