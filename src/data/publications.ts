// Publications, datasets, and software.
// Google Scholar citation counts live in citations.ts, keyed by `id`.

export type LinkKind = 'paper' | 'preprint' | 'code' | 'data' | 'model' | 'pr';

export interface PubLink {
	label: string;
	href: string;
	kind: LinkKind;
}

export interface Publication {
	id: string;
	type: 'journal' | 'preprint' | 'conference';
	title: string;
	/** Display names in citation order. Mark equal contribution with a trailing "*". */
	authors: string[];
	/** Append "et al." because the listed authors are only the first few. */
	etAl?: boolean;
	venue: string;
	details?: string;
	year: number;
	status?: string;
	doi?: string;
	note?: string;
	links?: PubLink[];
	/** Slug of the related project write-up in src/content/projects. */
	project?: string;
	/** Shown in "Selected publications" on the home page. */
	selected?: boolean;
}

/** How Kooshan appears in author lists (bolded on the site). */
export const ME = 'K. Amini';

export const publications: Publication[] = [
	{
		id: 'nhr-2026',
		type: 'journal',
		title:
			'Evolving threats: Understanding the coupled impact of sea level and land-cover changes on hurricane-induced debris risk',
		authors: ['K. Amini', 'M. M. Meads', 'J. E. Padgett', 'W. Highfield', 'C. Gonzalez-Dueñas', 'B. Pachev', 'C. Dawson'],
		venue: 'ASCE Natural Hazards Review',
		year: 2026,
		status: 'In press',
		links: [
			{ label: 'Code', href: 'https://github.com/Kooshan1/hurricane-debris-projection-framework-2026', kind: 'code' },
			{ label: 'Data', href: 'https://doi.org/10.17603/ds2-s6ha-b807', kind: 'data' },
		],
		project: 'debris-risk-sea-level-rise',
		selected: true,
	},
	{
		id: 'ijdrr-2026',
		type: 'journal',
		title:
			'Integrated decision-support framework for enhancing coastal community resilience against hurricane-induced hazards',
		authors: [
			'K. Amini',
			'T. Palit',
			'A. L. Beck',
			'J. Patil',
			'T. Lu',
			'H. Sen Gupta',
			'J. E. Padgett',
			'Y. M. Darestani',
			'A. D. González',
			'H. Cutler',
			'L. Dueñas-Osorio',
			'O. M. Nofal',
			'J. W. van de Lindt',
			'N. Rosenheim',
			'E. Sutley',
			'E. J. Cha',
		],
		venue: 'International Journal of Disaster Risk Reduction',
		details: '140, 106136',
		year: 2026,
		doi: '10.1016/j.ijdrr.2026.106136',
		note: 'Open access',
		links: [{ label: 'Code', href: 'https://github.com/Kooshan1/galveston-resilience-decision-support-2025', kind: 'code' }],
		project: 'galveston-decision-support',
		selected: true,
	},
	{
		id: 'cacaie-2025',
		type: 'journal',
		title: 'Debris segmentation using post-hurricane aerial imagery',
		authors: ['K. Amini*', 'Y. Liu*', 'J. E. Padgett', 'G. Balakrishnan', 'A. Veeraraghavan'],
		venue: 'Computer-Aided Civil and Infrastructure Engineering',
		details: '40(25), 4116–4131',
		year: 2025,
		doi: '10.1111/mice.70033',
		note: '*Equal contribution',
		links: [
			{ label: 'Preprint', href: 'https://arxiv.org/abs/2504.12542', kind: 'preprint' },
			{ label: 'Code', href: 'https://github.com/Way-Yuhao/CLIPSeg-debris', kind: 'code' },
			{ label: 'Model', href: 'https://huggingface.co/YuhaoL/CLIPSeg-debris', kind: 'model' },
			{ label: 'Data', href: 'https://doi.org/10.17603/ds2-jvps-2n95', kind: 'data' },
		],
		project: 'clipseg-debris',
		selected: true,
	},
	{
		id: 'ress-2023',
		type: 'journal',
		title: 'Probabilistic risk assessment of hurricane-induced debris impacts on coastal transportation infrastructure',
		authors: ['K. Amini', 'J. E. Padgett'],
		venue: 'Reliability Engineering & System Safety',
		details: '240, 109579',
		year: 2023,
		doi: '10.1016/j.ress.2023.109579',
		selected: true,
	},
	{
		id: 'rcs-2023',
		type: 'journal',
		title: 'Multi-hazard socio-physical resilience assessment of hurricane-induced hazards on coastal communities',
		authors: ['O. M. Nofal', 'K. Amini', 'J. E. Padgett', 'J. W. van de Lindt'],
		etAl: true,
		venue: 'Resilient Cities and Structures',
		details: '2(2), 67–81',
		year: 2023,
		doi: '10.1016/j.rcns.2023.07.003',
	},
	{
		id: 'debrisheightnet-2026',
		type: 'preprint',
		title: 'Rapid debris-volume estimation from post-hurricane aerial imagery',
		authors: ['K. Amini', 'J. E. Padgett', 'G. Balakrishnan'],
		venue: 'arXiv:2608.17165',
		year: 2026,
		status: 'Under review at ISPRS Journal of Photogrammetry and Remote Sensing',
		doi: '10.48550/arXiv.2608.17165',
		links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2608.17165', kind: 'preprint' }],
		project: 'debrisheightnet',
		selected: true,
	},
	{
		id: 'icossar-2025',
		type: 'conference',
		title: 'Integrated framework for hurricane-induced debris detection and prediction: Enhancing coastal resilience',
		authors: ['K. Amini', 'Y. Liu', 'J. E. Padgett', 'G. Balakrishnan', 'A. Veeraraghavan'],
		venue: '14th International Conference on Structural Safety & Reliability (ICOSSAR 2025)',
		year: 2025,
		doi: '10.23967/icossar.2025.022',
	},
	{
		id: 'icasp14-2023',
		type: 'conference',
		title: 'Probabilistic modeling of hurricane-induced debris impacts for coastal community resilience analysis',
		authors: ['K. Amini', 'J. E. Padgett'],
		venue: '14th International Conference on Applications of Statistics and Probability in Civil Engineering (ICASP14)',
		year: 2023,
	},
];

