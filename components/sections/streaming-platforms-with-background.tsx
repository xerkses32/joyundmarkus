'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { StreamingPlatforms } from '@/components/ui/streaming-platforms'

export function StreamingPlatformsWithBackground() {
	const logosRef = useRef<HTMLDivElement>(null)
	const [imageSize, setImageSize] = useState(400)
	const [containerPadding, setContainerPadding] = useState(60)

	useEffect(() => {
		const updateImageSize = () => {
			if (logosRef.current) {
				const logosWidth = logosRef.current.getBoundingClientRect().width
				const viewportWidth = window.innerWidth
				const viewportHeight = window.innerHeight
				
				// Basis-Berechnung: Radius = Breite der Logos, Durchmesser = 2 * Radius
				let multiplier = 1.5 // Desktop default
				
				// Responsive Multiplikatoren basierend auf Viewport-Größe
				if (viewportWidth < 768) {
					// Mobile: kleinerer Multiplikator
					multiplier = 0.8
				} else if (viewportWidth < 1024) {
					// Tablet / iPad Mini: mittlerer Multiplikator
					multiplier = 1.0
				}
				
				// Berechne die gewünschte Größe basierend auf Logos-Breite
				const diameter = logosWidth * 2 * multiplier
				
				// Keine Viewport-Begrenzung - das Bild soll die Sections pushen
				// Der Container-Spacing wird angepasst, um Platz zu schaffen
				const finalSize = diameter
				const newImageSize = Math.max(finalSize, 200)
				setImageSize(newImageSize)
				
				// Berechne Padding basierend auf Bildgröße und Viewport
				const isMobile = viewportWidth < 768
				// Mobile: größeres Padding, Desktop: 50% der Bildgröße
				const paddingMultiplier = isMobile ? 1.4 : 0.5
				const minPadding = isMobile ? 200 : 60
				const newPadding = Math.max(newImageSize * paddingMultiplier, minPadding)
				setContainerPadding(newPadding)
			}
		}

		const timeout = setTimeout(updateImageSize, 100)
		updateImageSize()
		window.addEventListener('resize', updateImageSize)
		return () => {
			clearTimeout(timeout)
			window.removeEventListener('resize', updateImageSize)
		}
	}, [])

	return (
		<div 
			className="relative flex items-center justify-center w-full" 
			style={{ 
				paddingTop: `${containerPadding}px`,
				paddingBottom: `${containerPadding}px`
			}}
		>
			{/* Background Image - zentriert hinter den Logos */}
			<div className="absolute flex items-center justify-center pointer-events-none">
				<Image
					src="/images/color-2.png"
					alt=""
					width={imageSize}
					height={imageSize}
					className="object-contain"
					style={{ 
						width: `${imageSize}px`, 
						height: `${imageSize}px`
					}}
					aria-hidden="true"
				/>
			</div>
			{/* Streaming Platforms - zentriert */}
			<div ref={logosRef} className="relative z-10">
				<StreamingPlatforms size="large" backgroundColor />
			</div>
		</div>
	)
}
