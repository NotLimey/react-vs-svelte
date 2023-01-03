'use client';

import { createContext } from 'react';
import { ShopItemType } from '../types';

export interface AppContextProps {
	products: ShopItemType[];
}

type AppProviderProps = AppContextProps & {
	children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children, products }: AppProviderProps) => (
	<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
);

export default AppProvider;
