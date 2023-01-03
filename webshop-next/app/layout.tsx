import { use } from 'react';
import AppProvider from '../common/providers/AppProvider';
import AppWrapper from '../common/providers/AppWrapper';
import client from '../lib/client';
import './globals.css';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<AppWrapper>{children}</AppWrapper>
			</body>
		</html>
	);
}
