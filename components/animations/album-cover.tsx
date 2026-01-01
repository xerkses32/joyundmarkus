'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { ComponentProps } from 'react'

interface AlbumCoverProps {
	src: string
	alt: string
	className?: string
	containerClassName?: string
	sizes?: string
}

/**
 * Animated album cover component with hover effects
 */
export function AlbumCover({ src, alt, className, containerClassName, sizes }: AlbumCoverProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.05, y: -5 }}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 25,
			}}
			className={containerClassName}
		>
			<div className={`relative ${className}`}>
				<Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
			</div>
		</motion.div>
	)
}
