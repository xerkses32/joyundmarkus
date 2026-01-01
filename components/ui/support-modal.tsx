'use client'

import { useEffect, useRef, useState } from 'react'
import { getPaypalUrl } from '@/lib/config'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface SupportModalProps {
	isOpen: boolean
	onClose: () => void
	paypalUrl?: string
}

export function SupportModal({ isOpen, onClose, paypalUrl }: SupportModalProps) {
	const defaultPaypalUrl = paypalUrl || getPaypalUrl()
	const closeButtonRef = useRef<HTMLButtonElement>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// ESC-Handler
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}
		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
		}
		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [isOpen, onClose])

	// Focus Management: Focus auf Modal beim Öffnen
	useEffect(() => {
		if (isOpen && closeButtonRef.current) {
			closeButtonRef.current.focus()
		}
	}, [isOpen])

	// Handle click outside modal
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	// Handle PayPal link click
	const handlePayPalClick = () => {
		window.open(defaultPaypalUrl, '_blank', 'noopener,noreferrer')
	}

	if (!isOpen || !mounted) {
		return null
	}

	const modalContent = (
		<div
			className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#1C1C1C]/80 animate-[fadeIn_200ms_ease-out]"
			onClick={handleOverlayClick}
			role="dialog"
			aria-modal="true"
			aria-labelledby="support-modal-title"
			aria-describedby="support-modal-description"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative flex flex-col gap-4 md:gap-6 w-full max-w-[500px] bg-[#ecebe6] border-[3px] border-[#1C1C1C] p-4 md:p-6 lg:p-8 animate-[modalSlideIn_200ms_ease-out]"
			>
				{/* Schließen-Button */}
				<button
					ref={closeButtonRef}
					type="button"
					onClick={onClose}
					aria-label="Modal schließen"
					className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-6 h-6 text-[#1C1C1C]"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>

				{/* Überschrift */}
				<h2 id="support-modal-title" className="font-darker-grotesque font-black text-[20px] md:text-[24px] text-[#1C1C1C]">
					UNTERSTÜTZEN
				</h2>

				{/* Erklärungstext */}
				<p
					id="support-modal-description"
					className="font-geist-mono font-normal text-[14px] md:text-[16px] text-[#1C1C1C] leading-relaxed"
				>
					Danke, dass Du uns unterstützen möchtest. Dein Geld fließt zu 100% in die Entstehung neuer Musik. Dieser Link leitet dich zu PayPal weiter.
				</p>

				{/* Button-Container */}
				<div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mt-2">
					{/* Abbrechen Button */}
					<button
						type="button"
						onClick={onClose}
						className="flex-1 px-6 py-3 bg-transparent border-[3px] border-[#1C1C1C] text-[#1C1C1C] font-darker-grotesque font-black text-[14px] md:text-[16px] uppercase hover:opacity-70 transition-opacity"
					>
						Abbrechen
					</button>

					{/* Zu PayPal Button */}
					<button
						type="button"
						onClick={handlePayPalClick}
						className="flex-1 px-6 py-3 bg-[#1C1C1C] border-[3px] border-[#ecebe6] text-[#ecebe6] font-darker-grotesque font-black text-[14px] md:text-[16px] uppercase hover:opacity-90 transition-opacity"
					>
						Zu PayPal
					</button>
				</div>
			</div>
		</div>
	)

	return createPortal(modalContent, document.body)
}

