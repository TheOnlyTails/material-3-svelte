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
	class="m3-icon material-symbols-{family}"
	style:font-variation-settings="'FILL' {filled ? 1 : 0}, 'wght' {weight}, 'GRAD' {grade}, 'opsz' {opticalSize}"
	style:color="currentColor"
	class:has-badge={$$slots.badge}
>
	{icon}
	<slot name="badge" />
</span>


<style lang="scss">
  .m3-icon.has-badge {
    display: inline-block;
    position: relative;

    :global {
      .m3-badge {
        position: absolute;
        --badge-padding: 12px;
        inset-block-end: var(--badge-padding);
        inset-inline-start: var(--badge-padding);

        &.small {
          --badge-padding: 18px;
        }
      }
    }
  }
</style>
