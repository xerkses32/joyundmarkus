'use client'

interface VideoSkeletonProps {
	count?: number
}

export function VideoSkeleton({ count = 1 }: VideoSkeletonProps) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<div
					key={index}
					className="h-[200px] md:h-[250px] lg:h-[319px] relative shrink-0 w-full md:w-1/2 lg:w-[746px] snap-start bg-[#cfcfcf] animate-pulse"
				>
					{/* Skeleton Content */}
					<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
						{/* Play Icon Skeleton */}
						<div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-[#b1b1b1] flex items-center justify-center">
							<svg
								className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#ecebe6]"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M8 5v14l11-7z" />
							</svg>
						</div>
						{/* Text Lines */}
						<div className="flex flex-col gap-2 items-center w-full max-w-xs">
							<div className="h-4 w-3/4 bg-[#b1b1b1] rounded" />
							<div className="h-3 w-1/2 bg-[#b1b1b1] rounded" />
						</div>
					</div>
					{/* Border */}
					<div className="absolute inset-0 border-[3px] border-[#1C1C1C] pointer-events-none" />
				</div>
			))}
		</>
	)
}

