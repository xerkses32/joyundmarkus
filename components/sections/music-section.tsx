'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { ThreeColumnLayout } from '@/components/layout/three-column-layout'
import { TwoColumnLayout } from '@/components/layout/two-column-layout'
import { MusicBadge } from '@/components/ui/music-badge'
import { StreamingPlatforms } from '@/components/ui/streaming-platforms'
import { SpotifyButton } from '@/components/ui/spotify-button'
import { PurchaseButton } from '@/components/ui/purchase-button'
import { RevealSection } from '@/components/animations/reveal-section'
import { AlbumCover } from '@/components/animations/album-cover'
import Image from 'next/image'

export function MusicSection() {
	// First 2-Column Layout Content - Überwunden
	const firstTwoColumnLeftContent = (
		<div className="flex flex-col items-center justify-center w-full gap-3">
			<MusicBadge>ALBUM</MusicBadge>
			<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
				Über.<br />Wunden.
			</h2>
			<p className="font-andale-mono text-[15px] text-[#1C1C1C] mb-4 text-center">
				Joy&Markus uvm.
			</p>
			<div className="flex gap-4 items-center justify-center">
				<PurchaseButton href="https://shop.gebetshaus.org/collections/alben/products/album-uberwunden" />
				<SpotifyButton href="https://open.spotify.com/intl-de/album/0Eyy342lFznzZAaViZ5UH6?si=OmCIZcb_SMeEz_HJtPONKQ" />
			</div>
		</div>
	)

	const firstTwoColumnRightContent = (
		<div className="flex items-center justify-center">
			<AlbumCover
				src="/images/Überwunden.png"
				alt="Überwunden"
				className="w-[265px] h-[265px] md:w-[404px] md:h-[400px]"
				sizes="(max-width: 768px) 265px, 404px"
			/>
		</div>
	)

	// Second 2-Column Layout Content - Nah zu sein
	const secondTwoColumnLeftContent = (
		<div className="flex flex-col items-center justify-center w-full gap-3">
			<MusicBadge>ALBUM</MusicBadge>
			<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
				Nah zu sein
			</h2>
			<p className="font-andale-mono text-[15px] text-[#1C1C1C] text-center mb-4">
				Joy&Markus
			</p>
			<div className="flex gap-4 items-center justify-center">
				<PurchaseButton href="https://shop.gebetshaus.org/collections/alben/products/album-nah-zu-sein" />
				<SpotifyButton href="https://open.spotify.com/intl-de/album/0TeHKQ7baO6hlgSNM44fRs?si=EixNyfhgQW6bQAaopkoFhw" />
			</div>
		</div>
	)

	const secondTwoColumnRightContent = (
		<div className="flex items-center justify-center">
			<AlbumCover
				src="/images/nah zu sein.jpeg"
				alt="Nah zu sein Cover"
				className="w-[265px] h-[265px] md:w-[404px] md:h-[400px]"
				sizes="(max-width: 768px) 265px, 404px"
			/>
		</div>
	)

	// Helper function für 2-Column Mock Content
	const createTwoColumnMock = (index: number) => {
		const leftContent = (
			<div className="flex flex-col items-center justify-center">
				<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4">
					2-COLUMN MOCK {index}
				</h2>
				<p className="font-andale-mono text-[15px] text-[#1C1C1C]">
					2-Column Citation {index}
				</p>
			</div>
		)

		const rightContent = (
			<div className="relative w-[404px] h-[400px]">
				<div className="absolute inset-0 bg-gray-300 rounded-lg flex items-center justify-center">
					<span className="font-geist-mono text-[#1C1C1C]">2-Column Image {index}</span>
				</div>
			</div>
		)

		return { leftContent, rightContent }
	}

	// Second 3-Column Layout Content - Alles Beugt Sich
	const secondThreeColumnLeftContent = (
		<div className="flex flex-col items-center justify-center w-full gap-3">
			<MusicBadge>SINGLE</MusicBadge>
			<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
				Alles Beugt Sich
			</h2>
			<p className="font-andale-mono text-[15px] text-[#1C1C1C] text-center">
				Joy&Markus
			</p>
		</div>
	)

	const secondThreeColumnMiddleContent = (
		<div className="flex items-center justify-center">
			<AlbumCover
				src="/images/Alles beugt sich cover.png"
				alt="Alles Beugt Sich"
				className="w-[265px] h-[265px]"
				sizes="265px"
			/>
		</div>
	)

	const secondThreeColumnRightContent = (
		<div className="flex flex-col items-center justify-center gap-2">
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
				Alles beugt sich um dich zu erhöhen
			</p>
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C] mb-4">
				unsere Anbetung soll dich krönen, Jesus
			</p>
			<SpotifyButton href="https://open.spotify.com/intl-de/track/0snv4gtgkdzX02W50XJoja?si=906e2c3a8c664d48" />
		</div>
	)

	// Third 3-Column Layout Content - Abba (reimagined)
	const thirdThreeColumnLeftContent = (
		<div className="flex flex-col items-center justify-center w-full gap-3">
			<MusicBadge>SINGLE</MusicBadge>
			<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
				Abba<br />(reimagined)
			</h2>
			<p className="font-andale-mono text-[15px] text-[#1C1C1C] text-center">
				Joy&Markus
			</p>
		</div>
	)

	const thirdThreeColumnMiddleContent = (
		<div className="flex items-center justify-center">
			<AlbumCover
				src="/images/Abba.png"
				alt="Abba (reimagined)"
				className="w-[265px] h-[265px]"
				sizes="265px"
			/>
		</div>
	)

	const thirdThreeColumnRightContent = (
		<div className="flex flex-col items-center justify-center gap-2">
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
				Dein Blick auf mir soll Dir genügen
			</p>
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C] mb-4">
				von dir gesehen, von dir geliebt
			</p>
			<SpotifyButton href="https://open.spotify.com/intl-de/album/55byPJxCqKypfinzs7nJ7Y?si=p3ztdqaxS2iBdl32XIS8Ng" />
		</div>
	)

	// Fourth 3-Column Layout Content - Mein Lohn Bist Du
	const fourthThreeColumnLeftContent = (
		<div className="flex flex-col items-center justify-center w-full gap-3">
			<MusicBadge>SINGLE</MusicBadge>
			<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
				Mein Lohn Bist Du
			</h2>
			<p className="font-andale-mono text-[15px] text-[#1C1C1C] text-center">
				mit Niklas Strauß
			</p>
		</div>
	)

	const fourthThreeColumnMiddleContent = (
		<div className="flex items-center justify-center">
			<AlbumCover
				src="/images/Mein Lohn Bist Du.png"
				alt="Mein Lohn Bist Du"
				className="w-[265px] h-[265px]"
				sizes="265px"
			/>
		</div>
	)

	const fourthThreeColumnRightContent = (
		<div className="flex flex-col items-center justify-center gap-2">
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
				Ohne Liebe wär ich nichts als leeres Geschwätz
			</p>
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C] mb-4">
				als totes Geräusch
			</p>
			<SpotifyButton href="https://open.spotify.com/intl-de/album/5caK5M5jYjIIwBdjvPmGXA?si=VQqwh-CzTIGVtUi8jLgpfQ" />
		</div>
	)

	// Fifth 3-Column Layout Content - Im Zelt des Herrn
	const fifthThreeColumnLeftContent = (
		<div className="flex flex-col items-center justify-center w-full gap-3">
			<MusicBadge>SINGLE</MusicBadge>
			<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
				Im Zelt des Herrn
			</h2>
			<p className="font-andale-mono text-[15px] text-[#1C1C1C] text-center">
				mit Timo Langner
			</p>
		</div>
	)

	const fifthThreeColumnMiddleContent = (
		<div className="flex items-center justify-center">
			<AlbumCover
				src="/images/Im zelt des Herrn.png"
				alt="Im Zelt des Herrn"
				className="w-[265px] h-[265px]"
				sizes="265px"
			/>
		</div>
	)

	const fifthThreeColumnRightContent = (
		<div className="flex flex-col items-center justify-center gap-2">
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
				Ehre, Ehre unserm König
			</p>
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
				Herrlich stark und mächtig
			</p>
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C] mb-4">
				Er ist unter uns
			</p>
			<SpotifyButton href="https://open.spotify.com/intl-de/track/6s1ucZLYJUdKdPIwIDztJf?si=20a6c65011634d13" />
		</div>
	)

	// Helper function für 3-Column Mock Content
	const createThreeColumnMock = (index: number) => {
		const leftContent = (
			<div className="flex flex-col items-center justify-center w-[202px]">
				<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
					3-COLUMN MOCK {index}
				</h2>
				<p className="font-andale-mono text-[15px] text-[#1C1C1C] text-center">
					3-Column Citation {index}
				</p>
			</div>
		)

		const middleContent = (
			<div className="flex items-center justify-center">
				<div className="relative w-[265px] h-[265px]">
					<div className="absolute inset-0 bg-blue-300 rounded-lg flex items-center justify-center">
						<span className="font-geist-mono text-[#1C1C1C]">Cover {index}</span>
					</div>
				</div>
			</div>
		)

		const rightContent = (
			<div className="flex flex-col items-center justify-center">
				<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
					Mock Lyrics Line 1 - {index}
				</p>
				<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
					Mock Lyrics Line 2 - {index}
				</p>
				<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
					Mock Lyrics Line 3 - {index}
				</p>
			</div>
		)

		return { leftContent, middleContent, rightContent }
	}

	// First 3-Column Layout Content - Wunderbarer Gott
	const firstThreeColumnLeftContent = (
		<div className="flex flex-col items-center justify-center w-full gap-3">
			<MusicBadge>SINGLE</MusicBadge>
			<h2 className="font-geist-mono font-normal text-[30px] text-[#1C1C1C] mb-4 text-center">
				Wunderbarer Gott
			</h2>
			<p className="font-andale-mono text-[15px] text-[#1C1C1C] text-center">
				mit Timo Langner
			</p>
		</div>
	)

	const firstThreeColumnMiddleContent = (
		<div className="flex items-center justify-center">
			<AlbumCover
				src="/images/Wunderbarer Gott.png"
				alt="Wunderbarer Gott"
				className="w-[265px] h-[265px]"
				sizes="265px"
			/>
		</div>
	)

	const firstThreeColumnRightContent = (
		<div className="flex flex-col items-center justify-center gap-2">
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
				Ein wunderbarer Gott bist DU
			</p>
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C]">
				Ich sing zu Dir, ich ruf Dir zu
			</p>
			<p className="font-geist-mono font-normal text-[10px] text-[#1C1C1C] mb-4">
				Heilig schön und königlich
			</p>
			<SpotifyButton href="https://open.spotify.com/intl-de/album/6IHEaEJSB8FehAznWdtmyS?si=Elr2pfblQ9y1t7V9TQWMIQ" />
		</div>
	)

	return (
		<div className="flex flex-col items-center overflow-clip py-8 md:py-12 lg:py-[59px] w-full">
			<RevealSection>
				<div className="flex flex-col items-center justify-center pb-16 md:pb-24 lg:pb-[380px] pt-16 md:pt-24 lg:pt-[380px] px-0 w-full">
					<SectionHeading>MUSIK</SectionHeading>
					{/* Streaming Platform Logos */}
					<div className="pt-4 md:pt-5 lg:pt-6 w-full">
						<StreamingPlatforms size="large" />
					</div>
				</div>
			</RevealSection>
			<div className="flex flex-col items-stretch w-full gap-0">
				<RevealSection delay={0.1}>
					<ThreeColumnLayout
						leftContent={firstThreeColumnLeftContent}
						middleContent={firstThreeColumnMiddleContent}
						rightContent={firstThreeColumnRightContent}
					/>
				</RevealSection>
				<RevealSection delay={0.2}>
					<ThreeColumnLayout
						leftContent={secondThreeColumnLeftContent}
						middleContent={secondThreeColumnMiddleContent}
						rightContent={secondThreeColumnRightContent}
					/>
				</RevealSection>
				<RevealSection delay={0.3}>
					<ThreeColumnLayout
						leftContent={thirdThreeColumnLeftContent}
						middleContent={thirdThreeColumnMiddleContent}
						rightContent={thirdThreeColumnRightContent}
					/>
				</RevealSection>
				<RevealSection delay={0.4}>
					<TwoColumnLayout
						leftContent={firstTwoColumnLeftContent}
						rightContent={firstTwoColumnRightContent}
					/>
				</RevealSection>
				<RevealSection delay={0.5}>
					<ThreeColumnLayout
						leftContent={fourthThreeColumnLeftContent}
						middleContent={fourthThreeColumnMiddleContent}
						rightContent={fourthThreeColumnRightContent}
					/>
				</RevealSection>
				<RevealSection delay={0.6}>
					<ThreeColumnLayout
						leftContent={fifthThreeColumnLeftContent}
						middleContent={fifthThreeColumnMiddleContent}
						rightContent={fifthThreeColumnRightContent}
					/>
				</RevealSection>
				<RevealSection delay={0.7}>
					<TwoColumnLayout
						leftContent={secondTwoColumnLeftContent}
						rightContent={secondTwoColumnRightContent}
					/>
				</RevealSection>
			</div>
		</div>
	)
}

