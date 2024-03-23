<script lang="ts">
	const {
		backgroundColor,
		keyContact,
		linkIcon,
		nameContact
	}: {
		backgroundColor: string;
		keyContact: string;
		linkIcon: string;
		nameContact: string;
	} = $props();
</script>

<div
	class="flex cursor-pointer items-center overflow-hidden rounded-lg"
	style="background-color: {backgroundColor};"
>
	<div
		class={`${keyContact !== 'phone' ? 'bg-white' : 'bg-[#01B634]'} flex h-full items-center py-0.5`}
	>
		<img src={'https://cdn.onthedesk.vn' + linkIcon} alt={nameContact} />
	</div>
	<span class="px-1.5 text-xs">{nameContact}</span>
</div>
