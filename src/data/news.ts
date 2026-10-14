export interface NewsItem {
	/** ISO date (YYYY-MM or YYYY-MM-DD); drives ordering and the displayed month. */
	date: string;
	/** Overrides the displayed date when the exact month is not known. */
	label?: string;
	text: string;
	href?: string;
}

// Newest first.
export const news: NewsItem[] = [
	{
		date: '2026-09-17',
		text: 'Gave the NDPTC Third Thursday webinar with Prof. Jamie Padgett: “Strengthening Disaster Resilience: From National Initiatives to a Deep Dive on Debris.”',
		href: '/talks/',
	},
	{
		date: '2026-08-17',
		text: 'Posted DebrisHeightNet to arXiv: debris volume from a single aerial image, now under review at ISPRS JPRS.',
		href: '/projects/debrisheightnet/',
	},
	{
		date: '2026-08-12',
		text: 'Led a hands-on debris segmentation session at the NHERI SPARC Workshop.',
	},
	{
		date: '2026-08',
		label: '2026',
		text: '“Evolving Threats” accepted in ASCE Natural Hazards Review.',
		href: '/projects/debris-risk-sea-level-rise/',
	},
	{
		date: '2026-05',
		text: 'Co-developed the hands-on AI training at the 2026 NHERI Computational Symposium: a debris segmentation case study on DesignSafe-CI.',
		href: '/talks/',
	},
	{
		date: '2026-04-21',
		text: 'Published our 16-author decision-support framework for coastal resilience in IJDRR (open access).',
		href: '/projects/galveston-decision-support/',
	},
	{
		date: '2026-03-18',
		text: 'Presented spatial prediction of hurricane-induced debris for coastal resilience planning at the ASCE AEI | IRD 2026 Conference.',
		href: '/talks/',
	},
	{
		date: '2026-01',
		label: 'Spring 2026',
		text: 'Became a D2K Research Mentoring Fellow at Rice, mentoring data-science capstone teams.',
	},
	{
		date: '2025-12-03',
		text: 'Gave an invited NSF NHERI DesignSafe webinar on AI-driven hazard research, with debris segmentation as the case study.',
		href: '/talks/',
	},
	{
		date: '2025-08-22',
		text: 'Finished a summer as a Risk & Resilience Engineering Intern at Arup, which led to a full-time offer.',
	},
	{
		date: '2025-08-14',
		text: 'CLIPSeg-debris published in Computer-Aided Civil and Infrastructure Engineering.',
		href: '/projects/clipseg-debris/',
	},
	{
		date: '2025-07-23',
		text: 'Merged an electric power network recovery analysis into NCSA’s open-source IN-CORE.',
		href: '/projects/incore-power-recovery/',
	},
];
