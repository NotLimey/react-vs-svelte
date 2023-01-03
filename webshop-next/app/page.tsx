import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div style={inter.style}>
			<p>This is a page</p>
		</div>
	);
}
