import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
				'libre-baskerville': ['Libre Baskerville', 'serif'],
				'geist-mono': ['Geist Mono', 'SF Mono', 'Monaco', 'Consolas', 'monospace'],
				'andale-mono': ['Andale Mono', 'Courier New', 'monospace'],
			},
			letterSpacing: {
				'darker-grotesque': '0.06em',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '0.5rem',
					sm: '1rem',
					lg: '2rem',
				},
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1280px',
				},
			},
		},
	},
	plugins: [],
}
export default config

