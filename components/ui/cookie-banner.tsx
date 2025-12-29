'use client'

import { useState } from 'react'
import { useCookieConsent } from '@/lib/hooks/use-cookie-consent'
import Link from 'next/link'

export function CookieBanner() {
	const { hasConsented, acceptAll, acceptNecessary, acceptCustom } = useCookieConsent()
	const [showDetails, setShowDetails] = useState(false)
	const [marketingEnabled, setMarketingEnabled] = useState(false)

	if (hasConsented) {
		return null
	}

	const handleAcceptSelected = () => {
		acceptCustom(marketingEnabled)
	}

	return (
		<div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#ecebe6] border-t-[3px] border-[#1C1C1C] shadow-lg">
			<div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
				<div className="flex flex-col gap-4 md:gap-6">
					{/* Header */}
					<div className="flex flex-col gap-2">
						<h3 className="font-darker-grotesque font-black text-[20px] md:text-[24px] text-[#1C1C1C]">
							COOKIE-EINSTELLUNGEN
						</h3>
						<p className="font-geist-mono font-normal text-[14px] md:text-[16px] text-[#1C1C1C] leading-relaxed">
							Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
							Einige Cookies sind technisch notwendig, andere helfen uns, die Website zu verbessern.
							Sie können selbst entscheiden, welche Cookies Sie zulassen möchten.
						</p>
					</div>

					{/* Cookie-Details */}
					{showDetails && (
						<div className="flex flex-col gap-4 p-4 bg-white border border-[#cfcfcf] rounded-lg">
							<div className="flex flex-col gap-3">
								<div className="flex items-start justify-between">
									<div className="flex flex-col gap-1 flex-1">
										<h4 className="font-darker-grotesque font-black text-[16px] text-[#1C1C1C]">
											Technisch notwendige Cookies
										</h4>
										<p className="font-geist-mono font-normal text-[12px] md:text-[14px] text-[#4a4a4a]">
											Diese Cookies sind für die Grundfunktionen der Website erforderlich und können
											nicht deaktiviert werden.
										</p>
									</div>
									<div className="ml-4">
										<span className="font-darker-grotesque font-black text-[14px] text-[#1C1C1C]">
											Immer aktiv
										</span>
									</div>
								</div>

								<div className="h-px w-full bg-[#cfcfcf]" />

								<div className="flex items-start justify-between">
									<div className="flex flex-col gap-1 flex-1">
										<h4 className="font-darker-grotesque font-black text-[16px] text-[#1C1C1C]">
											Marketing / Tracking Cookies
										</h4>
										<p className="font-geist-mono font-normal text-[12px] md:text-[14px] text-[#4a4a4a]">
											Diese Cookies werden von YouTube/Google gesetzt, um Ihr Nutzungsverhalten zu
											analysieren und personalisierte Inhalte anzuzeigen. Wenn Sie diese Cookies
											ablehnen, werden YouTube-Videos nicht automatisch geladen.
										</p>
									</div>
									<div className="ml-4">
										<label className="flex items-center cursor-pointer">
											<input
												type="checkbox"
												checked={marketingEnabled}
												onChange={(e) => setMarketingEnabled(e.target.checked)}
												className="w-5 h-5 cursor-pointer accent-[#1C1C1C]"
												aria-label="Marketing Cookies aktivieren"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Links */}
					<div className="flex flex-wrap gap-2 items-center text-[12px] md:text-[14px]">
						<Link
							href="/datenschutz"
							className="font-geist-mono font-normal text-[#1C1C1C] underline hover:opacity-70"
						>
							Datenschutzerklärung
						</Link>
						<span className="text-[#4a4a4a]">•</span>
						<button
							type="button"
							onClick={() => setShowDetails(!showDetails)}
							className="font-geist-mono font-normal text-[#1C1C1C] underline hover:opacity-70 bg-transparent border-none cursor-pointer"
						>
							{showDetails ? 'Weniger anzeigen' : 'Details anzeigen'}
						</button>
					</div>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
						{showDetails ? (
							<>
								<button
									type="button"
									onClick={handleAcceptSelected}
									className="flex-1 px-6 py-3 bg-[#1C1C1C] text-[#ecebe6] font-darker-grotesque font-black text-[14px] md:text-[16px] uppercase hover:opacity-90 transition-opacity"
								>
									Auswahl speichern
								</button>
								<button
									type="button"
									onClick={acceptNecessary}
									className="px-6 py-3 bg-transparent border-[3px] border-[#1C1C1C] text-[#1C1C1C] font-darker-grotesque font-black text-[14px] md:text-[16px] uppercase hover:opacity-70 transition-opacity"
								>
									Nur notwendige
								</button>
							</>
						) : (
							<>
								<button
									type="button"
									onClick={acceptAll}
									className="flex-1 px-6 py-3 bg-[#1C1C1C] text-[#ecebe6] font-darker-grotesque font-black text-[14px] md:text-[16px] uppercase hover:opacity-90 transition-opacity"
								>
									Alle akzeptieren
								</button>
								<button
									type="button"
									onClick={acceptNecessary}
									className="px-6 py-3 bg-transparent border-[3px] border-[#1C1C1C] text-[#1C1C1C] font-darker-grotesque font-black text-[14px] md:text-[16px] uppercase hover:opacity-70 transition-opacity"
								>
									Nur notwendige
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

