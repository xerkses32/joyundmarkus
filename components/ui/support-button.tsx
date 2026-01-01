'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SupportModal } from './support-modal'
import { getPaypalUrl } from '@/lib/config'

interface SupportButtonProps {
	className?: string
	ariaLabel?: string
	paypalUrl?: string
}

export function SupportButton({
	className,
	ariaLabel = 'Uns unterstützen',
	paypalUrl,
}: SupportButtonProps) {
	const defaultPaypalUrl = paypalUrl || getPaypalUrl()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleOpen = () => {
		setIsModalOpen(true)
	}

	const handleClose = () => {
		setIsModalOpen(false)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			handleOpen()
		}
	}

	return (
		<>
			<button
				type="button"
				onClick={handleOpen}
				onKeyDown={handleKeyDown}
				aria-label={ariaLabel}
				className={cn(
					'inline-block hover:opacity-90 transition-opacity cursor-pointer p-0 m-0 border-0 bg-transparent',
					className
				)}
			>
				<div className="group flex gap-[14.897px] items-center px-[16.552px] py-[8.276px] border-[4px] bg-[#ecebe6] transition-colors duration-200 border-[#1C1C1C] hover:bg-[#1C1C1C] hover:border-[#ecebe6] cursor-pointer">
					<span className="font-darker-grotesque font-black text-[18px] md:text-[20px] lg:text-[24.828px] transition-colors duration-200 text-[#1C1C1C] group-hover:text-[#ecebe6] uppercase">
						UNTERSTÜTZEN
					</span>
					<svg
						viewBox="-0.5 0 8 8"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24.828px] lg:h-[24.828px] transition-colors duration-200 fill-[#1C1C1C] group-hover:fill-[#ecebe6]"
					>
						<polygon points="0.5 0 0.5 8 7.5 4" />
					</svg>
				</div>
			</button>

			<SupportModal isOpen={isModalOpen} onClose={handleClose} paypalUrl={defaultPaypalUrl} />
		</>
	)
}

