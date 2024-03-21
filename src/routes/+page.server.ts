const base = 'https://jsonplaceholder.typicode.com/';
type User = {
	id: number;
	email: string;
};
export async function load({ fetch }) {
	const response = await fetch(`${base}/users`);
	const users = (await response.json()) as User[];
	return {
		users
	};
}
