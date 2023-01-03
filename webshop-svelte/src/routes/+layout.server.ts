import client from '$lib/client';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {

    const q = `{
        "products": *[_type == "product"] {
            _id,
            name,
            price,
            description,
            "image": image.asset->url
        },
        "seo": *[_id == "seo"][0]
    }`;
    const { products, seo } = await client.fetch(q);

    return {
        products,
        seo
    };
}) satisfies LayoutServerLoad;