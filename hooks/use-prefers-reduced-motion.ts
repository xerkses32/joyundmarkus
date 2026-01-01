import { useEffect, useState } from 'react'

/**
 * Hook to detect user's preference for reduced motion
 * Returns true if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		setPrefersReducedMotion(mediaQuery.matches)

		const handleChange = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(event.matches)
		}

		// Modern browsers
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleChange)
			return () => mediaQuery.removeEventListener('change', handleChange)
		}

		// Fallback for older browsers
		mediaQuery.addListener(handleChange)
		return () => mediaQuery.removeListener(handleChange)
	}, [])

	return prefersReducedMotion
}
