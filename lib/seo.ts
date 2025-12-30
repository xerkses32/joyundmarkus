import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyundmarkus.de'
const siteName = 'Joy & Markus'
const defaultDescription =
	'Lobpreis Lieder in deutscher Sprache - Christliche Musik von Joy & Markus. Entdecke unsere Lieder auf Spotify, Apple Music und mehr.'

export const defaultMetadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	description: defaultDescription,
	keywords: [
		'Joy & Markus',
		'Christliche Musik',
		'Gospel',
		'Worship',
		'Kirchenmusik',
		'Chordsheets',
		'Spotify',
		'Apple Music',
		'YouTube',
		'Amazon Music',
		'Religiöse Musik',
		'Geistliche Lieder',
	],
	authors: [{ name: 'Joy Fackler' }],
	creator: 'Joy & Markus',
	publisher: 'Joy & Markus',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'de_DE',
		url: siteUrl,
		siteName: siteName,
		title: siteName,
		description: defaultDescription,
			images: [
				{
					url: `${siteUrl}/images/og-image.png`,
					width: 1200,
					height: 630,
					alt: 'Joy & Markus - Christliche Musik',
				},
			],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteName,
		description: defaultDescription,
		images: [`${siteUrl}/images/og-image.png`],
		creator: '@joyundmarkus',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		// Google Search Console verification code
		// Füge hier deinen Verifizierungscode ein, z.B.:
		// google: 'CgATms2AYILpyjNFaJMF2hIDh8Ud6QplrEc',
		google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
	},
	alternates: {
		canonical: siteUrl,
	},
	icons: {
		icon: [
			{ url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
		],
		apple: [
			{ url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' },
		],
	},
	category: 'Music',
}

export function generatePageMetadata({
	title,
	description,
	path = '',
	image,
}: {
	title: string
	description?: string
	path?: string
	image?: string
}): Metadata {
	const url = `${siteUrl}${path}`
	const ogImage = image || `${siteUrl}/images/og-image.png`

	return {
		title,
		description: description || defaultDescription,
		openGraph: {
			...defaultMetadata.openGraph,
			title,
			description: description || defaultDescription,
			url,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			...defaultMetadata.twitter,
			title,
			description: description || defaultDescription,
			images: [ogImage],
		},
		alternates: {
			canonical: url,
		},
	}
}

