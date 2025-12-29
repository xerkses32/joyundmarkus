import { cn } from '@/lib/utils'
import { PlayIcon } from './play-icon'

interface BadgeProps {
	children: React.ReactNode
	className?: string
	variant?: 'default' | 'yellow'
}

export function Badge({ children, className, variant = 'yellow' }: BadgeProps) {
	return (
		<div
			className={cn(
				'group flex gap-[14.897px] items-center px-[16.552px] py-[8.276px] border-[4px] bg-transparent transition-colors duration-200 cursor-pointer',
				variant === 'yellow'
					? 'border-[#E34A6F] hover:bg-[#E34A6F] hover:border-[#E34A6F]'
					: 'border-[#4a4a4a] hover:bg-[#4a4a4a] hover:border-[#4a4a4a]',
				className
			)}
		>
			<span
				className={cn(
					'font-darker-grotesque font-black text-[18px] md:text-[20px] lg:text-[24.828px] transition-colors duration-200',
					variant === 'yellow' ? 'text-[#E34A6F] group-hover:text-[#1C1C1C]' : 'text-[#4a4a4a] group-hover:text-white'
				)}
			>
				{children}
			</span>
			<PlayIcon
				className={cn(
					'w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24.828px] lg:h-[24.828px] transition-colors duration-200',
					variant === 'yellow' ? 'fill-[#E34A6F] group-hover:fill-[#1C1C1C]' : 'fill-[#4a4a4a] group-hover:fill-white'
				)}
			/>
		</div>
	)
}

