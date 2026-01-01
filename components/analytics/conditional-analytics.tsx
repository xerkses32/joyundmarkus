'use client'

import { Analytics } from '@vercel/analytics/next'
import { useCookieConsent } from '@/lib/hooks/use-cookie-consent'

/**
 * Conditional Analytics component that only loads Vercel Analytics
 * after the user has given marketing cookie consent (DSGVO compliant)
 */
export function ConditionalAnalytics() {
	const { consent } = useCookieConsent()

	// Only load Analytics if marketing consent has been given
	if (consent?.marketing) {
		return <Analytics />
	}

	return null
}
