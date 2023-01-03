'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { CartItemType } from '../types';

type CartContextProps = {
	cart: CartItemType[];
	set: Dispatch<SetStateAction<CartItemType[]>>;
};

export const CartContext = createContext<CartContextProps>({
	cart: [],
	set: () => [],
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<CartItemType[]>([]);

	return (
		<CartContext.Provider value={{ cart, set: setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
