<script lang="ts">
	import type { MaterialSymbol } from "material-symbols"
	export let icon: MaterialSymbol

	export let family: "outlined" | "rounded" | "sharp" = "outlined"

	export let filled = false
	export let weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 = 400
	export let grade: -25 | 0 | 200 = 0
	export let opticalSize: 20 | 24 | 40 | 48 = 48
</script>

<span
	class="material-symbols-{family}"
	style:font-variation-settings="'FILL' {filled ? 1 : 0}, 'wght' {weight}, 'GRAD' {grade}, 'opsz' {opticalSize}"
	style:color="currentColor"
>
	{icon}
</span>
