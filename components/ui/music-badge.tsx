import { cn } from '@/lib/utils'

interface MusicBadgeProps {
	children: React.ReactNode
	className?: string
}

export function MusicBadge({ children, className }: MusicBadgeProps) {
	return (
		<div
			className={cn(
				'inline-flex items-center justify-center px-[6px] py-[2px] md:px-[8px] md:py-[3px] bg-transparent border border-[#1C1C1C] border-solid',
				className
			)}
		>
			<span className="font-andale-mono text-[10px] md:text-[12px] text-[#1C1C1C] uppercase leading-none">
				{children}
			</span>
		</div>
	)
}

