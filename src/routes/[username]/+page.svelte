<script lang="ts">
	import ContactItem from './ContactItem.svelte';
	import GalleryItem from './GalleryItem.svelte';
	import Hero from './Hero.svelte';

	const { data } = $props();
	const galleries = $derived(
		data.gallery
			.map((gallery) => ({
				thumbnail: gallery.galleryThumb,
				name: gallery.galleryName,
				imageCount: gallery.galleryImageCount,
				customerName: gallery.customerName,
				id: gallery.galleryId
			}))
			.filter((gallery) => gallery.thumbnail?.startsWith('https'))
	);
	const profile = $derived(data.profile);
	const contacts = $derived(profile.contacts);
</script>

<svelte:head>
	<title>{profile.name}</title>
</svelte:head>
<Hero {...profile} />

<div class="mx-3 grid gap-3 rounded-[18px] bg-[#1E2530] p-3 text-white">
	{#each contacts as contact (contact.id)}
		<ContactItem {...contact} username={profile.name} />
	{/each}
</div>

<div class="pb-6"></div>
<div
	class="mx-3 grid gap-x-3 gap-y-4 rounded-[18px] bg-[#1E2530] p-3 sm:grid-cols-2 md:grid-cols-3"
>
	{#each galleries as gallery (gallery.id)}
		<GalleryItem {...gallery} username={profile.shortcut} />
	{/each}
</div>
