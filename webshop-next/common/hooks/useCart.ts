import { useContext, useEffect, useState } from "react";
import { CartContext } from "../providers/CartProvider";
import { ShopItemType } from "../types";

const useCart = (init?: boolean) => {
    const { cart, set } = useContext(CartContext);
    const [hasLoaded, setHasLoaded] = useState(false)

    useEffect(() => {
        if (!init) return;

        const storage = window.localStorage;
        if (!hasLoaded) {
            const _cart = storage.getItem('cart');
            set(_cart ? JSON.parse(_cart) : []);
            setHasLoaded(true);
            return;
        }

        storage.setItem('cart', JSON.stringify(cart));
    }, [init, cart, hasLoaded]);

    const addToCart = (item: ShopItemType) => {
        set((items) => {
            const existing = items.find((x) => x.id === item._id);

            if (existing) {
                existing.amount += 1;
            } else {
                items.push({ id: item._id, amount: 1, item });
            }

            return items;
        });
    }

    const removeFromCart = (id: number) => {
        set((items) => items.filter((item) => item.id !== id));
    }

    const decrement = (id: number) => {
        set((items) => {
            const item = items.find((item) => item.id === id);

            if (item && item.amount > 1) {
                item.amount -= 1;
            }

            return items;
        });
    }

    const increment = (id: number) => {
        set((items) => {
            const item = items.find((item) => item.id === id);

            if (item) {
                item.amount += 1;
            }

            return items;
        });
    }

    return {
        cart,
        addToCart,
        removeFromCart,
        decrement,
        increment
    }
}

export default useCart