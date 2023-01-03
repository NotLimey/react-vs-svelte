import { ReactNode, use } from 'react';
import client from '../../lib/client';
import AppProvider, { AppContextProps } from './AppProvider';

const getData = async (): Promise<AppContextProps> => {
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
	};
};

const AppWrapper = ({ children }: { children: ReactNode }) => {
	const { products } = use(getData());
	return <AppProvider products={products}>{children}</AppProvider>;
};

export default AppWrapper;
