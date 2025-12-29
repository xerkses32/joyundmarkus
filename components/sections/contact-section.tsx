import { SectionHeading } from '@/components/ui/section-heading'
import { ContactForm } from '@/components/forms/contact-form'

export function ContactSection() {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex items-center justify-center pb-4 md:pb-5 lg:pb-[20px] pt-12 md:pt-16 lg:pt-[120px] px-0 w-full">
				<SectionHeading>KONTAKT</SectionHeading>
			</div>
			<div className="border border-[#b1b1b1] border-solid flex flex-col gap-2 md:gap-3 lg:gap-[10px] items-start overflow-clip px-0 py-4 md:py-5 lg:py-[20px] w-full">
				<ContactForm />
			</div>
		</div>
	)
}
