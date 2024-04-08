<script lang="ts">
	const { data } = $props();
	const token = $derived(data.token);
</script>

<h1>Edit profile</h1>
<p>Token: {token}</p>
