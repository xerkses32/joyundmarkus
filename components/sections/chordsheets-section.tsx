import Image from 'next/image'
import { SectionHeading } from '@/components/ui/section-heading'
import { SupportButton } from '@/components/ui/support-button'
import type { ChordSheet } from '@/types/chordsheet'

interface ChordsheetsSectionProps {
	chordsheets: ChordSheet[]
}

export function ChordsheetsSection({ chordsheets }: ChordsheetsSectionProps) {
	return (
		<div className="flex flex-col items-center w-full relative">
			{/* Background Container - Only for Mobile */}
			<div className="absolute inset-0 bg-[#ecebe6] min-h-[800px] md:hidden w-full max-w-[1440px] overflow-hidden z-0">
				<div className="absolute inset-0">
					<Image
						src="/images/Color.png"
						alt=""
						fill
						className="object-cover"
						sizes="100vw"
						aria-hidden="true"
					/>
				</div>
			</div>

			{/* Section Heading */}
			<div className="relative z-20 flex items-center justify-center px-0 pb-4 md:pb-5 lg:pb-[20px] pt-16 md:pt-24 lg:pt-[380px] w-full">
				<SectionHeading>CHORDSHEETS</SectionHeading>
			</div>

			{/* Mobile: Simple List with Glass Effect */}
			<div className="relative z-20 md:hidden w-full px-2 pb-8">
				<div className="backdrop-blur-[20px] backdrop-filter backdrop-saturate-[300%] bg-[#ecebe6]/80 border-[3px] border-[#1C1C1C] flex flex-col gap-4 p-4 w-full shadow-lg">
					{chordsheets.map((sheet) => (
						<div
							key={sheet.id}
							className="flex flex-col gap-2 pb-4 border-b border-[#cfcfcf] last:border-0 last:pb-0"
						>
							<div className="font-darker-grotesque font-black text-[16px] text-[#1C1C1C]">
								{sheet.name}
							</div>
							<div className="flex items-center justify-between">
								<span className="font-geist-mono font-normal text-[14px] text-[#1C1C1C]">
									Anzahl: {sheet.anzahl}
								</span>
								<a
									href={sheet.downloadUrl}
									download={sheet.downloadUrl.startsWith('/') ? sheet.name.replace(/\s+/g, '-').toLowerCase() : undefined}
									className="font-geist-mono font-normal text-[14px] text-[#1C1C1C] underline hover:opacity-70 uppercase transition-opacity"
									target={sheet.downloadUrl.startsWith('http') ? '_blank' : undefined}
									rel={sheet.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
								>
									DOWNLOAD
								</a>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Desktop: Table with Background */}
			<div className="relative z-20 hidden md:flex items-center justify-center w-full">
				{/* Background Container with Table inside */}
				<div className="bg-[#ecebe6] h-auto min-h-[800px] md:h-[1215.999px] relative w-full max-w-[1190px] overflow-hidden">
					{/* Background Image */}
					<div className="absolute inset-0">
						<Image
							src="/images/Color.png"
							alt=""
							fill
							className="object-cover"
							sizes="(max-width: 1280px) 100vw, 1190px"
						/>
					</div>

					{/* Table Container - Centered inside Background */}
					<div className="absolute flex items-center justify-center left-1/2 top-[200px] md:top-[400px] lg:top-[531.3px] -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[859px] max-w-[859px]">
						<div className="backdrop-blur-[20px] backdrop-filter backdrop-saturate-[300%] bg-[#ecebe6]/80 border-[3px] border-[#1C1C1C] flex flex-col gap-4 md:gap-5 lg:gap-[20px] items-start overflow-clip p-4 md:p-5 lg:p-[20px] w-full shadow-lg">
							{/* Table Headers */}
							<div className="flex font-darker-grotesque font-black gap-4 md:gap-6 lg:gap-[40px] items-start leading-[normal] text-[14px] md:text-[16px] lg:text-[20px] text-[#1C1C1C] w-full">
								<p className="flex-1 min-w-0 max-w-[50%] md:max-w-[55%] lg:max-w-[60%]">NAME</p>
								<p className="w-14 md:w-[72px] lg:w-[80px] text-center shrink-0">ANZAHL</p>
								<p className="w-20 md:w-24 lg:w-[120px] text-center shrink-0 uppercase">DOWNLOAD</p>
							</div>

							{/* Header Divider */}
							<div className="h-px w-full bg-[#cfcfcf]" />

							{/* Table Rows */}
							{chordsheets.map((sheet, index) => (
								<div key={sheet.id} className="w-full">
									<div className="flex font-geist-mono font-normal gap-4 md:gap-6 lg:gap-[40px] items-start leading-[normal] text-[14px] md:text-[16px] lg:text-[20px] text-[#1C1C1C] w-full">
										<p className="flex-1 min-w-0 max-w-[50%] md:max-w-[55%] lg:max-w-[60%] break-words">{sheet.name}</p>
										<p className="text-center w-14 md:w-[72px] lg:w-[80px] shrink-0">{sheet.anzahl}</p>
										<a
											href={sheet.downloadUrl}
											download={sheet.downloadUrl.startsWith('/') ? sheet.name.replace(/\s+/g, '-').toLowerCase() : undefined}
											className="text-center text-nowrap hover:underline w-20 md:w-24 lg:w-[120px] shrink-0 uppercase transition-opacity hover:opacity-70"
											target={sheet.downloadUrl.startsWith('http') ? '_blank' : undefined}
											rel={sheet.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
										>
											DOWNLOAD
										</a>
									</div>
									{index < chordsheets.length - 1 && (
										<div className="h-px w-full bg-[#cfcfcf] mt-4 md:mt-5 lg:mt-[20px]" />
									)}
								</div>
							))}
						</div>
					</div>

					{/* Support Button - Centered unter Table auf Background */}
					<div className="absolute flex items-center justify-center left-1/2 top-[650px] md:top-[850px] lg:top-[1000px] -translate-x-1/2 z-10">
						<div className="scale-75 md:scale-75 lg:scale-80">
							<SupportButton />
						</div>
					</div>
				</div>
			</div>
			{/* Support Button für Mobile */}
			<div className="relative z-20 flex items-center justify-center pb-4 md:hidden pt-4">
				<div className="scale-75">
					<SupportButton />
				</div>
			</div>
		</div>
	)
}