export interface Artifact {
	/** Matches a key in citations.ts when the item has citations. */
	id?: string;
	title: string;
	kind: string;
	host: string;
	year?: number;
	note?: string;
	links?: PubLink[];
}

export const artifacts: Artifact[] = [
	{
		title: 'Hurricane-induced debris segmentation dataset using aerial imagery',
		kind: 'Dataset',
		host: 'NHERI DesignSafe · PRJ-6029',
		note: 'First author',
		links: [{ label: 'Dataset', href: 'https://doi.org/10.17603/ds2-jvps-2n95', kind: 'data' }],
	},
	{
		title: 'CLIPSeg-debris code and model weights',
		kind: 'Model',
		host: 'GitHub · Hugging Face',
		note: 'Co-developed',
		links: [
			{ label: 'Code', href: 'https://github.com/Way-Yuhao/CLIPSeg-debris', kind: 'code' },
			{ label: 'Weights', href: 'https://huggingface.co/YuhaoL/CLIPSeg-debris', kind: 'model' },
		],
	},
	{
		title: 'Electric power network recovery analysis for IN-CORE',
		kind: 'Open source',
		host: 'NCSA IN-CORE · pyincore-incubator',
		year: 2025,
		note: 'Merged July 2025 (+1,417 lines)',
		links: [{ label: 'Pull request', href: 'https://github.com/IN-CORE/pyincore-incubator/pull/21', kind: 'pr' }],
	},
	{
		title: 'Evolving Threats: hurricane debris projection framework',
		kind: 'Code & data',
		host: 'GitHub · NHERI DesignSafe',
		year: 2026,
		links: [
			{ label: 'Code', href: 'https://github.com/Kooshan1/hurricane-debris-projection-framework-2026', kind: 'code' },
			{ label: 'Data', href: 'https://doi.org/10.17603/ds2-s6ha-b807', kind: 'data' },
		],
	},
	{
		title: 'Galveston resilience decision-support framework',
		kind: 'Code',
		host: 'GitHub',
		links: [{ label: 'Code', href: 'https://github.com/Kooshan1/galveston-resilience-decision-support-2025', kind: 'code' }],
	},
	{
		title: 'Galveston testbed: multi-hazard socio-physical datasets for coastal community resilience assessment',
		kind: 'Dataset',
		host: 'NHERI DesignSafe · PRJ-4527',
		year: 2026,
	},
	{
		id: 'power-network-data-2022',
		title: 'Galveston Island electric power network data',
		kind: 'Dataset',
		host: 'NHERI DesignSafe · PRJ-3550',
		year: 2022,
		note: 'Third author',
		links: [{ label: 'Dataset', href: 'https://doi.org/10.17603/ds2-j1fe-b390', kind: 'data' }],
	},
];
