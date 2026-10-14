const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const fullDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

function parse(iso: string): Date {
	const [year, month = 1, day = 1] = iso.split('-').map(Number);
	return new Date(Date.UTC(year, month - 1, day));
}

/** "2026-09-17" → "Sep 2026" */
export const formatMonth = (iso: string): string => monthYear.format(parse(iso));

/** "2026-09-17" → "Sep 17, 2026" */
export const formatDate = (iso: string): string => fullDate.format(parse(iso));
