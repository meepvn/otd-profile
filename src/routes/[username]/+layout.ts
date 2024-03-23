import type { UserProfileReponse } from '$lib/types.js';
import { api } from '$lib/utils.js';

export async function load({ fetch, params }) {
	const response = (await api.get(
		fetch,
		`users/galleries/${params.username}`
	)) as UserProfileReponse;
	return {
		gallery: response.result.data.gals
	};
}
