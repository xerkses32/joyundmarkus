import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface ThreeColumnLayoutProps {
	leftContent: ReactNode
	middleContent: ReactNode
	rightContent: ReactNode
	mobileContent?: ReactNode
	reversed?: boolean
	className?: string
}

export function ThreeColumnLayout({
	leftContent,
	middleContent,
	rightContent,
	mobileContent,
	reversed = false,
	className,
}: ThreeColumnLayoutProps) {
	const mobile = mobileContent || (
		<div className="flex flex-col gap-4 items-center w-full">
			{leftContent}
			{middleContent}
			{rightContent}
		</div>
	)

	return (
		<div
			className={cn(
				'border border-[#cfcfcf] border-solid relative py-4 md:py-8 w-full',
				className
			)}
		>
			{/* Mobile Layout: Stacked */}
			<div className="flex flex-col md:hidden gap-4 items-center w-full px-2">
				{mobile}
			</div>

			{/* Desktop Layout: Horizontal - 3 equal boxes */}
			<div className="hidden md:flex items-stretch w-full min-h-[300px] relative px-0">
				{reversed ? (
					<>
						<div className="flex items-center justify-center flex-1">{rightContent}</div>
						<div className="flex items-center justify-center flex-1">{middleContent}</div>
						<div className="flex items-center justify-center flex-1">{leftContent}</div>
					</>
				) : (
					<>
						<div className="flex items-center justify-center flex-1">{leftContent}</div>
						<div className="flex items-center justify-center flex-1">{middleContent}</div>
						<div className="flex items-center justify-center flex-1">{rightContent}</div>
					</>
				)}
			</div>
			{/* 2 Dividers to divide container into 3 equal parts - positioned at 1/3 and 2/3, from top to bottom */}
			<div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-[#cfcfcf] pointer-events-none -translate-x-1/2" />
			<div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-[#cfcfcf] pointer-events-none -translate-x-1/2" />
		</div>
	)
}

