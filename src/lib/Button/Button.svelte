<script lang="ts">
	import { Label } from "$lib"

	export let type: "elevated" | "filled" | "tonal" | "outlined" | "text" = "tonal"

	export let disabled = false

	let className = ""
	export { className as class }
</script>

<button
	class="m3-button {className} button-{type}"
	class:disabled
	class:has-icon={$$slots.icon}
	{...$$restProps}
>
	<slot name="icon" />

	<Label type="label-large">
		<slot />
	</Label>
</button>

<style lang="scss">
	@use "./Button.scss";
</style>
