<script lang="ts">
	import CreateCard from '$lib/components/CreateCard.svelte';

	const { data } = $props();
	const thumbnails = $derived(
		data.gallery
			.map((gallery) => gallery.galleryThumb)
			.filter((gallery) => gallery.startsWith('https'))
	);
</script>

<CreateCard />
{#each thumbnails as thumbnail}
	<img src={thumbnail} alt="asd" />
{/each}
