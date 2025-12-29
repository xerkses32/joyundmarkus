'use client'

import { StructuredData } from './structured-data'

interface BreadcrumbItem {
	name: string
	url: string
}

interface BreadcrumbStructuredDataProps {
	items: BreadcrumbItem[]
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyundmarkus.de'

	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
		})),
	}

	return <StructuredData data={breadcrumbSchema} />
}

