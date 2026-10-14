// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Organization site served at the domain root, so no `base` is needed.
	// When a custom domain is added, change `site` and add public/CNAME.
	site: 'https://kooshanamini.github.io',
	integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
	devToolbar: { enabled: false },
	vite: {
		plugins: [tailwindcss()],
	},
});
