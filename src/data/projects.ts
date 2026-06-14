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

// Edit this list to add or reorder projects. The featured project (Tether)
// lives in its own section component; these populate the projects grid.
export const projects: Project[] = [
	{
		id: "iplayulisten",
		name: "iPlayuListen",
		tagline: "Social music streaming platform",
		description:
			"A full-stack streaming product — React 19 SPA, Go API, and a Python AI service for in-browser stem separation and remixing. Live rooms, real-time presence over WebSockets, and an instant-restore boot that renders from a persisted snapshot.",
		tags: ["React 19", "TypeScript", "Go", "Python", "WebSockets", "K8s"],
		status: "Live",
		links: [{ label: "Visit", href: "https://iplayulisten.com" }],
	},
	{
		id: "ipul-mobile",
		name: "iPlayuListen Mobile",
		tagline: "Native companion app",
		description:
			"The iOS companion to the streaming platform, built with Expo and native tabs. Real auth, a discover feed, and detail pages — kept in lockstep with the web experience.",
		tags: ["Expo", "React Native", "TypeScript"],
		status: "In progress",
	},
	{
		id: "sidekick",
		name: "Sidekick",
		tagline: "Desktop DJ companion",
		description:
			"A lightweight Tauri desktop app that rides alongside your DJ software, surfacing track context and controls without getting in the way.",
		tags: ["Tauri", "Rust", "TypeScript"],
	},
];
