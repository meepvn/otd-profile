import type { Action } from 'svelte/action';

type CreateVcfAction = Action<
	HTMLElement,
	{
		type: string;
		contact: string;
		name: string;
	}
>;

export const createVcf: CreateVcfAction = (element, { contact, type, name }) => {
	if (type !== 'phone') return;
	const handleOnClick = () => {
		const vcard =
			'BEGIN:VCARD\nVERSION:4.0\nFN:' + name + '\nTEL;TYPE=work,voice:' + contact + '\nEND:VCARD';
		const blob = new Blob([vcard], { type: 'text/vcard' });
		const url = URL.createObjectURL(blob);
		const newLink = document.createElement('a');
		newLink.download = name + '.vcf';
		newLink.textContent = name;
		newLink.href = url;
		newLink.click();
	};
	element.addEventListener('click', handleOnClick);
	return {
		destroy() {
			element.removeEventListener('click', handleOnClick);
		}
	};
};
