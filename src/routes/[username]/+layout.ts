import type { ProfileResponse, UserGalleriesReponse } from '$lib/types.js';
import { api } from '$lib/utils.js';
import { error } from '@sveltejs/kit';

const getGalleries = async (fetch: typeof globalThis.fetch, username: string) => {
	const galleries = (await api.get(fetch, `users/galleries/${username}`)) as UserGalleriesReponse;
	if (!galleries.result) error(404, 'User not found!!');
	return galleries.result.data.gals;
};

const getProfile = async (fetch: typeof globalThis.fetch, username: string) => {
	const profile = (await api.get(fetch, `users/profile/${username}`)) as ProfileResponse;
	if (!profile.result) error(404, 'User not found!!');
	return profile.result.data;
};

export async function load({ fetch, params }) {
	return {
		gallery: await getGalleries(fetch, params.username),
		profile: await getProfile(fetch, params.username)
	};
}
