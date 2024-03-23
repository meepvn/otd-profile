import type { ProfileResponse, UserGalleriesReponse } from '$lib/types.js';
import { api } from '$lib/utils.js';

export async function load({ fetch, params }) {
	const galleriesP = api.get(
		fetch,
		`users/galleries/${params.username}`
	) as Promise<UserGalleriesReponse>;
	const profileP = api.get(fetch, `users/profile/${params.username}`) as Promise<ProfileResponse>;
	const [galleries, profile] = await Promise.all([galleriesP, profileP]);

	return {
		gallery: galleries.result.data.gals,
		profile: profile.result.data
	};
}
