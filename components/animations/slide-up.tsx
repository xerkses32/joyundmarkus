'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

interface SlideUpProps {
	children: ReactNode
	className?: string
	isVisible: boolean
	duration?: number
	from?: number
}

/**
 * Component that slides up from bottom when visible
 * Useful for modals, banners, etc.
 */
export function SlideUp({ children, className, isVisible, duration = 0.3, from = 100 }: SlideUpProps) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: from, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: from, opacity: 0 }}
					transition={{
						duration,
						ease: [0.22, 1, 0.36, 1],
					}}
					className={className}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}
