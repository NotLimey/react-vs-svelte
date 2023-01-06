'use client';

import { createContext } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { ShopItemType } from '../types';
import CartProvider from './CartProvider';

export interface AppContextProps {
	products: ShopItemType[];
}

type AppProviderProps = AppContextProps & {
	children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children, products }: AppProviderProps) => (
	<AppContext.Provider value={{ products }}>
		<CartProvider>
			<Header />
			<Container classes='mt-20'>{children}</Container>
		</CartProvider>
	</AppContext.Provider>
);

export default AppProvider;
