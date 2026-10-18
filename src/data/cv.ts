// Web CV: education, experience, skills, honors, service, teaching, and leadership.
// Bullets may contain Markdown-style links: [label](url).
import { site } from './site';

const { padgett, chen } = site.advisors;

export interface Entry {
	title: string;
	org: string;
	dates: string;
	summary?: string;
	bullets?: string[];
}

export const education: Entry[] = [
	{
		title: 'Ph.D., Engineering',
		org: 'Rice University',
		dates: '2022 – Expected Dec 2027',
		bullets: [
			'GPA 3.96/4.00',
			`Advisor: [${padgett.fullName}](${padgett.href}); research co-advised with [${chen.fullName}](${chen.href}) (Computer Science)`,
		],
	},
	{ title: 'M.Sc., Engineering', org: 'Sharif University of Technology', dates: '2017 – 2020', bullets: ['GPA 3.42/4.00'] },
	{
		title: 'B.Sc., Engineering',
		org: 'University of Guilan',
		dates: '2013 – 2017',
		bullets: ['GPA 3.88/4.00; ranked 3rd of 80+'],
	},
];

export const experience: Entry[] = [
	{
		title: 'Graduate Research Assistant',
		org: 'Rice University',
		dates: 'Aug 2022 – Present',
		summary:
			'Co-advised by Engineering and Computer Science faculty; research funded by NSF, NASA, NIST, and the Harris County Flood Control District.',
		bullets: [
			'Vision-language segmentation: fine-tuned only the decoder of a frozen CLIP-based model (1.2M of 150M parameters); Dice 0.86 / IoU 0.83 on a hurricane never seen in training vs. 0.54 zero-shot, above DeepLabV3 (0.82) and U-Net (0.79). Co-first author, CACAIE 2025.',
			'Monocular 3D estimation: a 1.1M-parameter head on a frozen Depth Anything V2 backbone, trained on LiDAR–monocular fusion targets; Spearman ρ = 0.87 vs. UAV surveys across 10 regions and 5 hurricanes; within 30% of hauled volume where Hazus and FEMA methods over-predict 4.8× and 2.7×.',
			'VLMs at scale (NASA ROSES): built a 37-stage satellite-imagery pipeline over 2.1 TB; benchmarked 4 open VLMs (damage recall 0.33 → 0.78); served with vLLM (FP8) on 2 GPUs to classify 30,362 road and bridge segments in 3.1 days; early-stop voting cut model calls 27–32% at $0 API cost.',
			'System architecture (NSF OpenSafe.AI): project coordinator and system architect; versioned JSON-Schema interfaces and Model Context Protocol (MCP) modules; Bayesian fusion raised held-out AUC 0.654 → 0.707 in 11 of 11 forecast cycles.',
			'Real-time flood analytics (Harris County Flood Control District): reduced a 99-map scenario library to 29 maps (−71%) with PCA and k-medoids (RMSE 0.27 ft, F1 ≈ 0.95); 6–7× faster validation with CuPy GPU kernels.',
			'Physics-informed learning: a monotonic neural network coupled with sea-level-rise scenarios and 9 × 1,000 Monte Carlo network simulations; projected debris +11–14% and emergency-access loss +9–17% by 2040. ASCE Natural Hazards Review, in press.',
			'Decision support and open source (NIST Center of Excellence): first author of a 16-author study in which a $200M mitigation plan cuts expected losses by $192M; merged a power-network recovery analysis (+1,417 lines) into NCSA’s IN-CORE.',
		],
	},
	{
		title: 'Risk & Resilience Engineering Intern',
		org: 'Arup',
		dates: 'Jun – Aug 2025',
		bullets: [
			'Delivered sea-level-rise adaptation, coastal flood risk, and transportation resilience analyses for technology, finance, energy-agency, and development-bank clients.',
			'Turned unstructured GIS data and project inputs into client-ready analyses, figures, and proposal content under tight deadlines.',
			'Received a full-time Risk & Resilience Engineer offer.',
		],
	},
	{
		title: 'Research Assistant & Software Developer',
		org: 'INSURER, Sharif University of Technology',
		dates: 'Aug 2018 – Jan 2022',
		bullets: [
			'Developed probabilistic models of earthquake-induced social impacts for community resilience analysis.',
			'Software developer on Rtx, a reliability, risk, and resilience analysis platform with a library of probabilistic models.',
			'Supervised 8 field teams in a rapid visual screening survey of 2,000+ municipal buildings.',
		],
	},
];

