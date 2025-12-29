'use client'

import { ArrowIcon } from './arrow-icon'
import { cn } from '@/lib/utils'

interface ListenButtonProps {
	onClick?: () => void
	className?: string
	size?: 'small' | 'default'
}

export function ListenButton({ onClick, className, size = 'default' }: ListenButtonProps) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			onClick?.()
		}
	}

	return (
		<button
			onClick={onClick}
			onKeyDown={handleKeyDown}
			className={cn(
				'bg-[#4a4a4a] flex gap-[9px] items-center px-[10px] py-[5px] rounded-[5px] hover:opacity-90 transition-opacity',
				className
			)}
			aria-label="Listen to song"
			tabIndex={0}
		>
			<span className="font-libre-baskerville font-bold italic text-[13px] md:text-[14px] lg:text-[15px] text-white uppercase">
				Listen!
			</span>
			<ArrowIcon size={size === 'small' ? 12 : 14} className="w-3 h-4 md:w-3.5 md:h-5 lg:w-[14px] lg:h-[19px]" />
		</button>
	)
}

