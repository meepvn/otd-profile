<script lang="ts">
	import stack from '$lib/icons/stack.svg';
	type Props = { thumbnail: string; name: string; imageCount: number; customerName: string }
	const {
		customerName,
		imageCount,
		name,
		thumbnail
	}:Props  = $props();
</script>

<div class="grid gap-3 text-xs text-white">
	<div class="relative">
		<img src={thumbnail} alt={name} class="aspect-square rounded-[18px]" />
		<div
			class="from-system-black/64 to-system-black/48 absolute bottom-0 left-0 flex h-8 w-[66px] items-center gap-1 rounded-bl-[18px] rounded-tr-[18px] bg-gradient-to-b px-2"
		>
			<img src={stack} alt="stack-icon" />
			<span>
				{imageCount}
			</span>
		</div>
	</div>
	<p class="text-lg font-bold leading-[27px]">{name}</p>
	<span class="text-solid-200 text-xs leading-[18px]">{customerName}</span>
</div>
