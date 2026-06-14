import { GithubIcon, MailIcon } from "./icons";

// Edit these in one place.
const EMAIL = "mrwaynerp@gmail.com";
const SOCIALS = [
	{ label: "GitHub", href: "https://github.com/waynecodez", icon: GithubIcon },
];

export function Contact() {
	return (
		<section id="contact" className="scroll-mt-16 py-24">
			<div className="container-narrow">
				<div className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-10 dark:border-zinc-800 dark:from-zinc-900/60 dark:to-zinc-950 sm:p-14">
					<p className="section-label">Contact</p>
					<h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
						Have something to build, or want to talk Tether?
					</h2>
					<p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
						The fastest way to reach me is email. I&apos;m open to interesting
						work and collaborations.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-3">
						<a
							href={`mailto:${EMAIL}`}
							className="inline-flex items-center gap-2 rounded-xl bg-accent-deep px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
						>
							<MailIcon />
							{EMAIL}
						</a>
						{SOCIALS.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
							>
								<social.icon />
								{social.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
