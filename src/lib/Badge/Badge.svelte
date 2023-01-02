<script lang="ts">
	import { Label } from "$lib"
</script>

<span class="m3-badge" class:small={!$$slots.default}>
	<Label type="label-small"><slot /></Label>
</span>

<style lang="scss">
  .m3-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--m3-error);
    color: var(--m3-on-error);
    border-radius: var(--m3-shape-full);

    &:not(.small) {
      block-size: 16px;
      min-inline-size: 16px;
      max-inline-size: 34px;
      padding: 4px;
    }

    &.small {
      inline-size: 6px;
      block-size: 6px;
      border-radius: 3px;
    }
  }
</style>
