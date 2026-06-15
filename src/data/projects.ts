export type ProjectLink = {
	label: string;
	href: string;
};

export type ProjectCategory =
	| "Developer Tools & Platform"
	| "Native & Desktop"
	| "Mobile & Web"
	| "Libraries";

export type Project = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	tags: string[];
	category: ProjectCategory;
	links?: ProjectLink[];
	status?: string;
};

// Display order of the category groups in the grid.
export const categoryOrder: ProjectCategory[] = [
	"Developer Tools & Platform",
	"Native & Desktop",
	"Mobile & Web",
	"Libraries",
];

// The featured project (Tether) has its own section; these fill the grid.
// Add repo/demo links to any entry via the `links` array.
export const projects: Project[] = [
	{
		id: "forge",
		name: "Forge",
		tagline: "Agentic deploy control panel",
		description:
			"An agentic control panel that wires an AI assistant, GitLab, and Kubernetes together — it proposes a code change, you review it, and it ships the deploy from one place. Published as an embeddable npm package.",
		tags: ["React", "TypeScript", "AI / Agentic", "Kubernetes", "Express"],
		category: "Developer Tools & Platform",
		status: "npm package",
	},
	{
		id: "k8s-dashboard",
		name: "Kubernetes Dashboard",
		tagline: "Embeddable cluster UI",
		description:
			"An enterprise-grade Kubernetes dashboard shipped as a drop-in npm package: a React UI plus an Express server for talking to the cluster, with deployments, pods, and live status.",
		tags: ["React", "Express", "Kubernetes", "TypeScript"],
		category: "Developer Tools & Platform",
		status: "npm package",
	},
	{
		id: "kit",
		name: "Kit",
		tagline: "Developer command center",
		description:
			"A terminal UI inspired by modern coding agents — aliases, services, workflows, and project scaffolding from a single keyboard-driven app.",
		tags: ["TypeScript", "React (Ink)", "CLI"],
		category: "Developer Tools & Platform",
	},
	{
		id: "go-cli",
		name: "CLI",
		tagline: "Workflow automation tool",
		description:
			"A fast command-line tool in Go for automating project and deployment workflows, distributed as a single static binary.",
		tags: ["Go", "CLI"],
		category: "Developer Tools & Platform",
	},
	{
		id: "tether",
		name: "Tether",
		tagline: "Proximity lock for the Mac",
		description:
			"A Swift menu-bar app that locks and unlocks your Mac over Bluetooth proximity, paired with a fixed-UUID iOS beacon and a pure, test-driven state machine that turns noisy signal into a lock decision you can trust.",
		tags: ["Swift", "macOS", "iOS", "BLE"],
		category: "Native & Desktop",
	},
	{
		id: "sidekick",
		name: "Sidekick",
		tagline: "Desktop companion app",
		description:
			"A Tauri desktop app — Rust core, React UI — that rides alongside DJ software, surfacing track context and controls without getting in the way. Native drag-and-drop and a tiny footprint.",
		tags: ["Tauri", "Rust", "React", "TypeScript"],
		category: "Native & Desktop",
	},
	{
		id: "mobile-app",
		name: "Mobile App",
		tagline: "Cross-platform native app",
		description:
			"A React Native app built on Expo and Expo Router, sharing an API client and design language with the web. Native tabs and effects, real auth, and cached data via React Query.",
		tags: ["React Native", "Expo", "React Query", "TypeScript"],
		category: "Mobile & Web",
		status: "In progress",
	},
	{
		id: "streaming-platform",
		name: "Streaming Platform",
		tagline: "Full-stack media product with AI",
		description:
			"A full-stack streaming product: a React 19 SPA, a Go API with an OpenAI-backed assistant, and a Python (PyTorch/Demucs) service for in-browser stem separation. Live rooms, real-time presence over WebSockets, and Kubernetes deploys.",
		tags: ["React 19", "Go", "Python · PyTorch", "OpenAI", "Kubernetes"],
		category: "Mobile & Web",
	},
	{
		id: "react-ui-plugins",
		name: "React UI Plugins",
		tagline: "Plugin-driven component rendering",
		description:
			"A React library that renders UI through a flexible plugin architecture, letting host apps register and compose components at runtime. Published to npm.",
		tags: ["React", "TypeScript", "Vite"],
		category: "Libraries",
		status: "npm package",
	},
	{
		id: "design-system",
		name: "Component Library",
		tagline: "Storybook design system",
		description:
			"A reusable React component library developed and documented in Storybook, with interaction tests and a consistent, themeable design language.",
		tags: ["React", "Storybook", "TypeScript"],
		category: "Libraries",
	},
];
