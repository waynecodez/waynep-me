import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { FeaturedTether } from "./components/FeaturedTether";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { useTheme } from "./hooks/useTheme";

export default function App() {
	const { theme, toggle } = useTheme();

	return (
		<div className="min-h-screen">
			<Nav theme={theme} onToggleTheme={toggle} />
			<main>
				<Hero />
				<FeaturedTether />
				<Projects />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
