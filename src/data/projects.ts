export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	tags: string[];
	links?: ProjectLink[];
	status?: string;
};

// Placeholder projects — swap these for your own. The featured project
// (Tether) lives in its own section component; these populate the grid.
export const projects: Project[] = [
	{
		id: "realtime-dashboard",
		name: "Realtime Dashboard",
		tagline: "Live analytics interface",
		description:
			"A data dashboard that streams live metrics over WebSockets, with composable charts, filtering, and a fast, accessible UI. Built React-first with a typed Go backend.",
		tags: ["React", "TypeScript", "Go", "WebSockets"],
		status: "Demo",
	},
	{
		id: "rest-api",
		name: "Service API",
		tagline: "Typed backend service",
		description:
			"A production-shaped REST API in Go with PostgreSQL, auth, request validation, and containerized deploys to Kubernetes. Tested end to end with a clean CI pipeline.",
		tags: ["Go", "PostgreSQL", "Docker", "K8s"],
	},
	{
		id: "mobile-app",
		name: "Mobile Companion",
		tagline: "Cross-platform app",
		description:
			"A React Native app sharing a design system and API client with the web. Native tabs, real auth, and offline-aware data fetching — one experience across platforms.",
		tags: ["React Native", "Expo", "TypeScript"],
		status: "In progress",
	},
];
