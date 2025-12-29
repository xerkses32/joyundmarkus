interface SectionHeadingProps {
	children: React.ReactNode
	className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
	return (
		<h2
			className={`font-darker-grotesque font-black text-[40px] md:text-[50px] lg:text-[70px] text-[#1C1C1C] ${className || ''}`}
		>
			{children}
		</h2>
	)
}

