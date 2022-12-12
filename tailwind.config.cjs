/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: 'var(--bg)',
				bg1: 'var(--bg1)',
				bg2: 'var(--bg2)',
				text: 'var(--text)',
				outline: 'var(--outline)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)'
			}
		},
	},
	plugins: [],
}
