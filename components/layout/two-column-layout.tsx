import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface TwoColumnLayoutProps {
	leftContent: ReactNode
	rightContent: ReactNode
	mobileContent?: ReactNode
	reversed?: boolean
	className?: string
}

export function TwoColumnLayout({
	leftContent,
	rightContent,
	mobileContent,
	reversed = false,
	className,
}: TwoColumnLayoutProps) {
	const mobile = mobileContent || (
		<div className="flex flex-col gap-4 items-center w-full">
			{leftContent}
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

			{/* Desktop Layout: Horizontal - 2 equal boxes */}
			<div className="hidden md:flex items-stretch w-full min-h-[400px] relative px-0">
				{reversed ? (
					<>
						<div className="flex items-center justify-center flex-1">{rightContent}</div>
						<div className="flex items-center justify-center flex-1">{leftContent}</div>
					</>
				) : (
					<>
						<div className="flex items-center justify-center flex-1">{leftContent}</div>
						<div className="flex items-center justify-center flex-1">{rightContent}</div>
					</>
				)}
			</div>
			{/* 1 Divider to divide container into 2 equal parts - positioned at 1/2, from top to bottom */}
			<div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-[#cfcfcf] pointer-events-none -translate-x-1/2" />
		</div>
	)
}

