import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Strengths } from "./components/Strengths";
import { useTheme } from "./hooks/useTheme";

export default function App() {
	const { theme, toggle } = useTheme();

	return (
		<div className="min-h-screen">
			<Nav theme={theme} onToggleTheme={toggle} />
			<main>
				<Hero />
				<Strengths />
				<Experience />
				<Projects />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
