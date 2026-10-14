export interface Talk {
	/** ISO date: YYYY-MM-DD, or YYYY-MM when the exact day is not known. */
	date: string;
	kind: string;
	title: string;
	event: string;
	host?: string;
	note?: string;
	href?: string;
}

// Newest first within each list.

export const invitedTalks: Talk[] = [
	{
		date: '2026-09-17',
		kind: 'Invited webinar',
		title: 'Strengthening Disaster Resilience: From National Initiatives to a Deep Dive on Debris',
		event: 'NDPTC Third Thursday Webinar',
		host: 'National Disaster Preparedness Training Center, University of Hawaiʻi',
		note: 'With J. E. Padgett',
	},
	{
		date: '2025-12-03',
		kind: 'Invited webinar',
		title: 'Leveraging DesignSafe for AI-Driven Hazard Research: A Debris Segmentation Case Study',
		event: 'NSF NHERI DesignSafe Webinar Series',
		note: 'With J. E. Padgett',
	},
	{
		date: '2024-09-27',
		kind: 'Invited roundtable',
		title: 'Community Resilience Modeling with IN-CORE',
		event: 'NHERI SimCenter Community Roundtable',
		note: 'Only graduate-student speaker',
	},
];

export const workshops: Talk[] = [
	{
		date: '2026-08-12',
		kind: 'Workshop session',
		title: 'Post-Disaster Imagery: AI-Based Segmentation, Classification, and Tagging',
		event: 'NHERI SPARC 2026 Workshop',
		note: 'Taught the session: introduction, live demo, and hands-on debris segmentation exercise',
	},
	{
		date: '2026-05',
		kind: 'Hands-on training',
		title: 'Leveraging DesignSafe-CI for AI-Driven Hazard Research: A Debris Segmentation Case Study',
		event: '2026 NHERI Computational Symposium',
		note: 'Co-author of the AI training book, with K. Kumar and J. E. Padgett',
	},
];

export const conferenceTalks: Talk[] = [
	{
		date: '2026-03-18',
		kind: 'Talk & paper',
		title: 'Spatial Prediction of Hurricane-Induced Debris for Coastal Resilience Planning',
		event: 'ASCE AEI | IRD 2026 Conference',
	},
	{
		date: '2025-06-04',
		kind: 'Talk & paper',
		title: 'Enhancing Coastal Resilience: Rapid Post-Hurricane Debris Detection',
		event: '14th International Conference on Structural Safety and Reliability (ICOSSAR 2025)',
	},
	{
		date: '2025-02',
		kind: 'Talk',
		title: 'Integrated Framework for Coastal Community Resilience to Storm Events: A Case Study of the Galveston Testbed',
		event: '2025 NHERI Computational Symposium',
	},
	{
		date: '2024-05-29',
		kind: 'Talk',
		title: 'Innovative Computational Strategies for Coastal Resilience: Tackling Hurricane-Induced Debris Challenges',
		event: 'Engineering Mechanics Institute and Probabilistic Mechanics & Reliability Conference (EMI/PMC 2024)',
	},
	{
		date: '2024-05-02',
		kind: 'Talk',
		title: 'Multi-Disciplinary Hurricane Resilience Models: Galveston Testbed',
		event: 'NIST Center of Excellence for Risk-Based Community Resilience Planning, Spring 2024 Semi-Annual Meeting',
	},
	{
		date: '2024-02',
		kind: 'Talk',
		title: 'Enhancing Coastal Resilience to Hurricane-Induced Debris: Application of Deep Learning Algorithms',
		event: 'NHERI Computational Symposium 2024',
	},
	{
		date: '2024-02',
		kind: 'Talk',
		title:
			'Leveraging Cyberinfrastructure to Support Modeling of Hurricane-Induced Debris Impacts for Coastal Community Resilience Analysis',
		event: 'NHERI Computational Symposium 2024',
	},
	{
		date: '2023-11-16',
		kind: 'Talk',
		title: 'Probabilistic Modeling of Hurricane-Induced Debris Impacts for Coastal Community Resilience Analysis',
		event: 'ASCE INSPIRE 2023',
	},
	{
		date: '2023-10-13',
		kind: 'Co-authored talk',
		title: 'Evaluating Coupled Social-Physical Resilience Metrics in Galveston Using IN-CORE',
		event: '2023 SSPEED Conference: Urban and Coastal Flooding',
		note: 'Presented by J. E. Padgett',
	},
	{
		date: '2023-07-11',
		kind: 'Talk & paper',
		title: 'Probabilistic Modeling of Hurricane-Induced Debris Impacts for Coastal Community Resilience Analysis',
		event: '14th International Conference on Applications of Statistics and Probability in Civil Engineering (ICASP14)',
	},
	{
		date: '2023-06-07',
		kind: 'Talk',
		title: 'Probabilistic Analysis of Hurricane-Induced Debris Impacts towards Enhancing Coastal Community Resilience',
		event: 'ASCE Engineering Mechanics Institute Conference (EMI 2023)',
	},
	{
		date: '2023-04-27',
		kind: 'Talk',
		title: 'Hurricane-Induced Debris Impacts on Transportation Infrastructure and Emergency Response',
		event: 'NIST Center of Excellence for Risk-Based Community Resilience Planning, Spring 2023 Semi-Annual Meeting',
	},
];
