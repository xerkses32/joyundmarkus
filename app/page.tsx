'use client'

import { Header } from '@/components/layout/header'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { MusicSection } from '@/components/sections/music-section'
import { ChordsheetsSection } from '@/components/sections/chordsheets-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { YouTubeSliderSection } from '@/components/sections/youtube-slider-section'
import { CookieBanner } from '@/components/ui/cookie-banner'
import { HomepageStructuredData } from '@/components/seo/homepage-structured-data'
import type { ChordSheet } from '@/types/chordsheet'

export default function Home() {

	const chordsheets: ChordSheet[] = [
		{ id: '1', name: 'ALLES BEUGT SICH', anzahl: 1, downloadUrl: '/chordsheets/alles-beugt-sich.pdf' },
		{ id: '2', name: 'ABBA', anzahl: 1, downloadUrl: '#' },
		{ id: '3', name: 'ÜBERWUNDEN', anzahl: 13, downloadUrl: '/chordsheets/über-wunden.pdf' },
		{ id: '4', name: 'MEIN LOHN BIST DU', anzahl: 1, downloadUrl: '#' },
		{ id: '5', name: 'NAH ZU SEIN', anzahl: 12, downloadUrl: '/chordsheets/nah-zu-sein.pdf' },
	]

	return (
		<div className="flex flex-col min-h-screen bg-[#ecebe6]">
			<HomepageStructuredData />
			<main className="flex flex-col gap-4 md:gap-6 lg:gap-[10px] items-center px-2 md:px-4 lg:px-8 py-4 md:py-6 lg:py-[20px] flex-1 w-full">
			<div className="w-full max-w-[1440px] border-[3px] border-[#1C1C1C]">
				<Header />
				<Navigation />
				<h1 className="sr-only">Joy & Markus - Christliche Musik</h1>
				<HeroSection />
				<div id="musik">
					<MusicSection />
				</div>
				<div id="chordsheets">
					<ChordsheetsSection chordsheets={chordsheets} />
				</div>
				<div id="about">
					<AboutSection />
				</div>
				<YouTubeSliderSection
					videos={[
						'Na_t_Yn6JuQ',
						'410bOWzW0O8',
						'WXrfwlISbbo',
						'8hESIuzEtSw',
						'o2moAxlOpRg',
						'jwoKXeKDKbA',
						'-m3mdWLalD0',
						'6xVMd0h7h50',
						'uKv0fI8wueE',
					]}
					autoplay={true}
					autoplayInterval={5000}
				/>
				<div id="kontakt">
					<ContactSection />
				</div>
				<div className="bg-[#ecebe6] h-[200px] md:h-[300px] lg:h-[365px] w-full" />
			</div>
		</main>
		<Footer />
		<CookieBanner />
		</div>
	)
}
