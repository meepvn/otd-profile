export const BASE_URL = 'https://api.onthedesk.vn/api';

const get = async (
	fetch: typeof globalThis.fetch,
	endPoint: string,
	params?: Record<string, string>
) => {
	const q = new URLSearchParams(params);
	const response = await fetch(`${BASE_URL}/${endPoint}?${q}`);
	return await response.json();
};

export const api = {
	get
};
