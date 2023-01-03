import client from '$lib/client';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {

    // ...super heavy logic here
    const seo = getSeo();
    const q = `*[_type == "product"] {
        _id,
        name,
        price,
        description,
        "image": image.asset->url
    }`;
    const products = await client.fetch(q);

    return {
        products,
        seo
    };
}) satisfies LayoutServerLoad;

const getSeo = () => ({
    title: 'Inmeta webshop',
    description: 'The best webshop in the world',
})