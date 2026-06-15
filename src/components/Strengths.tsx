import { CodeIcon, CompassIcon, LayersIcon, WrenchIcon } from "./icons";

const strengths = [
	{
		icon: CompassIcon,
		title: "Technical leadership & architecture",
		body: "I lead the technical direction on client engagements across teams of 5 to 30 engineers — setting the architecture, making the hard calls, and unblocking the team. I set the standard the rest of the codebase is built against.",
	},
	{
		icon: LayersIcon,
		title: "End-to-end delivery",
		body: "I take features from a blank repo to production — UI, API, data, and deploy — so work ships instead of stalling on handoffs. Docker, Kubernetes, and CI/CD mean it lands reliably and stays up.",
	},
	{
		icon: CodeIcon,
		title: "Polyglot range",
		body: "TypeScript, Go, Swift, Rust, Python. I go where the problem is — frontend, backend, native, or infrastructure — and ramp fast in an unfamiliar stack instead of waiting for the right specialist.",
	},
	{
		icon: WrenchIcon,
		title: "Force-multiplier tooling",
		body: "I build the dashboards, CLIs, and libraries that make the whole team faster — an AI deploy control panel, an embeddable Kubernetes dashboard, shared component libraries. Leverage, not just output.",
	},
];

export function Strengths() {
	return (
		<section
			id="strengths"
			className="scroll-mt-16 border-b border-zinc-200/60 py-24 dark:border-zinc-800/60"
		>
			<div className="container-narrow">
				<p className="section-label">What I bring</p>
				<h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
					Engineering that moves the whole product — and the team — forward.
				</h2>
				<p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
					How I make an impact wherever I land.
				</p>

				<div className="mt-12 grid gap-5 sm:grid-cols-2">
					{strengths.map((s) => (
						<div
							key={s.title}
							className="rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-accent/50 dark:border-zinc-800 dark:hover:border-accent/50"
						>
							<div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent-deep dark:text-accent-soft">
								<s.icon width={22} height={22} />
							</div>
							<h3 className="text-lg font-medium">{s.title}</h3>
							<p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
								{s.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
