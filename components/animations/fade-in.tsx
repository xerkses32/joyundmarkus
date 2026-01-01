'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
	children: ReactNode
	className?: string
	delay?: number
	duration?: number
}

/**
 * Simple fade-in animation component
 * Use for elements that should fade in on mount
 */
export function FadeIn({ children, className, delay = 0, duration = 0.5 }: FadeInProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration,
				delay,
				ease: [0.22, 1, 0.36, 1],
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}
