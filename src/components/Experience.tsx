type Role = {
	company: string;
	title: string;
	period: string;
	summary: string;
	highlights: string[];
};

// Update periods/highlights as things change.
const roles: Role[] = [
	{
		company: "Inspire11",
		title: "Senior Software Engineer",
		period: "Current",
		summary:
			"Build and ship tailored software for clients of a global consulting firm, owning features across the stack.",
		highlights: [
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
			"Design, build, and operate my own products end to end — from native macOS/iOS apps to a full streaming platform.",
		highlights: [
			"Tether — a Swift menu-bar app that locks/unlocks the Mac over BLE proximity",
			"iPlayuListen — React 19 SPA, Go API, and a Python AI service for in-browser remixing",
			"Run the full lifecycle: design, implementation, CI/CD, and Kubernetes deploys",
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
