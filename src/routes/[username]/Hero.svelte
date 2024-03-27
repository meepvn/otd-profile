<script lang="ts">
	import type { Profile } from '$lib/types';

	const { backgrounds, avatar, name, description }: Profile = $props();
</script>

<div class="relative">
	<img src={backgrounds[0]} alt={name} />
	<div class="absolute -bottom-1/3 flex w-full items-end gap-3 px-5">
		<div class="aspect-square w-[100px] rounded-full">
			<img src={avatar} alt={name} class="rounded-full" />
		</div>
		<div class="grid gap-3 pb-3 text-white">
			<h1 class="text-lg font-bold leading-[27px]">{name}</h1>
			<p class="text-xs leading-[18px]">{description}</p>
		</div>
	</div>
</div>
