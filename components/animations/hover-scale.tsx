'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface HoverScaleProps {
	children: ReactNode
	className?: string
	scale?: number
}

/**
 * Wrapper component that adds a subtle scale effect on hover
 */
export function HoverScale({ children, className, scale = 1.05 }: HoverScaleProps) {
	return (
		<motion.div
			whileHover={{ scale }}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 25,
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}
