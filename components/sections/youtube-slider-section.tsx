'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useCookieConsent } from '@/lib/hooks/use-cookie-consent'
import { VideoSkeleton } from '@/components/ui/video-skeleton'

interface YouTubeSliderSectionProps {
	videos: string[] // Array of YouTube video IDs
	autoplay?: boolean
	autoplayInterval?: number
}

export function YouTubeSliderSection({
	videos,
	autoplay = true,
	autoplayInterval = 5000,
}: YouTubeSliderSectionProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const intervalRef = useRef<NodeJS.Timeout | null>(null)
	const sliderRef = useRef<HTMLDivElement>(null)
	const { consent, acceptCustom } = useCookieConsent()
	const hasMarketingConsent = consent?.marketing === true

	const handleEnableCookies = () => {
		acceptCustom(true)
	}

	useEffect(() => {
		if (!autoplay) return

		intervalRef.current = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % videos.length)
		}, autoplayInterval)

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [autoplay, autoplayInterval, videos.length])

	const scrollToSlide = useCallback((index: number) => {
		if (sliderRef.current) {
			const slideWidth = sliderRef.current.offsetWidth
			sliderRef.current.scrollTo({
				left: slideWidth * index,
				behavior: 'smooth',
			})
		}
		setCurrentIndex(index)
	}, [])

	useEffect(() => {
		if (sliderRef.current) {
			const slideWidth = sliderRef.current.offsetWidth
			sliderRef.current.scrollTo({
				left: slideWidth * currentIndex,
				behavior: 'smooth',
			})
		}
	}, [currentIndex])

	return (
		<div className="flex flex-col items-center w-full overflow-hidden border-t-[3px] border-[#1C1C1C] pb-16 md:pb-24 lg:pb-[380px]">
			{/* Cookie Info Banner */}
			{!hasMarketingConsent && (
				<div className="flex flex-col gap-4 items-center justify-center w-full px-4 md:px-6 lg:px-8 py-6 md:py-8 bg-[#ecebe6] border-b border-[#cfcfcf]">
					<div className="flex flex-col gap-3 items-center text-center max-w-2xl">
						<p className="font-darker-grotesque font-black text-[18px] md:text-[20px] lg:text-[22px] text-[#1C1C1C]">
							COOKIES FÜR VIDEO-ANZEIGE ERFORDERLICH
						</p>
						<p className="font-geist-mono font-normal text-[14px] md:text-[16px] text-[#4a4a4a] leading-relaxed">
							Um die YouTube-Videos anzuzeigen, benötigen wir Ihre Zustimmung für Marketing-Cookies.
							Diese werden von YouTube/Google gesetzt, um die Videos zu laden.
						</p>
						<button
							type="button"
							onClick={handleEnableCookies}
							className="mt-2 px-6 md:px-8 py-3 md:py-4 bg-[#1C1C1C] text-[#ecebe6] font-darker-grotesque font-black text-[14px] md:text-[16px] uppercase hover:opacity-90 transition-opacity"
						>
							Cookies aktivieren
						</button>
						<Link
							href="/cookie-einstellungen"
							className="font-geist-mono font-normal text-[12px] md:text-[14px] text-[#4a4a4a] underline hover:opacity-70"
						>
							Weitere Cookie-Einstellungen
						</Link>
					</div>
				</div>
			)}
			<div
				ref={sliderRef}
				className="flex items-start relative w-full overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth"
			>
				{!hasMarketingConsent ? (
					<VideoSkeleton count={videos.length} />
				) : (
					videos.map((videoId, index) => (
						<div
							key={videoId}
							className="h-[200px] md:h-[250px] lg:h-[319px] relative shrink-0 w-full md:w-1/2 lg:w-[746px] snap-start"
						>
							<iframe
								src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
								title={`YouTube video ${index + 1}`}
								className="absolute inset-0 w-full h-full pointer-events-auto"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					))
				)}
			</div>

			{/* Navigation Dots */}
			{hasMarketingConsent && videos.length > 1 && (
				<div className="flex gap-2 items-center justify-center mt-4 md:mt-6">
					{videos.map((_, index) => (
						<button
							key={index}
							onClick={() => scrollToSlide(index)}
							className={`h-2 w-2 transition-all duration-300 ${
								index === currentIndex
									? 'bg-[#1C1C1C] w-8'
									: 'bg-[#cfcfcf] hover:bg-[#b1b1b1]'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}

