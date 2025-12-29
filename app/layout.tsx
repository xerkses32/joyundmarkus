import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/lib/providers'
import { defaultMetadata } from '@/lib/seo'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="de">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

