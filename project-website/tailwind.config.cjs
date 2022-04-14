const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  '2xs': '355px',
		  'xs': '475px',
		  ...defaultTheme.screens,
		},
		extend: {},
	},
	plugins: [],
}
