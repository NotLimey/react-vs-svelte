import useCart from '../hooks/useCart';
import Container from './Container';

const Header = () => {
	const { cart } = useCart();

	return (
		<header className='h-20 px-5 bg-black text-white fixed top-0 left-0 w-full'>
			<Container classes=' w-full h-full flex items-center justify-between'>
				<a href='/' className='text-2xl'>
					Webshop in react
				</a>
				<div className='flex items-center'>
					<a href='/cart' className='mr-10 relative'>
						Cart
						{cart.length > 0 && (
							<span className='absolute -top-3' id='cart-count'>
								{cart.length > 9 ? '9+' : cart.length}
							</span>
						)}
					</a>
				</div>
			</Container>
		</header>
	);
};

export default Header;
