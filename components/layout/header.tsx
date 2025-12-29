import Image from 'next/image'

interface HeaderProps {}

export function Header({}: HeaderProps) {
	return (
		<div className="flex flex-col gap-[3px] items-center w-full mb-[20px]">
			<div className="flex flex-col items-center justify-center w-full">
				<h1 className="font-darker-grotesque font-bold text-[32px] md:text-[40px] lg:text-[50px] text-[#1C1C1C]">
					JOY&MARKUS
				</h1>
			</div>
			<div className="flex flex-col gap-[10px] items-center w-full">
				<div className="relative flex items-center justify-center">
					<Image
						src="/icons/musik-fr-die-kirche.svg"
						alt="Musik für die Kirche"
						width={260}
						height={21}
						className="h-auto"
					/>
				</div>
			</div>
		</div>
	)
}

