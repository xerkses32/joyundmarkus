'use client'

import Link from 'next/link'
import { FadeIn } from '@/components/animations/fade-in'
import { StreamingPlatforms } from '@/components/ui/streaming-platforms'
import { SupportButton } from '@/components/ui/support-button'

interface FooterProps {}

export function Footer({}: FooterProps) {
	return (
		<footer className="bg-[#1C1C1C] text-[#ecebe6] w-full">
			<div className="w-full max-w-[1440px] mx-auto px-2 md:px-4 lg:px-8 py-8 md:py-12 lg:py-16">
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
					{/* Left Side: Logo and Social Media Icons */}
					<FadeIn delay={0.2}>
						<div className="flex flex-col gap-6 w-full lg:w-auto">
							<h2 className="font-darker-grotesque font-black text-[24px] md:text-[32px] text-[#ecebe6]">
								JOY&MARKUS
							</h2>
							<StreamingPlatforms size="small" />
							<div className="flex items-center justify-start scale-50 md:scale-60 lg:scale-75 origin-left">
								<SupportButton />
							</div>
						</div>
					</FadeIn>

					{/* Right Side: Navigation Links */}
					<div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 w-full lg:w-auto">
						{/* First Column */}
						<div className="flex flex-col gap-3">
							<Link
								href="#kontakt"
								className="font-darker-grotesque font-bold text-[14px] md:text-[16px] text-[#ecebe6] hover:opacity-70 transition-opacity"
							>
								KONTAKT
							</Link>
							<Link
								href="/datenschutz"
								className="font-darker-grotesque font-bold text-[14px] md:text-[16px] text-[#ecebe6] hover:opacity-70 transition-opacity"
							>
								DATENSCHUTZ
							</Link>
						</div>

						{/* Second Column */}
						<div className="flex flex-col gap-3">
							<Link
								href="/impressum"
								className="font-darker-grotesque font-bold text-[14px] md:text-[16px] text-[#ecebe6] hover:opacity-70 transition-opacity"
							>
								IMPRESSUM
							</Link>
							<Link
								href="/cookie-einstellungen"
								className="font-darker-grotesque font-bold text-[14px] md:text-[16px] text-[#ecebe6] hover:opacity-70 transition-opacity"
							>
								COOKIE-EINSTELLUNGEN
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
