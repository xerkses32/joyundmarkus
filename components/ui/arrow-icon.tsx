interface ArrowIconProps {
	className?: string
	size?: number
	rotate?: number
}

export function ArrowIcon({ className, size = 14, rotate = 90 }: ArrowIconProps) {
	return (
		<div className={`flex items-center justify-center ${className || ''}`} style={{ width: `${size}px`, height: `${size + 5}px` }}>
			<div className="flex-none rotate-90" style={{ transform: `rotate(${rotate}deg)` }}>
				<svg
					width={size + 5}
					height={size}
					viewBox="0 0 19 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="block max-w-none"
					style={{ width: `${size + 5}px`, height: `${size}px` }}
				>
					<path
						d="M2.3265 0.622L11.6735 0.622C11.9973 0.622 12.268 0.892718 12.268 1.2165C12.268 1.54028 11.9973 1.811 11.6735 1.811H4.322L16.196 13.685C16.4241 13.9131 16.4241 14.2869 16.196 14.515C16.0814 14.6296 15.9332 14.687 15.785 14.687C15.6368 14.687 15.4886 14.6296 15.374 14.515L3.5 2.641V10C3.5 10.3238 3.22928 10.5945 2.9055 10.5945C2.58172 10.5945 2.311 10.3238 2.311 10V1.2165C2.311 0.892718 2.58172 0.622 2.9055 0.622H2.3265Z"
						fill="currentColor"
					/>
				</svg>
			</div>
		</div>
	)
}

