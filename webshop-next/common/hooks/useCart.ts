import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import { ShopItemType } from "../types";

const useCart = () => {
    const { cart, set } = useContext(CartContext);

    const addToCart = (item: ShopItemType) => {
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

    const removeFromCart = (id: string) => {
        set((items) => items.filter((item) => item.id !== id));
    }

    const decrement = (id: string) => {
        let items = [...cart];
        const existing = items.findIndex((x) => x.id === id);
        if (existing > -1) {
            if (items[existing].amount === 1) {
                items = items.filter((x) => x.id !== id);
            } else {
                items[existing].amount -= 1;
            }
        }
        set(items);
    }

    const increment = (id: string) => {
        let items = [...cart];
        const existing = items.findIndex((x) => x.id === id);
        if (existing > -1) {
            items[existing].amount += 1;
        }
        set(items);
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