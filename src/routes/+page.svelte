<script lang="ts">
	import { Button } from "$lib"
	import Icon from "$lib/Icon/Icon.svelte"
	import Label from "$lib/Label/Label.svelte"
</script>

<Label type="headline-large">Buttons</Label>
<Button type="elevated">
	<Icon icon="waving_hand" slot="icon" />
	Elevated Button
</Button>

<Button type="filled">
	<Icon icon="waving_hand" slot="icon" />
	Filled Button
</Button>

<Button type="tonal">
	<Icon icon="waving_hand" slot="icon" />
	Tonal Button
</Button>

<Button type="outlined">
	<Icon icon="waving_hand" slot="icon" />
	Hello world!
</Button>

<Button type="text">
	<Icon icon="waving_hand" slot="icon" />
	Hello world!
</Button>
