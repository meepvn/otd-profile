<script lang="ts">
	import type { IconName } from '$lib/icon';
	type Props = {
		name: IconName;
	};

	const { name }: Props = $props();
	const href = $derived(`/icons/${name}.svg`);
</script>

<img src={href} alt={name} />
