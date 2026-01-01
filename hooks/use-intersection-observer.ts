import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
	threshold?: number | number[]
	root?: Element | null
	rootMargin?: string
	triggerOnce?: boolean
}

interface UseIntersectionObserverReturn {
	ref: React.RefObject<Element>
	isIntersecting: boolean
}

/**
 * Custom hook for observing when an element enters the viewport
 * Respects prefers-reduced-motion for accessibility
 * @param options - IntersectionObserver options
 * @returns Object with ref to attach to element and isIntersecting state
 */
export function useIntersectionObserver({
	threshold = 0.1,
	root = null,
	rootMargin = '0px',
	triggerOnce = true,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const elementRef = useRef<HTMLElement>(null)
	const observerRef = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		const element = elementRef.current
		if (!element) return

		// Check for reduced motion preference
		if (typeof window !== 'undefined') {
			const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			if (prefersReducedMotion) {
				setIsIntersecting(true)
				return
			}
		}

		observerRef.current = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting)

				if (entry.isIntersecting && triggerOnce && observerRef.current) {
					observerRef.current.disconnect()
				}
			},
			{
				threshold,
				root,
				rootMargin,
			}
		)

		observerRef.current.observe(element)

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [threshold, root, rootMargin, triggerOnce])

	return { ref: elementRef as React.RefObject<Element>, isIntersecting }
}
