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
		items: ["React", "React Native", "Tailwind", "Vite", "Storybook"],
	},
	{
		label: "Backend",
		items: ["Go", "Node · Express", "PostgreSQL", "MongoDB", "WebSockets"],
	},
	{
		label: "Native & Desktop",
		items: ["SwiftUI · AppKit", "Tauri", "Expo", "BLE / CoreBluetooth"],
	},
	{
		label: "Infra & AI",
		items: ["Docker", "Kubernetes", "CI/CD", "AI tooling"],
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
						Engineer who likes the whole stack.
					</h2>
					<div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
						<p>
							I&apos;m Wayne Puranda — a software engineer who enjoys taking an
							idea from a blank repo to something people actually use, and
							owning every layer in between. It also means leading the technical
							direction — shaping architecture, mentoring engineers, and being
							the person the team turns to when something is stuck.
						</p>
						<p>
							I work end to end — intuitive front ends in React and React
							Native, robust services in Go backed by PostgreSQL, and Docker and
							Kubernetes to ship and scale them — and I care about clean
							abstractions, reliable systems, and a stubborn attention to
							real-world detail.
						</p>
						<p>
							Outside of work I design and ship my own products and open-source
							tools, which keeps me close to every part of the craft and feeds
							back into the work I do for teams.
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
