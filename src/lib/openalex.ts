import { publications } from '../data/publications';

/** Papers with fewer citations than this show no badge. */
const MIN_CITATIONS_SHOWN = 1;

let request: Promise<Map<string, number>> | undefined;

/**
 * Citation counts keyed by lower-case DOI, fetched once per build from the OpenAlex API.
 * A failed request only hides the counts; it never fails the build.
 */
export function getCitationCounts(): Promise<Map<string, number>> {
	request ??= fetchCounts();
	return request;
}

/** The count to display for a DOI, or undefined when it is unknown or too small to show. */
export function citationsFor(counts: Map<string, number>, doi?: string): number | undefined {
	if (!doi) return undefined;
	const n = counts.get(doi.toLowerCase());
	return n !== undefined && n >= MIN_CITATIONS_SHOWN ? n : undefined;
}

/** Sum of all fetched citation counts (0 when OpenAlex was unreachable). */
export function totalCitations(counts: Map<string, number>): number {
	let total = 0;
	for (const n of counts.values()) total += n;
	return total;
}

async function fetchCounts(): Promise<Map<string, number>> {
	const counts = new Map<string, number>();
	const dois = publications.flatMap((p) => (p.doi ? [p.doi.toLowerCase()] : []));
	if (dois.length === 0) return counts;

	const url = `https://api.openalex.org/works?filter=doi:${dois.join('|')}&select=doi,cited_by_count&per-page=50`;
	try {
		const response = await fetch(url, { signal: AbortSignal.timeout(10_000) });
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		const data = (await response.json()) as { results?: { doi?: string | null; cited_by_count?: number }[] };
		for (const work of data.results ?? []) {
			if (!work.doi) continue;
			counts.set(work.doi.replace('https://doi.org/', '').toLowerCase(), work.cited_by_count ?? 0);
		}
	} catch (error) {
		console.warn(`[openalex] citation counts unavailable: ${error instanceof Error ? error.message : String(error)}`);
	}
	return counts;
}
