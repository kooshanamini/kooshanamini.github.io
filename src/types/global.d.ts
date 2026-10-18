// Google Analytics' gtag(), defined by the inline snippet in BaseLayout (production builds only).
export {};

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}
