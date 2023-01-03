import { FC } from 'react';

interface ContainerProps {
	classes?: string;
	children?: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ classes, children }) => (
	<div className={'mx-auto max-w-5xl px-5 ' + classes}>{children}</div>
);

export default Container;
