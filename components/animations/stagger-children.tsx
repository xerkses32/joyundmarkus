'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import type { ReactNode } from 'react'

interface StaggerChildrenProps {
	children: ReactNode
	className?: string
	staggerDelay?: number
	distance?: number
	duration?: number
}

/**
 * Container component that staggers the animation of its children
 * Respects prefers-reduced-motion for accessibility
 */
export function StaggerChildren({
	children,
	className,
	staggerDelay = 0.1,
	distance = 20,
	duration = 0.5,
}: StaggerChildrenProps) {
	const { ref, isIntersecting } = useIntersectionObserver({
		threshold: 0.1,
		triggerOnce: true,
	})

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDelay,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: distance },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	}

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={isIntersecting ? 'visible' : 'hidden'}
			className={className}
		>
			{Array.isArray(children)
				? children.map((child, index) => (
						<motion.div key={index} variants={itemVariants}>
							{child}
						</motion.div>
					))
				: children}
		</motion.div>
	)
}
