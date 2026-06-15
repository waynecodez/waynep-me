const skillGroups = [
	{
		label: "Core languages",
		items: ["TypeScript", "JavaScript", "Go"],
	},
	{
		label: "Also shipped with",
		items: ["Swift", "Rust", "Python"],
	},
	{
		label: "Frontend",
		items: [
			"React",
			"React Native",
			"Tailwind",
			"Vite",
			"Zustand",
			"React Query",
			"Storybook",
			"Valibot",
		],
	},
	{
		label: "Backend",
		items: [
			"Go · Gin",
			"Node · Express",
			"MongoDB",
			"PostgreSQL",
			"Redis",
			"WebSockets",
			"Auth0",
			"Stripe",
		],
	},
	{
		label: "AI & ML",
		items: [
			"LLM APIs (OpenAI)",
			"Agentic tooling / MCP",
			"PyTorch",
			"Demucs · Transformers",
			"FastAPI",
			"Prompt engineering",
		],
	},
	{
		label: "Native & Desktop",
		items: ["SwiftUI · AppKit", "Tauri", "Expo", "Ink (TUI)", "BLE"],
	},
	{
		label: "Infra & DevOps",
		items: [
			"Docker",
			"Kubernetes",
			"CI/CD (GitLab)",
			"AWS / Spaces",
			"Playwright",
			"Vitest",
		],
	},
];

export function About() {
	return (
		<section
			id="about"
			className="scroll-mt-16 border-b border-zinc-200/60 py-24 dark:border-zinc-800/60"
		>
			<div className="container-narrow grid gap-12 lg:grid-cols-[1fr_1fr]">
				<div>
					<p className="section-label">About</p>
					<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
						A bit about me.
					</h2>
					<div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
						<p>
							I&apos;m Wayne, and I got into this a little sideways — I was ten
							years old, working through my mom&apos;s college CS homework. The
							assignments felt like puzzles, I couldn&apos;t put them down, and I
							never really stopped chasing that feeling. These days it looks like
							taking something from an empty repo all the way to people actually
							using it, and being the person teams lean on for the bigger calls:
							how to shape the architecture, where to mentor, what to do when
							everyone&apos;s stuck.
						</p>
						<p>
							I&apos;m most at home in React, TypeScript, and Go, and I genuinely
							care about the small stuff — code that&apos;s clean enough for the
							next person, systems that don&apos;t fall over, the details users
							never notice until they&apos;re missing.
						</p>
						<p>
							I&apos;m based in Charlotte, NC. When I&apos;m not on client work,
							I&apos;m usually building something of my own — little apps,
							developer tools, the odd open-source project. It scratches an itch,
							and it keeps me sharp for the work I do with teams.
						</p>
					</div>
				</div>

				<div className="space-y-6">
					<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
						Toolkit
					</h3>
					{skillGroups.map((group) => (
						<div key={group.label}>
							<p className="mb-2 text-sm font-medium text-accent-deep dark:text-accent-soft">
								{group.label}
							</p>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item}
										className="rounded-lg border border-zinc-200 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
