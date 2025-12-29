import { cn } from '@/lib/utils'

interface SpotifyButtonProps {
	href: string
	ariaLabel?: string
	className?: string
}

export function SpotifyButton({ href, ariaLabel = 'Auf Spotify anhören', className }: SpotifyButtonProps) {
	return (
		<a
			href={href}
			aria-label={ariaLabel}
			target="_blank"
			rel="noopener noreferrer"
			className={cn('inline-block hover:opacity-70 transition-opacity', className)}
		>
			<div className="group flex gap-[7px] items-center px-[8px] py-[4px] border-[4px] bg-transparent transition-colors duration-200 border-[#E34A6F] hover:bg-[#E34A6F] hover:border-[#E34A6F] cursor-pointer">
				<span className="font-darker-grotesque font-black text-[12px] md:text-[14px] lg:text-[16px] transition-colors duration-200 text-[#E34A6F] group-hover:text-[#1C1C1C] uppercase">
					SPOTIFY
				</span>
				<svg
					viewBox="-0.5 0 8 8"
					xmlns="http://www.w3.org/2000/svg"
					className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] transition-colors duration-200 fill-[#E34A6F] group-hover:fill-[#1C1C1C]"
				>
					<polygon points="0.5 0 0.5 8 7.5 4" />
				</svg>
			</div>
		</a>
	)
}

