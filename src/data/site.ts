// Site-wide constants: identity, links, and navigation.

export const site = {
	name: 'Kooshan Amini',
	url: 'https://kooshanamini.github.io',
	title: 'Kooshan Amini — Machine Learning, Computer Vision & Remote Sensing',
	description:
		'Kooshan Amini is a Ph.D. candidate in Engineering at Rice University who builds machine learning systems for aerial and satellite imagery: vision-language segmentation, monocular depth, VLM inference at scale, and probabilistic risk modeling.',
	role: 'Ph.D. Candidate in Engineering',
	affiliation: 'Rice University',
	tagline:
		'I build machine learning systems that turn aerial and satellite imagery, simulations, and sensor data into decisions people can act on.',
	availability: 'Open to Summer 2027 internships',
	advisors: {
		padgett: { name: 'Jamie Padgett', fullName: 'Jamie E. Padgett', href: 'https://padgett.rice.edu/' },
		chen: { name: 'Hanjie Chen', fullName: 'Hanjie Chen', href: 'https://hanjiechen.github.io/' },
	},
	// Assembled in the browser by EmailLink so the address never appears in the HTML as plain text.
	email: { user: 'kooshanamini', domain: 'gmail.com' },
	social: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/kooshan1/', icon: 'linkedin' },
		{ label: 'GitHub', href: 'https://github.com/Kooshan1', icon: 'github' },
		{ label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=IeIQM1kAAAAJ', icon: 'scholar' },
	],
	cv: { href: '/cv/Kooshan_Amini_CV.pdf', updated: 'October 2026' },
	// Google Analytics 4 (property owned by Kooshan's Google account). Loaded only in production builds.
	analytics: { gaMeasurementId: 'G-31C9SEF04P' },
	nav: [
		{ label: 'Projects', href: '/projects/' },
		{ label: 'Publications', href: '/publications/' },
		{ label: 'Talks', href: '/talks/' },
		{ label: 'CV', href: '/cv/' },
	],
} as const;
