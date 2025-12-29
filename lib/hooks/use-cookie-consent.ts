'use client'

import { useState, useEffect } from 'react'

type CookieConsent = {
	necessary: boolean // Immer true, kann nicht abgelehnt werden
	marketing: boolean // YouTube/Google Tracking
}

const COOKIE_CONSENT_KEY = 'cookie-consent'

export function useCookieConsent() {
	const [consent, setConsent] = useState<CookieConsent | null>(null)
	const [hasConsented, setHasConsented] = useState(false)

	useEffect(() => {
		// Prüfe, ob bereits eine Zustimmung gespeichert wurde
		const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
		if (stored) {
			try {
				const parsed = JSON.parse(stored) as CookieConsent
				setConsent(parsed)
				setHasConsented(true)
			} catch {
				// Bei Fehler beim Parsen, Zustimmung zurücksetzen
				localStorage.removeItem(COOKIE_CONSENT_KEY)
			}
		}
	}, [])

	const acceptAll = () => {
		const newConsent: CookieConsent = {
			necessary: true,
			marketing: true,
		}
		setConsent(newConsent)
		setHasConsented(true)
		localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent))
	}

	const acceptNecessary = () => {
		const newConsent: CookieConsent = {
			necessary: true,
			marketing: false,
		}
		setConsent(newConsent)
		setHasConsented(true)
		localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent))
	}

	const acceptCustom = (marketing: boolean) => {
		const newConsent: CookieConsent = {
			necessary: true,
			marketing,
		}
		setConsent(newConsent)
		setHasConsented(true)
		localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent))
	}

	const revokeConsent = () => {
		setConsent(null)
		setHasConsented(false)
		localStorage.removeItem(COOKIE_CONSENT_KEY)
		// Seite neu laden, um alle Cookies zu entfernen
		window.location.reload()
	}

	return {
		consent,
		hasConsented,
		acceptAll,
		acceptNecessary,
		acceptCustom,
		revokeConsent,
	}
}

