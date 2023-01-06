
export type ShopItemType = {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export type CartItemType = {
    item: ShopItemType;
    id: string;
    amount: number;
}

export type AccountSettings = {
    saveToBasket: boolean;
}

export type Seo = {
    title: string;
    description: string;
}