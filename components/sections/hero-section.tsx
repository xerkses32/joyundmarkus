'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface HeroSectionProps {
	featuredSong?: {
		albumCover: string
		listenUrl?: string
	}
}

export function HeroSection({ featuredSong }: HeroSectionProps) {
	const albumCover =
		featuredSong?.albumCover || '/images/Alles beugt sich cover.png'
	const containerRef = useRef<HTMLDivElement>(null)
	const beugtRef = useRef<HTMLSpanElement>(null)
	const [fontSize, setFontSize] = useState<string>('149px') // 160px - 7% ≈ 149px

	useEffect(() => {
		const updateFontSize = () => {
			if (!containerRef.current || !beugtRef.current) return

			const container = containerRef.current
			const containerWidth = container.offsetWidth

			// Base reference: at 1024px width, increased font size
			// "BEUGT" should fill approximately 88% of container width
			const referenceWidth = 1024
			const referenceFontSize = 223 // 240px - 7% ≈ 223px
			const targetFillRatio = 0.88 // 88% of container width

			// Calculate scale factor based on container width
			const scaleFactor = containerWidth / referenceWidth

			// Calculate font size to maintain the same fill ratio
			// Account for letter spacing by using the same scaling
			let calculatedSize = referenceFontSize * scaleFactor

			// For mobile devices, use a higher base size to ensure visibility
			if (containerWidth < 768) {
				// On mobile, ensure minimum size and use a multiplier for better visibility
				const mobileBaseSize = 180
				calculatedSize = Math.max(mobileBaseSize, calculatedSize * 1.2)
			}

			// Clamp between reasonable min and max
			const minSize = containerWidth < 768 ? 180 : 80
			const clampedSize = Math.max(minSize, Math.min(450, calculatedSize))
			setFontSize(`${clampedSize}px`)
		}

		// Use ResizeObserver for better performance
		if (!containerRef.current) return

		const resizeObserver = new ResizeObserver(updateFontSize)
		resizeObserver.observe(containerRef.current)

		// Initial calculation with slight delay to ensure layout
		const timeoutId = setTimeout(updateFontSize, 100)

		return () => {
			resizeObserver.disconnect()
			clearTimeout(timeoutId)
		}
	}, [])

	return (
		<div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
			{/* Background image - full width on mobile */}
			<div className="absolute h-full left-0 top-0 w-full">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<Image
						src="/images/Joy.png"
						alt="Joy Fackler - Musikerin und Komponistin"
						fill
						className="object-cover grayscale"
						priority
						sizes="100vw"
					/>
				</div>
			</div>

			{/* ALLES BEUGT SICH Text */}
			<div 
				ref={containerRef}
				className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[5] w-full px-4 overflow-hidden"
			>
				<h2 
					className="font-darker-grotesque font-black text-[#ecebe6] leading-none text-center"
					style={{ fontSize }}
				>
					<span className="block whitespace-nowrap">ALLES</span>
					<span ref={beugtRef} className="block whitespace-nowrap">BEUGT</span>
					<span className="block whitespace-nowrap">SICH</span>
				</h2>
			</div>

			{/* Joy ausgeschnitten overlay */}
			<div className="absolute h-full left-0 top-0 w-full z-10">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<img
						src="/images/Joy-ausgeschnitten.png"
						alt="Joy Fackler - Porträt"
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
			</div>

			{/* Grain Overlay */}
			<div className="absolute inset-0 pointer-events-none grain-overlay opacity-30 z-20" />

			{/* Content Container */}
			<div className="absolute inset-0 flex items-center justify-center p-2 md:p-4 lg:p-6 z-30">
				{/* Album Cover and Badge */}
				<div className="flex flex-col items-center gap-3 md:gap-4">
					<p className="font-darker-grotesque font-bold text-[#ecebe6] text-[16px] md:text-[18px] lg:text-[20px] uppercase tracking-wider">
						UNSERE NEUE SINGLE
					</p>
					<div className="relative size-[150px] md:size-[200px] lg:size-[265px] shrink-0">
						<Image
							src={albumCover}
							alt="Alles beugt sich album cover"
							fill
							className="object-cover rounded-lg shadow-lg"
							sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 265px"
						/>
					</div>
					<a
						href="https://open.spotify.com/intl-de/track/0snv4gtgkdzX02W50XJoja?si=906e2c3a8c664d48"
						aria-label="Alles Beugt Sich auf Spotify anhören"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block hover:opacity-90 transition-opacity"
					>
					<Badge className="scale-75 md:scale-75 lg:scale-80">OUT NOW</Badge>
					</a>
				</div>
			</div>
		</div>
	)
}
