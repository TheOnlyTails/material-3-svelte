import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/kit/vite"
import sveltePreprocess from "svelte-preprocess"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer(), cssnano()],
			},
		}),
		vitePreprocess(),
	],

	kit: {
		adapter: adapter(),
	},
}

export default config
