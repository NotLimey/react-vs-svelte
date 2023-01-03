'use client';

import { createContext } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import useCart from '../hooks/useCart';
import { ShopItemType } from '../types';

export interface AppContextProps {
	products: ShopItemType[];
}

type AppProviderProps = AppContextProps & {
	children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children, products }: AppProviderProps) => {
	useCart(true);

	return (
		<AppContext.Provider value={{ products }}>
			<Header />
			<Container classes='mt-24'>{children}</Container>
		</AppContext.Provider>
	);
};

export default AppProvider;
