import { cn } from '@/lib/utils'

interface BookingButtonProps {
	className?: string
}

export function BookingButton({ className }: BookingButtonProps) {
	return (
		<a
			href="#kontakt"
			aria-label="Zur Kontaktseite"
			className={cn('inline-block hover:opacity-70 transition-opacity self-start', className)}
		>
			<div className="group flex gap-[7px] items-center px-[8px] py-[4px] border-[4px] bg-[#E34A6F] transition-colors duration-200 border-[#E34A6F] cursor-pointer">
				<span className="font-darker-grotesque font-black text-[12px] md:text-[14px] lg:text-[16px] transition-colors duration-200 text-[#1C1C1C] uppercase">
					BUCHEN
				</span>
				<svg
					viewBox="-0.5 0 8 8"
					xmlns="http://www.w3.org/2000/svg"
					className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] transition-colors duration-200 fill-[#1C1C1C]"
				>
					<polygon points="0.5 0 0.5 8 7.5 4" />
				</svg>
			</div>
		</a>
	)
}

