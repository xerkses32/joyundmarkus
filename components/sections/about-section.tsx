import { SectionHeading } from '@/components/ui/section-heading'
import { AboutPersonCard } from '@/components/ui/about-person-card'
import { StreamingPlatformsWithBackground } from '@/components/sections/streaming-platforms-with-background'

interface AboutSectionProps {
	joyImage?: string
	joyText?: string
	markusImage?: string
	markusText?: string
}

export function AboutSection({
	joyImage,
	joyText,
	markusImage,
	markusText,
}: AboutSectionProps) {
	const defaultJoyText =
		'Joy ist eine leidenschaftliche Musikerin und Komponistin, die ihre Kreativität in den Dienst der Kirche stellt. Mit ihrer einzigartigen musikalischen Vision bringt sie zeitlose Botschaften in moderne Klangwelten.'

	const defaultMarkusText =
		'Markus ist studierter katholischer Theologe, Musiker und Komponist, der Lobpreislieder für die Kirche schreibt. Mit seiner theologischen Ausbildung und musikalischen Leidenschaft verbindet er tiefe Glaubensinhalte mit berührenden Melodien. Regelmäßig ist er als Sprecher auf Veranstaltungen eingeladen, wo er seine Vision von Musik teilt, die Menschen näher zu Gott bringt.'

	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex items-center justify-center pb-16 md:pb-24 lg:pb-[380px] pt-16 md:pt-24 lg:pt-[380px] px-0 w-full">
				<SectionHeading>ABOUT</SectionHeading>
			</div>

			{/* Stacked Layout: Joy (top, text right) and Markus (bottom, text left) */}
			<div className="flex flex-col items-stretch w-full gap-0">
				{/* Joy Card - Text on Right */}
				<AboutPersonCard
					image={joyImage || '/images/Joy.png'}
					imageAlt="Joy"
					text={joyText || defaultJoyText}
					textPosition="right"
						/>

				{/* Markus Card - Text on Left */}
				<AboutPersonCard
					image={markusImage || '/images/Markus.jpg'}
					imageAlt="Markus"
					text={markusText || defaultMarkusText}
					textPosition="left"
				/>
			</div>

			{/* Streaming Platform Logos */}
			<div className="pt-16 md:pt-24 lg:pt-[380px] pb-16 md:pb-24 lg:pb-[380px] w-full">
				<StreamingPlatformsWithBackground />
			</div>
		</div>
	)
}
