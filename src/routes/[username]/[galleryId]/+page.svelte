<script lang="ts">
	const { data } = $props();
	const gallery = $derived(data.selectedGallery);
</script>

<pre class="text-2xl text-white">
    {JSON.stringify(gallery)}
</pre>
