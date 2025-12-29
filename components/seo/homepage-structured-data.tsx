'use client'

import { StructuredData } from './structured-data'

export function HomepageStructuredData() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyundmarkus.de'

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'MusicGroup',
		name: 'Joy & Markus',
		description:
			'Joy & Markus ist ein Musikduo, das christliche Musik schafft, die Menschen näher zu Gott bringt.',
		url: siteUrl,
		logo: `${siteUrl}/images/logo.png`,
		sameAs: [
			'https://open.spotify.com/intl-de/artist/79z0xxbox5vf6HfkBM7kJY',
			'https://music.apple.com/de/artist/joy-markus/1566339753',
			'https://www.youtube.com/channel/UC_4Uj_411eCr8VAvCF7Csmw',
			'https://music.amazon.de/artists/B0949N51LV/joy-markus',
		],
		member: [
			{
				'@type': 'Person',
				name: 'Joy Fackler',
				jobTitle: 'Musikerin',
				description:
					'Joy ist eine leidenschaftliche Musikerin und Komponistin, die ihre Kreativität in den Dienst der Kirche stellt.',
			},
			{
				'@type': 'Person',
				name: 'Markus',
				jobTitle: 'Musiker',
				description:
					'Markus ist Musiker und Komponist, der sich darauf konzentriert, Musik zu schaffen, die Menschen näher zu Gott bringt.',
			},
		],
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'joyundmarkus@googlemail.com',
			contactType: 'customer service',
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Philipp-Scheidemannstr. 5',
			addressLocality: 'Augsburg',
			postalCode: '86199',
			addressCountry: 'DE',
		},
	}

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Joy & Markus',
		url: siteUrl,
		description:
			'Offizielle Website von Joy & Markus - Christliche Musik, Chordsheets und mehr',
		publisher: {
			'@type': 'MusicGroup',
			name: 'Joy & Markus',
		},
		// Wichtige Seiten für Sitelinks
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Musik',
					url: `${siteUrl}#musik`,
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Chordsheets',
					url: `${siteUrl}#chordsheets`,
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: 'About',
					url: `${siteUrl}#about`,
				},
				{
					'@type': 'ListItem',
					position: 4,
					name: 'Kontakt',
					url: `${siteUrl}#kontakt`,
				},
				{
					'@type': 'ListItem',
					position: 5,
					name: 'Impressum',
					url: `${siteUrl}/impressum`,
				},
				{
					'@type': 'ListItem',
					position: 6,
					name: 'Datenschutz',
					url: `${siteUrl}/datenschutz`,
				},
			],
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${siteUrl}/?search={search_term_string}`,
			},
			'query-input': 'required name=search_term_string',
		},
	}

	return (
		<>
			<StructuredData data={organizationSchema} />
			<StructuredData data={websiteSchema} />
		</>
	)
}

