import { cn } from '@/lib/utils'
import { PlayIcon } from './play-icon'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	className?: string
	variant?: 'default' | 'secondary'
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
}

export function Button({
	children,
	onClick,
	className,
	variant = 'default',
	type = 'button',
	disabled = false,
}: ButtonProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if ((e.key === 'Enter' || e.key === ' ') && onClick) {
			e.preventDefault()
			onClick()
		}
	}

	return (
		<button
			type={type}
			onClick={onClick}
			onKeyDown={handleKeyDown}
			disabled={disabled}
			className={cn(
				'group flex gap-[14.897px] items-center px-[16.552px] py-[8.276px] border-[4px] bg-transparent transition-colors duration-200',
				disabled && 'opacity-50 cursor-not-allowed',
				variant === 'default'
					? 'border-[#E34A6F] hover:bg-[#E34A6F] hover:border-[#E34A6F] cursor-pointer'
					: 'border-[#4a4a4a] hover:bg-[#4a4a4a] hover:border-[#4a4a4a] cursor-pointer',
				className
			)}
		>
			<span
				className={cn(
					'font-darker-grotesque font-black text-[18px] md:text-[20px] lg:text-[24.828px] transition-colors duration-200 uppercase',
					variant === 'default'
						? 'text-[#E34A6F] group-hover:text-[#1C1C1C]'
						: 'text-[#4a4a4a] group-hover:text-white'
				)}
			>
				{children}
			</span>
			<PlayIcon
				className={cn(
					'w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24.828px] lg:h-[24.828px] transition-colors duration-200',
					variant === 'default'
						? 'fill-[#E34A6F] group-hover:fill-[#1C1C1C]'
						: 'fill-[#4a4a4a] group-hover:fill-white'
				)}
			/>
		</button>
	)
}

