import {
	categoryOrder,
	projects,
	type Project,
	type ProjectCategory,
} from "../data/projects";
import { ArrowIcon } from "./icons";

function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="group flex flex-col rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-accent/50 dark:border-zinc-800 dark:hover:border-accent/50">
			<div className="flex items-start justify-between gap-3">
				<h4 className="text-lg font-medium">{project.name}</h4>
				{project.status && (
					<span className="whitespace-nowrap rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-500 dark:border-zinc-700">
						{project.status}
					</span>
				)}
			</div>
			<p className="mt-1 text-sm text-accent-deep dark:text-accent-soft">
				{project.tagline}
			</p>
			<p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
				{project.description}
			</p>

			<div className="mt-4 flex flex-wrap gap-1.5">
				{project.tags.map((tag) => (
					<span
						key={tag}
						className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800/70 dark:text-zinc-400"
					>
						{tag}
					</span>
				))}
			</div>

			{project.links?.length ? (
				<div className="mt-5 flex flex-wrap gap-4">
					{project.links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							{...(link.href.startsWith("#")
								? {}
								: { target: "_blank", rel: "noreferrer" })}
							className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors hover:text-accent-deep dark:text-zinc-100 dark:hover:text-accent-soft"
						>
							{link.label}
							<ArrowIcon
								width={15}
								height={15}
								className="transition-transform group-hover:translate-x-0.5"
							/>
						</a>
					))}
				</div>
			) : null}
		</article>
	);
}

export function Projects() {
	const grouped = categoryOrder
		.map((category) => ({
			category,
			items: projects.filter((p) => p.category === category),
		}))
		.filter((group) => group.items.length > 0);

	return (
		<section
			id="work"
			className="scroll-mt-16 border-b border-zinc-200/60 py-24 dark:border-zinc-800/60"
		>
			<div className="container-narrow">
				<p className="section-label">Selected work</p>
				<h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
					From native apps and desktop tools to web platforms and libraries.
				</h2>

				<div className="mt-14 space-y-14">
					{grouped.map((group) => (
						<div key={group.category}>
							<div className="mb-5 flex items-center gap-4">
								<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
									{group.category as ProjectCategory}
								</h3>
								<span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
								<span className="font-mono text-xs text-zinc-400">
									{group.items.length}
								</span>
							</div>
							<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
								{group.items.map((project) => (
									<ProjectCard key={project.id} project={project} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
