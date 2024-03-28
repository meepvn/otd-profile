<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon.svelte';
</script>

<div class="flex min-h-dvh flex-col bg-[#111111]">
	<header class="flex h-14 items-center justify-end px-5">
		<SvgIcon name="user" />
	</header>
	<main class="flex-1">
		<slot />
	</main>
	<footer class="flex items-center gap-3 px-4 text-blue-200">
		<span>Powered by</span>
		<SvgIcon name="logo" />
		<span>
			<sup>TM</sup> 2023
		</span>
	</footer>
</div>
