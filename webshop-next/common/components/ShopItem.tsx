import { FC } from 'react';
import useCart from '../hooks/useCart';
import { ShopItemType } from '../types';

interface ShopItemProps {
	item: ShopItemType;
	index: number;
}

const ShopItem: FC<ShopItemProps> = ({ index, item }) => {
	const { addToCart } = useCart();
	return (
		<div
			id={'shopitem-' + item._id}
			className='w-full flex flex-col border border-transparent hover:bg-gray-50 transition-colors'
		>
			<img
				src={item.image}
				alt={item.name}
				className='w-full h-48 object-contain'
			/>
			<div className='p-2'>
				<p className='text-lg font-medium mb-1'>{item.name}</p>
				<p className='mb-3'>{item.description}</p>
				<p className='text-right'>NOK {item.price},-</p>
				<button
					className='bg-black w-full py-1.5 px-3 text-white mt-3 hover:bg-black/80'
					onClick={() => addToCart(item)}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ShopItem;
