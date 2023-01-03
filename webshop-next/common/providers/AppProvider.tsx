'use client';

import Head from 'next/head';
import { createContext } from 'react';
import { Seo, ShopItemType } from '../types';

export interface AppContextProps {
	products: ShopItemType[];
	seo: Seo;
}

type AppProviderProps = AppContextProps & {
	children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children, products, seo }: AppProviderProps) => (
	<AppContext.Provider value={{ products, seo }}>
		<Head>
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
		</Head>
		{children}
	</AppContext.Provider>
);

export default AppProvider;
