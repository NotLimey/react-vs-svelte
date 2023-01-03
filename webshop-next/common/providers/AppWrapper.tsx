import { ReactNode, use } from 'react';
import client from '../../lib/client';
import AppProvider, { AppContextProps } from './AppProvider';

const getData = async (): Promise<AppContextProps> => {
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
		seo,
	};
};

const AppWrapper = ({ children }: { children: ReactNode }) => {
	const { products, seo } = use(getData());
	return (
		<AppProvider products={products} seo={seo}>
			{children}
		</AppProvider>
	);
};

export default AppWrapper;
