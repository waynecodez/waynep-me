import {
	CodeIcon,
	CompassIcon,
	LayersIcon,
	RocketIcon,
	SparklesIcon,
	WrenchIcon,
} from "./icons";

const strengths = [
	{
		icon: CompassIcon,
		title: "Leading the technical side",
		body: "On most projects I end up being the person who sets the direction — choosing the architecture, making the call when there isn't an obvious one, and getting people unstuck. I've done that for teams ranging from about 5 to 30 engineers.",
	},
	{
		icon: SparklesIcon,
		title: "Building real AI into products",
		body: "Not demos — things people use. Assistants backed by OpenAI, a Python service running PyTorch and Demucs for audio, and agentic tools that can take a code change all the way from a suggestion to a shipped deploy.",
	},
	{
		icon: LayersIcon,
		title: "Owning it end to end",
		body: "I'm happiest taking something from an empty repo to people actually using it — frontend, backend, database, deploy. I don't need to hand off half of it to get it done.",
	},
	{
		icon: RocketIcon,
		title: "Actually shipping it",
		body: "Writing the code is only half the job. I get things running on Docker and Kubernetes, set up the CI, and make sure it stays up — with a clear way back if something goes wrong.",
	},
	{
		icon: CodeIcon,
		title: "Comfortable across the stack",
		body: "Home base is React, TypeScript, and Go, but I've shipped real Swift, Rust, and Python too. If a project needs me somewhere unfamiliar, I'd rather just learn it than wait around for a specialist.",
	},
	{
		icon: WrenchIcon,
		title: "Tools that make the team faster",
		body: "I like building the unglamorous stuff that quietly speeds everyone up — internal dashboards, CLIs, a shared component library, an agentic deploy panel. The kind of thing that pays off every single day.",
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
					A few things I&apos;m genuinely good at.
				</h2>
				<p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
					Here&apos;s what that looks like day to day.
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
