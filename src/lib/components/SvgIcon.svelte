<script lang="ts">
	import type { IconName } from '$lib/icons/icon';
	type Props = {
		name: IconName;
	};

	const { name }: Props = $props();
	const href = $derived(`/src/lib/icons/${name}.svg#${name}`);
</script>

<img src={href} alt={name} />
