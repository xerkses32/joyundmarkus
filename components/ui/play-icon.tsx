import { cn } from '@/lib/utils'

interface PlayIconProps {
	className?: string
	size?: number
}

export function PlayIcon({ className }: PlayIconProps) {
	return (
		<svg
			viewBox="-0.5 0 8 8"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('fill-[#E34A6F]', className)}
		>
			<polygon points="0.5 0 0.5 8 7.5 4" className="inherit" />
		</svg>
	)
}
