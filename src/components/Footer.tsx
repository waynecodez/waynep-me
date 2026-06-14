export function Footer() {
	return (
		<footer className="border-t border-zinc-200/60 py-10 dark:border-zinc-800/60">
			<div className="container-narrow flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
				<span className="font-mono">
					wayne<span className="text-accent">.</span>p
				</span>
				<span>Built with React, Vite &amp; Tailwind. Hosted on Cloudflare Pages.</span>
			</div>
		</footer>
	);
}
