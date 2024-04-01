<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	type Color = 'primary' | 'secondary';
	type Props = HTMLButtonAttributes & {
		color: Color;
	};
	let { color = 'primary', ...props }: Props = $props();
</script>

<button
	data-color={color}
	{...props}
	class="rounded-lg bg-gradient-to-b px-4 py-3 text-white data-[color=primary]:from-[#00D4FC] data-[color=secondary]:from-white/15 data-[color=primary]:to-[#1955B6] data-[color=secondary]:to-white/5"
>
	<slot />
</button>
