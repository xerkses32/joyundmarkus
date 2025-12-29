import Image from 'next/image'
import { cn } from '@/lib/utils'

interface StreamingPlatform {
	name: string
	icon: string
	href: string
}

interface StreamingPlatformsProps {
	size?: 'small' | 'large'
	className?: string
	backgroundColor?: boolean
}

const PLATFORMS: StreamingPlatform[] = [
	{
		name: 'Spotify',
		icon: '/icons/spotify-svgrepo-com.svg',
		href: 'https://open.spotify.com/intl-de/artist/79z0xxbox5vf6HfkBM7kJY',
	},
	{
		name: 'Apple Music',
		icon: '/icons/apple-173-svgrepo-com.svg',
		href: 'https://music.apple.com/de/artist/joy-markus/1566339753',
	},
	{
		name: 'YouTube',
		icon: '/icons/youtube-svgrepo-com.svg',
		href: 'https://www.youtube.com/channel/UC_4Uj_411eCr8VAvCF7Csmw',
	},
	{
		name: 'Amazon Music',
		icon: '/icons/amazon-internet-media-svgrepo-com.svg',
		href: 'https://music.amazon.de/artists/B0949N51LV/joy-markus?do=play&agent=googleAssistant&ref=dmm_seo_google_gkp_artists',
	},
] as const

export function StreamingPlatforms({ size = 'large', className, backgroundColor }: StreamingPlatformsProps) {
	const iconSize = size === 'large' ? { width: 40, height: 40 } : { width: 24, height: 24 }
	const iconClassName =
		size === 'large'
			? 'h-6 md:h-8 lg:h-10 w-auto'
			: 'h-6 w-6 brightness-0 invert'
	const containerClassName = size === 'large' 
		? 'flex gap-4 md:gap-6 lg:gap-8 items-center justify-center w-full'
		: 'flex gap-4 items-center'

	return (
		<div className={cn(containerClassName, className)}>
			{PLATFORMS.map((platform) => (
				<a
					key={platform.name}
					href={platform.href}
					aria-label={platform.name}
					className="hover:opacity-70 transition-opacity"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={platform.icon}
						alt={platform.name}
						{...iconSize}
						className={iconClassName}
						style={backgroundColor ? { filter: 'brightness(0) saturate(100%) invert(93%) sepia(3%) saturate(200%) hue-rotate(0deg) brightness(100%) contrast(100%)' } : undefined}
					/>
				</a>
			))}
		</div>
	)
}

