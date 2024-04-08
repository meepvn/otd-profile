import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const token = cookies.get('auth-token');
	if (!token) throw redirect(304, '/');
	// TODO
	return {
		token
	};
}
