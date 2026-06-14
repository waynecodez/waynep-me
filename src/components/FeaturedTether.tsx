import { LockIcon, ShieldIcon, SignalIcon } from "./icons";

const states = [
	{
		name: "Present",
		desc: "Connected with a healthy signal. You're at the desk — nothing happens.",
	},
	{
		name: "Leaving",
		desc: "Signal drops below threshold. A sticky grace timer starts so a brief dip never locks.",
	},
	{
		name: "Away",
		desc: "Low signal held through the grace window, or range was lost while connected. The Mac locks.",
	},
];

const pillars = [
	{
		icon: SignalIcon,
		title: "Duration, not just signal",
		body: "A desk signal fluctuates as much as walking a few feet away. Tether discriminates on how long the signal stays low — brief dips recover, sustained low locks.",
	},
	{
		icon: ShieldIcon,
		title: "Paired, forward-secret, replay-proof",
		body: "Each device holds a non-extractable Secure Enclave key. You pair once by comparing a 6-digit code, then every lock/unlock rides an encrypted, replay-proof session.",
	},
	{
		icon: LockIcon,
		title: "Conservative by default",
		body: "Tether only acts while genuinely connected, and returning just wakes the display. Auto-typing your password is opt-in and gated by a live proximity check.",
	},
];

function ProximityVisual() {
	return (
		<div className="relative grid aspect-square w-full max-w-xs place-items-center self-center">
			<div
				aria-hidden
				className="absolute h-24 w-24 rounded-full border border-accent/40 animate-pulse-ring"
			/>
			<div
				aria-hidden
				className="absolute h-24 w-24 rounded-full border border-accent/40 animate-pulse-ring"
				style={{ animationDelay: "1.2s" }}
			/>
			<div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-accent to-accent-deep text-white shadow-lg shadow-accent/30">
				<SignalIcon width={32} height={32} />
			</div>
		</div>
	);
}

export function FeaturedTether() {
	return (
		<section
			id="tether"
			className="scroll-mt-16 border-b border-zinc-200/60 py-24 dark:border-zinc-800/60"
		>
			<div className="container-narrow">
				<p className="section-label">Featured</p>

				<div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
					<div>
						<div className="flex items-center gap-3">
							<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
								Tether
							</h2>
							<span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-deep dark:text-accent-soft">
								macOS · BLE
							</span>
						</div>
						<p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
							Locks your Mac when your iPhone leaves the room and wakes it when
							you return — by tracking the phone over Bluetooth Low Energy. A
							tiny beacon app gives Tether a stable target so it keeps working
							despite iOS rotating the phone&apos;s Bluetooth address every ~15
							minutes.
						</p>
					</div>
					<ProximityVisual />
				</div>

				<div className="mt-14">
					<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
						The proximity state machine
					</h3>
					<ol className="mt-4 grid gap-4 sm:grid-cols-3">
						{states.map((state, i) => (
							<li
								key={state.name}
								className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40"
							>
								<div className="mb-2 flex items-center gap-2">
									<span className="font-mono text-xs text-accent-deep dark:text-accent-soft">
										0{i + 1}
									</span>
									<span className="font-medium">{state.name}</span>
								</div>
								<p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
									{state.desc}
								</p>
							</li>
						))}
					</ol>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-3">
					{pillars.map((pillar) => (
						<div
							key={pillar.title}
							className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
						>
							<pillar.icon
								width={22}
								height={22}
								className="mb-3 text-accent-deep dark:text-accent-soft"
							/>
							<h4 className="font-medium">{pillar.title}</h4>
							<p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
								{pillar.body}
							</p>
						</div>
					))}
				</div>

				<p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-500">
					Built in Swift as a menu-bar app, with a pure, test-driven proximity
					engine at its core and a minimal iOS beacon that advertises a constant
					service UUID. Modeled on techniques from the open-source BLEUnlock.
				</p>
			</div>
		</section>
	);
}
