const stack = [
	"React",
	"TypeScript",
	"Go",
	"Python",
	"Swift",
	"Node",
	"Tailwind",
	"PostgreSQL",
	"MongoDB",
	"Kubernetes",
	"Docker",
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
				</div>
				<div className="space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
					<p>
						I&apos;m Wayne — a software engineer who enjoys taking an idea from a
						blank repo to something people actually use. I move comfortably
						between a Swift menu-bar app, a Go service, a Python AI pipeline, and
						a React front end.
					</p>
					<p>
						My favourite problems are the ones that need a clean abstraction and
						a stubborn attention to real-world detail — like turning a noisy
						Bluetooth signal into a lock decision you can trust.
					</p>
					<div className="flex flex-wrap gap-2 pt-2">
						{stack.map((item) => (
							<span
								key={item}
								className="rounded-lg border border-zinc-200 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
