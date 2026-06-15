import type { SVGProps } from "react";

const base = {
	width: 18,
	height: 18,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
};

export function SunIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
		</svg>
	);
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M5 12h14M13 6l6 6-6 6" />
		</svg>
	);
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<rect x="3" y="5" width="18" height="14" rx="2" />
			<path d="m3 7 9 6 9-6" />
		</svg>
	);
}

export function GitlabIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.74.74 0 0 0 .31-.83z" />
		</svg>
	);
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</svg>
	);
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<rect x="4" y="11" width="16" height="10" rx="2" />
			<path d="M8 11V7a4 4 0 0 1 8 0v4" />
		</svg>
	);
}

export function SignalIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
		</svg>
	);
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			<path d="m9 12 2 2 4-4" />
		</svg>
	);
}

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="12" r="9" />
			<path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
		</svg>
	);
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="m12 2 9 5-9 5-9-5 9-5z" />
			<path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
		</svg>
	);
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
		</svg>
	);
}

export function WrenchIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.4-2.4 2.6-2.6z" />
		</svg>
	);
}

export function SparklesIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
			<path d="M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
		</svg>
	);
}

export function RocketIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M5 15c-1.5 1-2 5-2 5s4-.5 5-2a2.8 2.8 0 0 0-3-3z" />
			<path d="M9 13l-2-2c1-4 4-8 9-8 0 5-4 8-8 9l-2-2" />
			<path d="M14 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" />
		</svg>
	);
}
