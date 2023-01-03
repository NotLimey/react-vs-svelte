<script lang=ts>
	import {cart} from "$stores/cart";
	import Container from "./Container.svelte";

    let len = 0;
    cart.subscribe((value) => {
        len = value.length;
    });
</script>

<header class="h-20 px-5 bg-black text-white fixed top-0 left-0 w-full">
    <Container classes=" w-full h-full flex items-center justify-between">
        <a href="/" class="text-2xl">Webshop in svelte</a>
        <div class="flex items-center">
            <a href="/cart" class="mr-10 relative">Cart 
                {#if len > 0}
                    <span class="absolute -top-3" id="cart-count">
                        {#if len > 9}
                            <p>+9</p>
                        {:else}
                            <p>{len}</p>
                        {/if}
                    </span>
                {/if}
            </a>
        </div>
    </Container>
</header>