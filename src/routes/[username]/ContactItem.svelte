<script lang="ts">
	import { createVcf } from '$lib/actions/createVcf';
	type Props = {
		backgroundColor: string;
		keyContact: string;
		linkIcon: string;
		nameContact: string;
		infoDetail: string;
		username: string;
	};
	const { backgroundColor, keyContact, linkIcon, nameContact, infoDetail, username }: Props =
		$props();
	const contactType = $derived(keyContact === 'phone' ? 'phone' : 'other');
</script>

<button
	class="flex cursor-pointer items-center overflow-hidden rounded-lg"
	style="background-color: {backgroundColor};"
	use:createVcf={{
		contact: infoDetail,
		name: username,
		type: keyContact
	}}
>
	<div
		data-contact-type={contactType}
		class="flex h-full items-center py-0.5 data-[contact-type=other]:bg-white data-[contact-type=phone]:bg-[#01B634]"
	>
		<img src={'https://cdn.onthedesk.vn' + linkIcon} alt={nameContact} />
	</div>
	<span class="px-1.5 text-xs">{nameContact}</span>
</button>
