import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import { ShopItemType } from "../types";

const useCart = () => {
    const { cart, set } = useContext(CartContext);

    const addToCart = (item: ShopItemType) => {
        console.log('addToCart', item)
        let items = [...cart];
        const existing = items.findIndex((x) => x.id === item._id);
        if (existing > -1) {
            items[existing].amount += 1;
        } else {
            items.push({ id: item._id, amount: 1, item });
        }
        set(items);
        localStorage.setItem('cart', JSON.stringify(items));
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