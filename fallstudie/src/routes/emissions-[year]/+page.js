/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const year = params.year;

	const res = await fetch(`/data/${year}.json`);
	const rows = await res.json();

	return { rows, year };
}