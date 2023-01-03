<script lang="ts">
	import { addToCart } from "$stores/cart";
	import type { ShopItemType } from "src/types";
	import { fade, fly } from 'svelte/transition';

    export let item: ShopItemType;
    export let index: number;

    const handleAddToCart = () => {
        addToCart(item);
    }

</script>

<div id={"shopitem-" + item._id} class="w-full flex flex-col border border-transparent hover:bg-gray-50 transition-colors"  in:fly="{{ y: 200, duration: 400 + (index * 50) }}" out:fade="{{duration: 200}}">
    <img src={item.image} alt={item.name} class="w-full h-48 object-contain">
    <div class="p-2">
        <p class="text-lg font-medium mb-1">{item.name}</p>
        <p class="mb-3">{item.description}</p>
        <p class="text-right">NOK {item.price},-</p>
        <button class="bg-black w-full py-1.5 px-3 text-white mt-3 hover:bg-black/80" on:click={handleAddToCart}>Add to cart</button>
    </div>
</div>