<script lang="ts">
	import { fly } from 'svelte/transition';
	import Btn from "$components/Btn.svelte";
	import type { CartItemType } from "$myTypes";
	import { cart, decrement, increment, removeFromCart } from "$stores/cart";
    
    let items: CartItemType[] = [];

    cart.subscribe((value) => {
        items = value;
    });
</script>


<div class="flex flex-col gap-y-5">
    {#each items as item, i}
        <div class="w-full py-4 px-2 border border-black" in:fly="{{ duration: 400 + (i * 100), y: -100}}" out:fly="{{ duration: 200, y:-100 }}">
            <div class="flex justify-between">
                <p>{item.item.name}</p>
                <p>NOK {item.item.price.toLocaleString('nb-NO')},-</p>
            </div>
            <div class="flex justify-between">
                <p><strong>Amount</strong> {item.amount}</p>
                <p><strong>Total</strong> {(item.item.price * item.amount).toLocaleString('nb-NO')},-</p>
            </div>
            <div class="flex justify-end gap-x-3 pt-4">
                <button on:click={() => removeFromCart(item.id)} class="px-6 py-1 bg-red-500 hover:bg-red-600 text-white">Remove</button>
                <button on:click={() => decrement(item.id)} class="px-6 py-1 bg-black hover:bg-black/80 text-white">-</button>
                <button on:click={() => increment(item.id)} class="px-6 py-1 bg-black hover:bg-black/80 text-white">+</button>
            </div>
        </div>
    {/each}
</div>
<div class="py-12">
    <div class="flex justify-end">
        <Btn>
            Checkout
        </Btn>
    </div>
</div>