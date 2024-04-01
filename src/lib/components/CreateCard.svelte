<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import card from '$lib/images/card.svg';
</script>

<div class="grid place-items-center gap-3">
	<div class="flex gap-2">
		<Button color="secondary">Thẻ hồ sơ</Button>
		<Button color="secondary">Thẻ thư viện</Button>
	</div>
	<img src={card} alt="card" />
	<Button color="primary">Thêm thẻ</Button>
</div>
