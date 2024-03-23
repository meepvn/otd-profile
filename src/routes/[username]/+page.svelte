<script lang="ts">
	import ContactItem from './ContactItem.svelte';
	import GalleryItem from './GalleryItem.svelte';

	const { data } = $props();
	const galleries = $derived(
		data.gallery
			.map((gallery) => ({
				thumbnail: gallery.galleryThumb,
				name: gallery.galleryName,
				imageCount: gallery.galleryImageCount,
				customerName: gallery.customerName
			}))
			.filter((gallery) => gallery.thumbnail?.startsWith('https'))
	);
	const profile = $derived(data.profile);
	const contacts = $derived(profile.contacts);
</script>

<div class="relative">
	<img src={profile.backgrounds[0]} alt={profile.name} />
	<div class="absolute -bottom-1/3 flex w-full items-end gap-3 px-5">
		<div class="aspect-square w-[100px] rounded-full">
			<img src={profile.avatar} alt={profile.name} class="rounded-full" />
		</div>
		<div class="grid gap-3 pb-3 text-white">
			<h1 class="text-lg font-bold leading-[27px]">{profile.name}</h1>
			<p class="text-xs leading-[18px]">{profile.description}</p>
		</div>
	</div>
</div>

<div class="pb-[90px]"></div>

<div class="mx-3 grid gap-3 rounded-[18px] bg-[#1E2530] p-3 text-white">
	{#each contacts as contact}
		<ContactItem {...contact} />
	{/each}
</div>

<div class="pb-6"></div>
<div
	class="mx-3 grid gap-x-3 gap-y-4 rounded-[18px] bg-[#1E2530] p-3 sm:grid-cols-2 md:grid-cols-3"
>
	{#each galleries as gallery}
		<GalleryItem {...gallery} />
	{/each}
</div>
