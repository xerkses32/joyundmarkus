import { cn } from '@/lib/utils'

interface HamburgerIconProps {
	isOpen: boolean
	className?: string
}

export function HamburgerIcon({ isOpen, className }: HamburgerIconProps) {
	return (
		<svg
			className={cn('transition-transform', className)}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{isOpen ? (
				// X icon when open
				<>
					<path
						d="M18 6L6 18M6 6L18 18"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</>
			) : (
				// Hamburger icon when closed
				<>
					<path
						d="M3 12H21M3 6H21M3 18H21"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</>
			)}
		</svg>
	)
}

