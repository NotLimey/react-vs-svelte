import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type BtnProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {};

const Btn: FC<BtnProps> = ({ className, ...rest }) => (
	<button
		className={`bg-black text-white py-1.5 px-3 hover:bg-black/80 ${className}`}
		{...rest}
	/>
);

export default Btn;
