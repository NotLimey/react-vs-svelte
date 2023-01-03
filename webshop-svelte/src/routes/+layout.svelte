<script lang="ts">
	import Container from "$components/Container.svelte";
	import Header from "$components/Header.svelte";
	import { initCart } from "$stores/cart";
	import { products } from '$stores/store';
	import { onMount } from "svelte";
	import "../app.css";
	import type { LayoutData } from './$types';

    export let data: LayoutData;
    products.set(data.products);

    onMount(() => {
        initCart();
    });
</script>

<svelte:head>
    <title>{data.seo.title}</title>
    <meta name="description" content={data.seo.description} />
</svelte:head>

<Header />
<Container classes="mt-24">
    <slot />
</Container>