export const skills: { group: string; items: string[] }[] = [
	{
		group: 'Machine learning & vision',
		items: [
			'PyTorch',
			'PyTorch Lightning',
			'Hugging Face Transformers',
			'CLIP / CLIPSeg',
			'Depth Anything V2',
			'SAM',
			'Semantic segmentation',
			'Monocular depth',
			'VLM prompting & evaluation',
			'scikit-learn',
		],
	},
	{
		group: 'ML systems',
		items: ['vLLM', 'FP8 & 4-bit quantization', 'Multi-GPU inference', 'Weights & Biases', 'GitHub Actions', 'Linux / HPC (TACC)'],
	},
	{
		group: 'Probabilistic modeling',
		items: [
			'Bayesian inference & data fusion',
			'Gaussian processes',
			'Monte Carlo simulation',
			'Random fields',
			'Monotonic neural networks',
			'Interpretability (ALE, PDP, permutation importance)',
			'Multi-objective optimization',
		],
	},
	{
		group: 'Data & geospatial',
		items: [
			'Python',
			'NumPy',
			'pandas',
			'SciPy',
			'GeoPandas',
			'rasterio / GDAL',
			'OpenStreetMap / OSMnx',
			'NetworkX',
			'CuPy',
			'AWS S3',
			'SQL',
			'QGIS / ArcGIS Pro',
			'Label Studio',
		],
	},
	{
		group: 'Software engineering',
		items: ['Config-driven Python packages', 'CLIs', 'YAML', 'JSON Schema', 'MCP servers', 'Git & code review'],
	},
];

export const honors: { year: string; text: string }[] = [
	{ year: '2024', text: 'Selected member, 1st IN-CORE Contributor Cohort (NCSA & NIST Center of Excellence)' },
	{ year: '2023', text: 'Travel Award, NHERI Computational Symposium (NSF NHERI SimCenter)' },
	{ year: '2023', text: 'NVIDIA Deep Learning Institute certificate: Fundamentals of Deep Learning' },
	{ year: '2017', text: 'Top 0.2% (58th of 39,392), national graduate entrance exam in engineering' },
	{ year: '2017', text: 'Ranked 16th nationally, engineering Scientific Olympiad for university students' },
	{ year: '2013', text: 'Top 0.5% (333rd of 100,000+), national university entrance exam' },
];

export const service: string[] = [
	'Journal reviewer: Climatic Change (2026); Natural Hazards and Earth System Sciences (2023–)',
	'Expert novelty assessor, UK Metascience Novelty Indicators Challenge, UK Research and Innovation (2026)',
];

export const teaching: { dates: string; text: string }[] = [
	{ dates: 'Spring 2026', text: 'D2K Research Mentoring Fellow, Rice University: mentored data-science capstone teams' },
	{
		dates: 'Fall 2025',
		text: 'Teaching Assistant, Infrastructure Resilience to Multiple Hazards (graduate course), Rice University',
	},
	{ dates: '2015 – 2016', text: 'Teaching Assistant, Strength of Materials and Road Construction, University of Guilan' },
];

export const leadership: { dates: string; text: string }[] = [
	{ dates: '2026', text: 'Project coordinator, NSF ReDDDoT OpenSafe.AI' },
	{ dates: '2022 – 2024', text: 'Vice President & Representative, departmental Graduate Student Association, Rice University' },
];
