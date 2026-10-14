export type InlinePart = string | { text: string; href: string };

/** Split text with Markdown-style links ("see [label](url)") into plain strings and link parts. */
export function parseLinks(input: string): InlinePart[] {
	const parts: InlinePart[] = [];
	let last = 0;
	for (const match of input.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
		const start = match.index ?? 0;
		if (start > last) parts.push(input.slice(last, start));
		parts.push({ text: match[1], href: match[2] });
		last = start + match[0].length;
	}
	if (last < input.length) parts.push(input.slice(last));
	return parts;
}
