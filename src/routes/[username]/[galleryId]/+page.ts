import { error } from '@sveltejs/kit';

export async function load({ parent, params }) {
	const { gallery: galleries } = await parent();
	const found = galleries.find((gallery) => gallery.galleryId === params.galleryId);
	if (!found) error(404, 'Gallery not found');
	return {
		selectedGallery: found
	};
}
