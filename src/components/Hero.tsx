import { ArrowIcon } from "./icons";

const focus = [
	{ value: "Core stack", label: "React · TypeScript · Go" },
	{ value: "Every surface", label: "Web · Native · Mobile · CLI" },
	{ value: "Cloud-native", label: "Docker · Kubernetes" },
];

export function Hero() {
	return (
		<section
			id="top"
			className="relative overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800/60"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(20,184,166,0.14),transparent_70%)]"
			/>
			<div className="container-narrow py-24 sm:py-32">
				<div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
					</span>
					Wayne Puranda · Software Engineer
				</div>

				<h1
					className="max-w-3xl animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
					style={{ animationDelay: "0.05s" }}
				>
					I build, ship, and lead software across the entire stack.
				</h1>
				<p
					className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
					style={{ animationDelay: "0.1s" }}
				>
					Full-stack engineer — fluent in React, TypeScript and Go, with
					production experience in Swift, Rust and Python. I lead the technical
					direction on client engagements — setting architecture, owning
					delivery from design to production, and building the tooling that makes
					the team around me faster.
				</p>
				<div
					className="mt-10 flex animate-fade-up flex-wrap items-center gap-3"
					style={{ animationDelay: "0.15s" }}
				>
					<a
						href="#strengths"
						className="group inline-flex items-center gap-2 rounded-xl bg-accent-deep px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
					>
						What I bring
						<ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
					</a>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
					>
						Get in touch
					</a>
				</div>

				<dl
					className="mt-16 grid animate-fade-up grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 sm:grid-cols-3"
					style={{ animationDelay: "0.2s" }}
				>
					{focus.map((item) => (
						<div key={item.value} className="bg-white p-5 dark:bg-zinc-950">
							<dt className="text-lg font-semibold tracking-tight">
								{item.value}
							</dt>
							<dd className="mt-1 text-sm text-zinc-500">{item.label}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
