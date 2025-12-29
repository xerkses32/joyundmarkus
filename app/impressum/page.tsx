import { SectionHeading } from '@/components/ui/section-heading'
import Link from 'next/link'
import { metadata } from './metadata'
import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data'

export { metadata }

export default function ImpressumPage() {
	return (
		<div className="flex flex-col min-h-screen bg-[#ecebe6]">
			<BreadcrumbStructuredData
				items={[
					{ name: 'Home', url: '/' },
					{ name: 'Impressum', url: '/impressum' },
				]}
			/>
			<main className="flex flex-col gap-4 md:gap-6 lg:gap-[10px] items-center px-2 md:px-4 lg:px-8 py-4 md:py-6 lg:py-[20px] flex-1 w-full">
				<div className="w-full max-w-[1440px] border-[3px] border-[#1C1C1C]">
					<div className="flex flex-col items-center w-full p-4 md:p-6 lg:p-8">
						<div className="w-full max-w-4xl">
							<div className="mb-8 md:mb-12">
								<SectionHeading>IMPRESSUM</SectionHeading>
							</div>

							<div className="flex flex-col gap-6 md:gap-8 font-geist-mono font-normal text-[16px] md:text-[18px] text-[#1C1C1C] leading-relaxed">
								{/* Informationspflicht laut § 5 TMG */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Informationspflicht laut § 5 TMG
									</h2>
									<p>
										Joy Fackler
										<br />
										Philipp-Scheidemannstr. 5
										<br />
										86199 Augsburg, Deutschland
										<br />
										Tel.: 01749985004
										<br />
										E-Mail: joyundmarkus@googlemail.com
									</p>
								</section>

								{/* Aufsichtsbehörde */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Aufsichtsbehörde
									</h2>
									<p>
										Gewerbeamt Augsburg
										<br />
										Regierung von Schwaben, Gewerbeaufsichtsamt
										<br />
										Fronhof 10
										<br />
										86152 Augsburg
										<br />
										Webseite:{' '}
										<a
											href="https://www.augsburg.de/buergerservice-rathaus/buergerservice/aemter-behoerden/nichtstaedtische-behoerden/r/regierung-von-schwaben-gewerbeaufsichtsamt"
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:opacity-70"
										>
											https://www.augsburg.de/buergerservice-rathaus/buergerservice/aemter-behoerden/nichtstaedtische-behoerden/r/regierung-von-schwaben-gewerbeaufsichtsamt
										</a>
									</p>
								</section>

								{/* Berufsbezeichnung */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Berufsbezeichnung
									</h2>
									<p>
										Berufsbezeichnung: Musiker
										<br />
										Vertreten durch: Joy Fackler
									</p>
								</section>

								{/* Datenschutz Verantwortliche */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Datenschutz Verantwortliche
									</h2>
									<p>
										Kontaktdaten der für den Datenschutz verantwortlichen Stelle:
									</p>
									<p className="mt-2">
										Joy Fackler
										<br />
										Philipp-Scheidemannstr. 5
										<br />
										86199 Augsburg
										<br />
										E-Mail-Adresse: joyundmarkus@googlemail.com
									</p>
								</section>

								{/* EU-Streitschlichtung */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										EU-Streitschlichtung
									</h2>
									<p>
										Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten
										(ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform
										(OS-Plattform) informieren. Verbraucher haben die Möglichkeit, Beschwerden an die
										Online Streitbeilegungsplattform der Europäischen Kommission unter{' '}
										<a
											href="http://ec.europa.eu/odr"
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:opacity-70"
										>
											http://ec.europa.eu/odr
										</a>{' '}
										zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem
										Impressum.
									</p>
									<p className="mt-4">
										Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet
										sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
										teilzunehmen.
									</p>
								</section>

								{/* Haftung für Inhalte */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Haftung für Inhalte dieser Website
									</h2>
									<p>
										Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte
										und aktuelle Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind
										wir als Diensteanbieter für eigene Informationen, die wir zur Nutzung bereitstellen,
										nach den allgemeinen Gesetzen verantwortlich. Leider können wir keine Haftung für
										die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die
										seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10
										sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten
										Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
										rechtswidrige Tätigkeit hinweisen. Unsere Verpflichtungen zur Entfernung von
										Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen
										Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im
										Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt. Sollten Ihnen
										problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu
										kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die
										Kontaktdaten im Impressum.
									</p>
								</section>

								{/* Haftung für Links */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Haftung für Links auf dieser Website
									</h2>
									<p>
										Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht
										verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir
										keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche
										Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort
										entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden. Wenn Ihnen
										rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren.
										Sie finden die Kontaktdaten im Impressum.
									</p>
								</section>

								{/* Urheberrechtshinweis */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Urheberrechtshinweis
									</h2>
									<p>
										Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem
										Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die
										Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel
										auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die
										unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
										Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen,
										bitten wir Sie uns zu kontaktieren.
									</p>
								</section>

								{/* Bildernachweis */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										Bildernachweis
									</h2>
									<p>
										Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
										Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen: Andi Ziller
									</p>
								</section>

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

