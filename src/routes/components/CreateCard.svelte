<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import card from '$lib/images/card.svg';
</script>

<div class="grid place-items-center gap-3">
	<div class="flex gap-2">
		<Button type="secondary">Thẻ hồ sơ</Button>
		<Button type="secondary">Thẻ thư viện</Button>
	</div>
	<img src={card} alt="card" />
	<Button type="primary">Thêm thẻ</Button>
</div>
