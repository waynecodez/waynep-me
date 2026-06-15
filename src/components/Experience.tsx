type Role = {
	company: string;
	title: string;
	period: string;
	summary: string;
	highlights: string[];
};

// Replace company names, periods, and highlights with your own.
const roles: Role[] = [
	{
		company: "Software Consultancy",
		title: "Senior Software Engineer · Technical Lead",
		period: "Current",
		summary:
			"Deliver production software for clients across the stack and lead the technical direction on most engagements — owning architecture, decisions, and delivery end to end.",
		highlights: [
			"Technical lead across teams of 5–30 engineers: set architecture, made the key technical calls, and unblocked the team",
			"Front-end interfaces in React.js and React Native, componentized with Tailwind and Storybook",
			"Backend services in Go with PostgreSQL data layers",
			"Containerized delivery and orchestration with Docker and Kubernetes",
		],
	},
	{
		company: "Independent",
		title: "Product Engineer",
		period: "Ongoing",
		summary:
			"Design, build, and operate a range of my own products and open tools — native apps, desktop and mobile clients, full-stack web services, and developer tooling.",
		highlights: [
			"Native: Tether (Swift, macOS + iOS, BLE) and a Tauri/Rust desktop companion",
			"Developer tools: an AI deploy control panel, an embeddable Kubernetes dashboard, and CLIs",
			"Web & mobile: React 19 + Go + Python platforms and a React Native (Expo) app",
			"Published React libraries to npm and run the full CI/CD + Kubernetes lifecycle",
		],
	},
];

export function Experience() {
	return (
		<section
			id="experience"
			className="scroll-mt-16 border-b border-zinc-200/60 py-24 dark:border-zinc-800/60"
		>
			<div className="container-narrow">
				<p className="section-label">Experience</p>
				<h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
					Where I&apos;ve been building.
				</h2>

				<ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
					{roles.map((role) => (
						<li
							key={role.company}
							className="grid gap-4 bg-white p-6 dark:bg-zinc-950 sm:grid-cols-[200px_1fr] sm:p-8"
						>
							<div>
								<p className="font-medium">{role.company}</p>
								<p className="text-sm text-accent-deep dark:text-accent-soft">
									{role.title}
								</p>
								<p className="mt-1 font-mono text-xs text-zinc-500">
									{role.period}
								</p>
							</div>
							<div>
								<p className="text-zinc-600 dark:text-zinc-400">
									{role.summary}
								</p>
								<ul className="mt-3 space-y-1.5">
									{role.highlights.map((h) => (
										<li
											key={h}
											className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
										>
											<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
											{h}
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
