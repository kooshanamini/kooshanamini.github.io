import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			/** Short label above the title, e.g. "CLIPSeg-debris · CACAIE 2025". */
			name: z.string(),
			/** One or two sentences for cards, the page lead, and the meta description. */
			summary: z.string(),
			/** Position on the projects page (ascending). */
			order: z.number(),
			/** Also shown under "Selected work" on the home page. */
			featured: z.boolean().default(false),
			role: z.string(),
			context: z.string(),
			period: z.string().optional(),
			tags: z.array(z.string()).default([]),
			stack: z.array(z.string()).default([]),
			metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
			links: z
				.array(
					z.object({
						label: z.string(),
						href: z.string().url(),
						kind: z.enum(['paper', 'preprint', 'code', 'data', 'model', 'pr']),
					}),
				)
				.default([]),
			/** A real figure. Projects without public imagery use `motif` instead. */
			cover: image().optional(),
			coverAlt: z.string().default(''),
			/** "contain" for paper figures on a white background; "cover" for photo-like images. */
			coverFit: z.enum(['cover', 'contain']).default('cover'),
			motif: z.enum(['satellite', 'architecture', 'flood', 'network']).default('network'),
			/** Id of the related entry in src/data/publications.ts. */
			publication: z.string().optional(),
		}),
});

export const collections = { projects };
