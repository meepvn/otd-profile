<script lang="ts">
	let { type = 'primary' }: { type: 'primary' | 'secondary' } = $props();
</script>

<button
	class="rounded-lg bg-gradient-to-b px-4 py-3 text-white {type === 'primary'
		? 'from-[#00D4FC] to-[#1955B6]'
		: 'from-white/15 to-white/5'}"
>
	<slot />
</button>
