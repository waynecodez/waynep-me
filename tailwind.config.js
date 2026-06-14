/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: "#14b8a6",
					soft: "#5eead4",
					deep: "#0f766e",
				},
			},
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"Segoe UI",
					"sans-serif",
				],
				mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
			},
			keyframes: {
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(12px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"pulse-ring": {
					"0%": { transform: "scale(0.8)", opacity: "0.7" },
					"100%": { transform: "scale(2.4)", opacity: "0" },
				},
			},
			animation: {
				"fade-up": "fade-up 0.6s ease-out both",
				"pulse-ring": "pulse-ring 2.4s ease-out infinite",
			},
		},
	},
	plugins: [],
};
