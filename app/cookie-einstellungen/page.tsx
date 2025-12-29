'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { useCookieConsent } from '@/lib/hooks/use-cookie-consent'
import Link from 'next/link'

export default function CookieEinstellungenPage() {
	const { consent, hasConsented, acceptCustom, revokeConsent } = useCookieConsent()
	const [marketingEnabled, setMarketingEnabled] = useState(consent?.marketing ?? false)

	const handleSave = () => {
		acceptCustom(marketingEnabled)
		alert('Ihre Cookie-Einstellungen wurden gespeichert.')
	}

	return (
		<div className="flex flex-col min-h-screen bg-[#ecebe6]">
			<main className="flex flex-col gap-4 md:gap-6 lg:gap-[10px] items-center px-2 md:px-4 lg:px-8 py-4 md:py-6 lg:py-[20px] flex-1 w-full">
				<div className="w-full max-w-[1440px] border-[3px] border-[#1C1C1C]">
					<div className="flex flex-col items-center w-full p-4 md:p-6 lg:p-8">
						<div className="w-full max-w-4xl">
							<div className="mb-8 md:mb-12">
								<SectionHeading>COOKIE-EINSTELLUNGEN</SectionHeading>
							</div>

							<div className="flex flex-col gap-6 md:gap-8 font-geist-mono font-normal text-[16px] md:text-[18px] text-[#1C1C1C] leading-relaxed">
								<p>
									Hier können Sie Ihre Cookie-Einstellungen jederzeit anpassen. Ihre Auswahl wird in
									Ihrem Browser gespeichert.
								</p>

								{/* Cookie-Kategorien */}
								<div className="flex flex-col gap-6">
									{/* Technisch notwendige Cookies */}
									<div className="flex flex-col gap-4 p-6 bg-white border border-[#cfcfcf] rounded-lg">
										<div className="flex items-start justify-between">
											<div className="flex flex-col gap-2 flex-1">
												<h3 className="font-darker-grotesque font-black text-[20px] text-[#1C1C1C]">
													Technisch notwendige Cookies
												</h3>
												<p className="font-geist-mono font-normal text-[14px] text-[#4a4a4a]">
													Diese Cookies sind für die Grundfunktionen der Website erforderlich und
													können nicht deaktiviert werden. Sie werden automatisch gesetzt, wenn Sie
													die Website besuchen.
												</p>
											</div>
											<div className="ml-4">
												<span className="font-darker-grotesque font-black text-[16px] text-[#1C1C1C]">
													Immer aktiv
												</span>
											</div>
										</div>
									</div>

									{/* Marketing Cookies */}
									<div className="flex flex-col gap-4 p-6 bg-white border border-[#cfcfcf] rounded-lg">
										<div className="flex items-start justify-between">
											<div className="flex flex-col gap-2 flex-1">
												<h3 className="font-darker-grotesque font-black text-[20px] text-[#1C1C1C]">
													Marketing / Tracking Cookies
												</h3>
												<p className="font-geist-mono font-normal text-[14px] text-[#4a4a4a]">
													Diese Cookies werden von YouTube/Google gesetzt, um Ihr Nutzungsverhalten zu
													analysieren und personalisierte Inhalte anzuzeigen. Wenn Sie diese Cookies
													ablehnen, werden YouTube-Videos nicht automatisch geladen.
												</p>
												<p className="font-geist-mono font-normal text-[12px] text-[#4a4a4a] mt-2">
													Weitere Informationen finden Sie in unserer{' '}
													<Link
														href="/datenschutz"
														className="underline hover:opacity-70"
													>
														Datenschutzerklärung
													</Link>
													.
												</p>
											</div>
											<div className="ml-4">
												<label className="flex items-center cursor-pointer">
													<input
														type="checkbox"
														checked={marketingEnabled}
														onChange={(e) => setMarketingEnabled(e.target.checked)}
														className="w-6 h-6 cursor-pointer accent-[#1C1C1C]"
														aria-label="Marketing Cookies aktivieren"
													/>
												</label>
											</div>
										</div>
									</div>
								</div>

								{/* Buttons */}
								<div className="flex flex-col sm:flex-row gap-4 mt-6">
									<button
										type="button"
										onClick={handleSave}
										className="px-8 py-4 bg-[#1C1C1C] text-[#ecebe6] font-darker-grotesque font-black text-[16px] uppercase hover:opacity-90 transition-opacity"
									>
										Einstellungen speichern
									</button>
									<button
										type="button"
										onClick={revokeConsent}
										className="px-8 py-4 bg-transparent border-[3px] border-[#1C1C1C] text-[#1C1C1C] font-darker-grotesque font-black text-[16px] uppercase hover:opacity-70 transition-opacity"
									>
										Alle Cookies ablehnen
									</button>
								</div>

								{/* Status */}
								{hasConsented && (
									<div className="mt-6 p-4 bg-[#ecebe6] border border-[#cfcfcf] rounded-lg">
										<p className="font-geist-mono font-normal text-[14px] text-[#4a4a4a]">
											<strong>Aktueller Status:</strong> Sie haben bereits Cookie-Einstellungen
											gespeichert. Ihre aktuelle Auswahl wird oben angezeigt.
										</p>
									</div>
								)}

								{/* Navigation zurück */}
								<div className="mt-12 pt-8 border-t border-[#cfcfcf]">
									<Link
										href="/"
										className="font-darker-grotesque font-black text-[18px] text-[#1C1C1C] underline hover:opacity-70 inline-block"
									>
										← Zurück zur Startseite
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

