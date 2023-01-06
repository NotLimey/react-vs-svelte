'use client';

import Btn from '../../common/components/Btn';
import useCart from '../../common/hooks/useCart';

const Page = () => {
	const { cart, decrement, increment, removeFromCart } = useCart();
	return (
		<div className='pt-8'>
			<div className='flex flex-col gap-y-5'>
				{cart.map((item) => (
					<div
						key={item.id}
						className='w-full py-4 px-2 border border-black fade-in-from-top'
					>
						<div className='flex justify-between'>
							<p>{item.item.name}</p>
							<p>NOK {item.item.price.toFixed(2)},-</p>
						</div>
						<div className='flex justify-between'>
							<p>
								<strong>Amount</strong> {item.amount}
							</p>
							<p>
								<strong>Total</strong>{' '}
								{(item.item.price * item.amount).toFixed(2)},-
							</p>
						</div>
						<div className='flex justify-end gap-x-3 pt-4'>
							<button
								onClick={() => removeFromCart(item.id)}
								className='px-6 py-1 bg-red-500 hover:bg-red-600 text-white'
							>
								Remove
							</button>
							<button
								onClick={() => decrement(item.id)}
								className='px-6 py-1 bg-black hover:bg-black/80 text-white'
							>
								-
							</button>
							<button
								onClick={() => increment(item.id)}
								className='px-6 py-1 bg-black hover:bg-black/80 text-white'
							>
								+
							</button>
						</div>
					</div>
				))}
			</div>
			<div className='py-12'>
				<div className='flex justify-end'>
					<Btn>Checkout</Btn>
				</div>
			</div>
		</div>
	);
};

export default Page;
