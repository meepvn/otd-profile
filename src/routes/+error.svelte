<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="min-h-dvh bg-system-black p-5">
	<h1 class="text-2xl text-white">{$page.error?.message}</h1>
</div>
