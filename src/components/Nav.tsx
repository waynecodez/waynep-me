import { MoonIcon, SunIcon } from "./icons";

type NavProps = {
	theme: "light" | "dark";
	onToggleTheme: () => void;
};

const links = [
	{ label: "Tether", href: "#tether" },
	{ label: "Work", href: "#work" },
	{ label: "Experience", href: "#experience" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact" },
];

export function Nav({ theme, onToggleTheme }: NavProps) {
	return (
		<header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/70">
			<nav className="container-narrow flex h-16 items-center justify-between">
				<a
					href="#top"
					className="font-mono text-sm font-semibold tracking-tight"
				>
					wayne<span className="text-accent">.</span>p
				</a>

				<div className="flex items-center gap-1 sm:gap-2">
					<ul className="mr-1 hidden items-center gap-1 sm:flex">
						{links.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>

					<button
						type="button"
						onClick={onToggleTheme}
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
						className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
					>
						{theme === "dark" ? <SunIcon /> : <MoonIcon />}
					</button>
				</div>
			</nav>
		</header>
	);
}
