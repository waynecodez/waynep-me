import { ArrowIcon } from "./icons";

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
				<p className="section-label animate-fade-up">Wayne P · Software Engineer</p>
				<h1
					className="max-w-3xl animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
					style={{ animationDelay: "0.05s" }}
				>
					I build products end to end — from native apps to streaming
					infrastructure.
				</h1>
				<p
					className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
					style={{ animationDelay: "0.1s" }}
				>
					Full-stack engineer working across React, Go, Python and Swift.
					Lately I&apos;ve been building <span className="text-zinc-900 dark:text-zinc-100">Tether</span>, a
					proximity-based lock for the Mac, and{" "}
					<span className="text-zinc-900 dark:text-zinc-100">iPlayuListen</span>, a
					social music platform.
				</p>
				<div
					className="mt-10 flex animate-fade-up flex-wrap items-center gap-3"
					style={{ animationDelay: "0.15s" }}
				>
					<a
						href="#tether"
						className="group inline-flex items-center gap-2 rounded-xl bg-accent-deep px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
					>
						See Tether
						<ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
					</a>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
					>
						Get in touch
					</a>
				</div>
			</div>
		</section>
	);
}
