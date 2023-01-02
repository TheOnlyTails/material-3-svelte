<script lang="ts">
	import { Badge, Button, Icon, Label } from "$lib"
</script>

<Label type="headline-large">Buttons</Label>
<Button type="elevated">
	<Icon icon="waving_hand" slot="icon">
		<Badge slot="badge">0</Badge>
	</Icon>
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
