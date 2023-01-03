
import type { CartItemType, ShopItemType } from "$myTypes";
import { writable } from "svelte/store";
import { products } from "./store";

let prods = [] as ShopItemType[];

products.subscribe(p => prods = p);

const cart = writable<CartItemType[]>([]);

const addToCart = (item: ShopItemType) => {
    cart.update((items) => {
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
    cart.update((items) => items.filter((item) => item.id !== id));
}

const decrement = (id: number) => {
    cart.update((items) => {
        const item = items.find((item) => item.id === id);

        if (item && item.amount > 1) {
            item.amount -= 1;
        }

        return items;
    });
}

const increment = (id: number) => {
    cart.update((items) => {
        const item = items.find((item) => item.id === id);

        if (item) {
            item.amount += 1;
        }

        return items;
    });
}

const initCart = async () => {
    // wait for user to be loaded
    let satItems = false;
    const storage = window.localStorage;
    if (!satItems) {
        const _cart = storage.getItem('cart');
        cart.set(_cart ? JSON.parse(_cart) : []);
    }

    cart.subscribe(async (items) => {
        storage.setItem('cart', JSON.stringify(items));
    });
}

export { addToCart, removeFromCart, decrement, increment, initCart, cart };