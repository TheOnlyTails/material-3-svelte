<script lang="ts">
  import "$lib/theme.css"
  import "greset"
</script>

<slot />

<style lang="scss" global>
  body {
    display: flex;
		gap: 1rem;
    justify-content: center;
    align-items: center;
		padding: 1rem;
    background-color: var(--m3-background);
		color: var(--m3-on-background);
  }
</style>
