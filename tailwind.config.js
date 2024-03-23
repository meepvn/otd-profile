/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'solid-200': '#1B94D2',
				'bg-solid': '#1E2530',
				'system-black': '#111111'
			},
			opacity: {
				48: '.48',
				64: '.64'
			}
		},
		screens: {
			xs: '320px',
			sm: '425px',
			md: '768px',
			lg: '1024px'
		}
	},
	plugins: []
};
