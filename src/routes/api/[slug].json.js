import { getDoc } from '$lib/process-files';

export async function get({ params }) {
	const doc = await getDoc(params.slug);
	return { body: doc };
}
