import { use } from 'react';
import { Seo } from '../common/types';
import client from '../lib/client';

const loadSeo = async () => {
	const q = `*[_id == "seo"][0]`;
	const seo = await client.fetch(q);

	return seo as Seo;
};

export default function Head() {
	const { title, description } = use(loadSeo());
	return (
		<>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<link rel='icon' href='/favicon.ico' />
		</>
	);
}
