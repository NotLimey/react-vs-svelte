'use client';

import { Inter } from '@next/font/google';
import { useContext } from 'react';
import ShopItem from '../common/components/ShopItem';
import { AppContext } from '../common/providers/AppProvider';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const { products } = useContext(AppContext);
	return (
		<div style={inter.style}>
			<h2 className='mt-16 text-3xl font-bold'>My webshop items</h2>
			<div className='grid grid-cols-3 gap-x-8 gap-y-6 my-12'>
				{products.map((item, index) => (
					<ShopItem key={item._id} index={index} item={item} />
				))}
			</div>
		</div>
	);
}
