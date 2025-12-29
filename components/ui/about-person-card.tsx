import Image from 'next/image'
import { cn } from '@/lib/utils'
import { BookingButton } from '@/components/ui/booking-button'

interface AboutPersonCardProps {
	image: string
	imageAlt: string
	text: string
	textPosition: 'left' | 'right'
}

export function AboutPersonCard({
	image,
	imageAlt,
	text,
	textPosition,
}: AboutPersonCardProps) {
	return (
		<div className="border border-[#cfcfcf] border-solid relative w-full">
			{/* Mobile: Stacked - Image above, Text below */}
			<div className="md:hidden flex flex-col gap-6 items-center w-full px-2 py-4">
				<div className="relative w-full h-[300px] overflow-hidden">
					<Image
						src={image}
						alt={imageAlt}
						fill
						className="object-cover"
						sizes="100vw"
					/>
				</div>
				<div className="flex flex-col gap-4 font-geist-mono font-normal text-[16px] text-[#1C1C1C] w-full">
					<p className="leading-relaxed">{text}</p>
					<BookingButton />
				</div>
			</div>

			{/* Desktop: Side by Side - Image and Text */}
			<div className="hidden md:flex items-stretch w-full min-h-[400px] relative">
				{textPosition === 'left' ? (
					<>
						{/* Text Left */}
						<div className="flex items-center justify-center w-[50%] px-8 py-8">
							<div className="flex flex-col gap-4 font-geist-mono font-normal text-[18px] lg:text-[20px] text-[#1C1C1C]">
								<p className="leading-relaxed">{text}</p>
								<BookingButton />
							</div>
						</div>
						{/* Image Right */}
						<div className="relative w-[50%] overflow-hidden">
							<Image
								src={image}
								alt={imageAlt}
								fill
								className="object-cover"
								sizes="50vw"
							/>
						</div>
					</>
				) : (
					<>
						{/* Image Left */}
						<div className="relative w-[50%] overflow-hidden">
							<Image
								src={image}
								alt={imageAlt}
								fill
								className="object-cover"
								sizes="50vw"
							/>
						</div>
						{/* Text Right */}
						<div className="flex items-center justify-center w-[50%] px-8 py-8">
							<div className="flex flex-col gap-4 font-geist-mono font-normal text-[18px] lg:text-[20px] text-[#1C1C1C]">
								<p className="leading-relaxed">{text}</p>
								<BookingButton />
							</div>
						</div>
					</>
				)}
				{/* Vertical Divider */}
				<div className="absolute inset-y-0 left-1/2 w-px bg-[#cfcfcf] pointer-events-none -translate-x-1/2" />
			</div>
		</div>
	)
}

