import { SectionHeading } from '@/components/ui/section-heading'
import Link from 'next/link'
import { metadata } from './metadata'
import { BreadcrumbStructuredData } from '@/components/seo/breadcrumb-structured-data'

export { metadata }

export default function DatenschutzPage() {
	return (
		<div className="flex flex-col min-h-screen bg-[#ecebe6]">
			<BreadcrumbStructuredData
				items={[
					{ name: 'Home', url: '/' },
					{ name: 'Datenschutzerklärung', url: '/datenschutz' },
				]}
			/>
			<main className="flex flex-col gap-4 md:gap-6 lg:gap-[10px] items-center px-2 md:px-4 lg:px-8 py-4 md:py-6 lg:py-[20px] flex-1 w-full">
				<div className="w-full max-w-[1440px] border-[3px] border-[#1C1C1C]">
					<div className="flex flex-col items-center w-full p-4 md:p-6 lg:p-8">
						<div className="w-full max-w-4xl">
							<div className="mb-8 md:mb-12">
								<SectionHeading>DATENSCHUTZERKLÄRUNG</SectionHeading>
							</div>

							<div className="flex flex-col gap-6 md:gap-8 font-geist-mono font-normal text-[16px] md:text-[18px] text-[#1C1C1C] leading-relaxed">
								{/* 1. Verantwortlicher */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										1. Verantwortlicher
									</h2>
									<p>
										Verantwortlich für die Datenverarbeitung auf dieser Website ist:
									</p>
									<p className="mt-2">
										Joy Fackler
										<br />
										Philipp-Scheidemannstr. 5
										<br />
										86199 Augsburg, Deutschland
										<br />
										E-Mail: joyundmarkus@googlemail.com
										<br />
										Tel.: 01749985004
									</p>
								</section>

								{/* 2. Allgemeine Hinweise */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										2. Allgemeine Hinweise zur Datenverarbeitung
									</h2>
									<p>
										Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir
										verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
										Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren
										wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
										Website.
									</p>
								</section>

								{/* 3. Kontaktformular */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										3. Kontaktformular
									</h2>
									<p>
										Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
										aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
										zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
										gespeichert.
									</p>
									<p className="mt-4">
										<strong>Verarbeitete Daten:</strong>
									</p>
									<ul className="list-disc list-inside mt-2 ml-4">
										<li>E-Mail-Adresse</li>
										<li>Nachrichtentext</li>
									</ul>
									<p className="mt-4">
										<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung
										bzw. Erfüllung eines Vertrags)
									</p>
									<p className="mt-4">
										<strong>Datenübertragung an Drittanbieter:</strong>
									</p>
									<p className="mt-2">
										<strong>Datenübertragung an Getform:</strong>
									</p>
									<p className="mt-2">
										Ihre Daten werden zur Verarbeitung an den Dienstleister Getform (Getform Inc., 548
										Market St, PMB 77519, San Francisco, CA 94104-5401, USA) übertragen. Getform ist
										ein Dienst zur Verarbeitung von Formularanfragen. Die Datenübertragung erfolgt
										verschlüsselt über HTTPS.
									</p>
									<p className="mt-2">
										Getform verarbeitet Ihre Daten im Auftrag und gemäß unseren Anweisungen. Die
										Rechtsgrundlage für die Datenübertragung an Getform ist Art. 6 Abs. 1 lit. b DSGVO
										(Vertragsanbahnung bzw. Erfüllung eines Vertrags) in Verbindung mit Art. 28 DSGVO
										(Auftragsverarbeitung).
									</p>
									<p className="mt-2">
										Weitere Informationen zum Datenschutz bei Getform finden Sie unter:{' '}
										<a
											href="https://getform.io/privacy"
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:opacity-70"
										>
											https://getform.io/privacy
										</a>
									</p>
									<p className="mt-4">
										<strong>Speicherdauer:</strong> Ihre Anfragen werden in unserem E-Mail-Postfach
										gespeichert, um auf Ihre Nachrichten verweisen zu können und für interne
										Zwecke. Die Daten werden gelöscht, sobald sie für diese Zwecke nicht mehr
										erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
										Sie können jederzeit die Löschung Ihrer Daten verlangen (siehe Abschnitt 8).
									</p>
								</section>

								{/* 4. YouTube-Embeds */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										4. YouTube-Embeds
									</h2>
									<p>
										Auf unserer Website verwenden wir eingebettete YouTube-Videos. YouTube ist ein
										Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
										Irland.
									</p>
									<p className="mt-4">
										<strong>Verarbeitete Daten:</strong>
									</p>
									<ul className="list-disc list-inside mt-2 ml-4">
										<li>IP-Adresse</li>
										<li>Geräteinformationen</li>
										<li>Browsertyp und -version</li>
										<li>Besuchte Seiten</li>
										<li>Datum und Uhrzeit des Zugriffs</li>
									</ul>
									<p className="mt-4">
										<strong>Zweck:</strong> Die Einbindung von YouTube-Videos dient der Darstellung
										unserer Inhalte und der Verbesserung der Nutzererfahrung.
									</p>
									<p className="mt-4">
										<strong>Cookies:</strong> Beim Abruf einer Seite mit eingebetteten YouTube-Videos
										werden Cookies von YouTube/Google gesetzt. Diese dienen unter anderem der
										Analyse des Nutzungsverhaltens, der Personalisierung von Inhalten und der
										Werbeanzeige.
									</p>
									<p className="mt-4">
										<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes
										Interesse an der Darstellung unserer Inhalte)
									</p>
									<p className="mt-4">
										<strong>Widerruf:</strong> Sie können der Datenverarbeitung durch YouTube
										widersprechen, indem Sie die entsprechenden Cookies in Ihren
										Browsereinstellungen deaktivieren oder die Erweiterung{' '}
										<a
											href="https://tools.google.com/dlpage/gaoptout"
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:opacity-70"
										>
											Google Opt-Out
										</a>{' '}
										verwenden.
									</p>
									<p className="mt-4">
										Weitere Informationen zum Datenschutz bei YouTube/Google finden Sie unter:{' '}
										<a
											href="https://policies.google.com/privacy"
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:opacity-70"
										>
											https://policies.google.com/privacy
										</a>
									</p>
								</section>

								{/* 5. Externe Links */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										5. Externe Links
									</h2>
									<p>
										Unsere Website enthält Links zu externen Websites (z.B. Spotify, Apple Music,
										YouTube, Amazon Music). Wir haben keinen Einfluss auf die Datenerhebung und
										-verarbeitung durch diese Drittanbieter.
									</p>
									<p className="mt-4">
										Wenn Sie auf einen externen Link klicken, werden Sie auf die Website des
										jeweiligen Anbieters weitergeleitet. Bitte beachten Sie die Datenschutzerklärungen
										der jeweiligen Anbieter:
									</p>
									<ul className="list-disc list-inside mt-2 ml-4">
										<li>
											Spotify:{' '}
											<a
												href="https://www.spotify.com/de/legal/privacy-policy/"
												target="_blank"
												rel="noopener noreferrer"
												className="underline hover:opacity-70"
											>
												Datenschutzerklärung
											</a>
										</li>
										<li>
											Apple Music:{' '}
											<a
												href="https://www.apple.com/de/privacy/"
												target="_blank"
												rel="noopener noreferrer"
												className="underline hover:opacity-70"
											>
												Datenschutzerklärung
											</a>
										</li>
										<li>
											YouTube:{' '}
											<a
												href="https://policies.google.com/privacy"
												target="_blank"
												rel="noopener noreferrer"
												className="underline hover:opacity-70"
											>
												Datenschutzerklärung
											</a>
										</li>
										<li>
											Amazon Music:{' '}
											<a
												href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
												target="_blank"
												rel="noopener noreferrer"
												className="underline hover:opacity-70"
											>
												Datenschutzerklärung
											</a>
										</li>
									</ul>
								</section>

								{/* 6. Server-Logs */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										6. Server-Log-Dateien
									</h2>
									<p>
										Der Provider der Seiten erhebt und speichert automatisch Informationen in
										sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
									</p>
									<p className="mt-4">
										<strong>Verarbeitete Daten:</strong>
									</p>
									<ul className="list-disc list-inside mt-2 ml-4">
										<li>Browsertyp und -version</li>
										<li>verwendetes Betriebssystem</li>
										<li>Referrer URL</li>
										<li>Hostname des zugreifenden Rechners</li>
										<li>Uhrzeit der Serveranfrage</li>
										<li>IP-Adresse</li>
									</ul>
									<p className="mt-4">
										<strong>Zweck:</strong> Diese Daten dienen der Sicherstellung eines störungsfreien
										Betriebs der Seite, der technischen Administration der Netzinfrastruktur sowie
										zur Optimierung des Internetangebots.
									</p>
									<p className="mt-4">
										<strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes
										Interesse)
									</p>
									<p className="mt-4">
										<strong>Speicherdauer:</strong> Die Log-Dateien werden für maximal 7 Tage
										gespeichert und anschließend gelöscht.
									</p>
								</section>

								{/* 7. Cookies */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										7. Cookies
									</h2>
									<p>
										Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem
										Endgerät gespeichert werden.
									</p>
									<p className="mt-4">
										<strong>Technisch notwendige Cookies:</strong> Einige Cookies sind für den
										Betrieb der Website technisch notwendig und können nicht deaktiviert werden.
									</p>
									<p className="mt-4">
										<strong>Cookies von Drittanbietern:</strong> Durch die Einbindung von
										YouTube-Videos werden Cookies von Google/YouTube gesetzt. Diese dienen der
										Analyse des Nutzungsverhaltens und der Personalisierung von Inhalten.
									</p>
									<p className="mt-4">
										Sie können Cookies in Ihren Browsereinstellungen jederzeit löschen oder die
										Speicherung von Cookies generell ablehnen. Bitte beachten Sie, dass die
										Funktionalität der Website dadurch eingeschränkt sein kann.
									</p>
								</section>

								{/* 8. Ihre Rechte */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										8. Ihre Rechte
									</h2>
									<p>Ihnen stehen bezüglich Ihrer Daten grundsätzlich die folgenden Rechte zu:</p>
									<ul className="list-disc list-inside mt-4 ml-4 space-y-2">
										<li>
											<strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie haben das Recht,
											Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu erhalten.
										</li>
										<li>
											<strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie haben das Recht,
											die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns
											gespeicherten personenbezogenen Daten zu verlangen.
										</li>
										<li>
											<strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie haben das Recht, die
											Löschung Ihrer personenbezogenen Daten zu verlangen, soweit keine gesetzlichen
											Aufbewahrungspflichten entgegenstehen.
										</li>
										<li>
											<strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie
											haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
											Daten zu verlangen.
										</li>
										<li>
											<strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie haben das
											Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und
											maschinenlesbaren Format zu erhalten.
										</li>
										<li>
											<strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie haben das Recht, der
											Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
										</li>
										<li>
											<strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Wenn die
											Datenverarbeitung auf einer Einwilligung beruht, haben Sie das Recht, diese
											jederzeit zu widerrufen.
										</li>
									</ul>
									<p className="mt-4">
										Um diese Rechte auszuüben, können Sie sich jederzeit an uns wenden. Die
										Kontaktdaten finden Sie im Impressum.
									</p>
								</section>

								{/* 9. Beschwerderecht */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										9. Beschwerderecht bei der Aufsichtsbehörde
									</h2>
									<p>
										Sie haben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde
										einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
										personenbezogenen Daten gegen die DSGVO verstößt.
									</p>
									<p className="mt-4">
										<strong>Zuständige Aufsichtsbehörde in Deutschland:</strong>
									</p>
									<p className="mt-2">
										Die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit
										<br />
										Graurheindorfer Str. 153
										<br />
										53117 Bonn
										<br />
										Telefon: +49 (0)228 997799-0
										<br />
										E-Mail: poststelle@bfdi.bund.de
										<br />
										Website:{' '}
										<a
											href="https://www.bfdi.bund.de"
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:opacity-70"
										>
											https://www.bfdi.bund.de
										</a>
									</p>
								</section>

								{/* 10. Änderungen */}
								<section>
									<h2 className="font-darker-grotesque font-black text-[24px] md:text-[28px] mb-4">
										10. Änderungen dieser Datenschutzerklärung
									</h2>
									<p>
										Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
										aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
										Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt
										dann die neue Datenschutzerklärung.
									</p>
									<p className="mt-4">
										<strong>Stand:</strong> {new Date().toLocaleDateString('de-DE', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
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

