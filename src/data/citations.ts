// Citation counts from Google Scholar: https://scholar.google.com/citations?user=IeIQM1kAAAAJ
// Google Scholar has no public API, so these numbers are updated by hand: edit them and `asOf`.

export const scholar = {
	/** Date the numbers were read from the Scholar profile (YYYY-MM-DD). */
	asOf: '2026-10-14',
	href: 'https://scholar.google.com/citations?user=IeIQM1kAAAAJ',
	total: 135,
	hIndex: 4,
	i10Index: 3,
	/** Per-item counts, keyed by the `id` of a publication or artifact in publications.ts. */
	byId: {
		'rcs-2023': 63,
		'ress-2023': 51,
		'cacaie-2025': 10,
		'power-network-data-2022': 8,
		'ijdrr-2026': 3,
	} as Record<string, number>,
};

/** The Scholar count for an item, or undefined when it has no citations yet. */
export function citationsFor(id: string): number | undefined {
	const count = scholar.byId[id];
	return count ? count : undefined;
}
