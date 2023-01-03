'use client';

import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
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
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const cart = localStorage.getItem('cart');
		if (cart) {
			setCart(JSON.parse(cart));
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		if (cart.length > 0) {
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart]);

	if (loading) return <p>Loading..</p>;

	return (
		<CartContext.Provider value={{ cart, set: setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
