'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ContactFormProps {}

export function ContactForm({}: ContactFormProps) {
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [privacyAccepted, setPrivacyAccepted] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [errors, setErrors] = useState<{
		email?: string
		message?: string
		privacy?: string
	}>({})

	const validateForm = () => {
		const newErrors: {
			email?: string
			message?: string
			privacy?: string
		} = {}

		if (!email.trim()) {
			newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
		}

		if (!message.trim()) {
			newErrors.message = 'Bitte geben Sie eine Nachricht ein.'
		}

		if (!privacyAccepted) {
			newErrors.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu.'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		if (!validateForm()) {
			setSubmitStatus('error')
			return
		}
		
		setIsSubmitting(true)
		setSubmitStatus('idle')
		setErrors({})

		const getformEndpoint = process.env.NEXT_PUBLIC_GETFORM_ENDPOINT

		if (!getformEndpoint) {
			console.error('Getform endpoint not configured')
			setSubmitStatus('error')
			setIsSubmitting(false)
			return
		}

		try {
			const response = await fetch(getformEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					message,
				}),
			})

			if (response.ok) {
				setSubmitStatus('success')
				setEmail('')
				setMessage('')
				setPrivacyAccepted(false)
				// Reset success message after 5 seconds
				setTimeout(() => setSubmitStatus('idle'), 5000)
			} else {
				setSubmitStatus('error')
			}
		} catch (error) {
			console.error('Form submission error:', error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-3 lg:gap-[10px] items-start w-full relative">
			<div className="relative flex items-center justify-center p-4 md:p-5 lg:p-[20px] w-full">
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
						if (errors.email) {
							setErrors((prev) => ({ ...prev, email: undefined }))
						}
					}}
					onBlur={() => {
						if (!email.trim()) {
							setErrors((prev) => ({ ...prev, email: 'Bitte geben Sie Ihre E-Mail-Adresse ein.' }))
						} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
							setErrors((prev) => ({ ...prev, email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }))
						} else {
							setErrors((prev) => ({ ...prev, email: undefined }))
						}
					}}
					placeholder="Deine Email Adresse"
					className={`font-geist-mono font-medium text-[20px] md:text-[24px] lg:text-[30px] w-full bg-transparent border-none outline-none transition-colors ${
						errors.email ? 'text-red-600' : 'text-[#1C1C1C]'
					}`}
					aria-required="true"
					aria-invalid={!!errors.email}
				/>
				{!email && (
					<span 
						className="absolute text-red-600 font-geist-mono font-medium text-[20px] md:text-[24px] lg:text-[30px] pointer-events-none"
						style={{ 
							left: 'calc(1rem + 0.5rem + 19ch)',
							top: '50%',
							transform: 'translateY(-50%)'
						}}
						aria-label="Pflichtfeld"
					>
						*
					</span>
				)}
			</div>
			<div className="h-0 relative w-full">
				<div className="absolute inset-[-1px_0_0_0]">
					<img
						src="/icons/divider-line.svg"
						alt="Dekorativer Trennstrich"
						className="block max-w-none size-full"
					/>
				</div>
			</div>
			{errors.email && (
				<div className="px-4 md:px-5 lg:px-[20px] pt-2 w-full" role="alert">
					<p className="font-geist-mono font-normal text-[14px] md:text-[16px] text-red-600">
						{errors.email}
					</p>
				</div>
			)}
			<div className="relative flex h-[300px] md:h-[400px] lg:h-[560px] items-start p-4 md:p-5 lg:p-[20px] w-full">
				<textarea
					id="message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value)
						if (errors.message) {
							setErrors((prev) => ({ ...prev, message: undefined }))
						}
					}}
					onBlur={() => {
						if (!message.trim()) {
							setErrors((prev) => ({ ...prev, message: 'Bitte geben Sie eine Nachricht ein.' }))
						} else {
							setErrors((prev) => ({ ...prev, message: undefined }))
						}
					}}
					placeholder="Deine Nachricht"
					className={`font-geist-mono font-medium text-[20px] md:text-[24px] lg:text-[30px] w-full h-full bg-transparent border-none outline-none resize-none transition-colors ${
						errors.message ? 'text-red-600' : 'text-[#1C1C1C]'
					}`}
					aria-required="true"
					aria-invalid={!!errors.message}
				/>
				{!message && (
					<span 
						className="absolute text-red-600 font-geist-mono font-medium text-[20px] md:text-[24px] lg:text-[30px] pointer-events-none whitespace-nowrap"
						style={{ 
							left: 'calc(1rem + 0.5rem + 15ch)',
							top: 'calc(1rem + 0.5rem)'
						}}
						aria-label="Pflichtfeld"
					>
						*
					</span>
				)}
			</div>
			<div className="h-0 relative w-full">
				<div className="absolute inset-[-1px_0_0_0]">
					<img
						src="/icons/divider-line.svg"
						alt="Dekorativer Trennstrich"
						className="block max-w-none size-full"
					/>
				</div>
			</div>
			{errors.message && (
				<div className="px-4 md:px-5 lg:px-[20px] pt-2 w-full" role="alert">
					<p className="font-geist-mono font-normal text-[14px] md:text-[16px] text-red-600">
						{errors.message}
					</p>
				</div>
			)}
			{/* Privacy Checkbox - Before Submit Button */}
			<div className="flex flex-col gap-1 px-4 md:px-5 lg:px-[20px] w-full">
				<div className="flex items-start gap-3 w-full">
					<input
						type="checkbox"
						id="privacy-accept"
						checked={privacyAccepted}
						onChange={(e) => {
							setPrivacyAccepted(e.target.checked)
							if (errors.privacy) {
								setErrors((prev) => ({ ...prev, privacy: undefined }))
							}
						}}
					className={`mt-1 w-5 h-5 md:w-6 md:h-6 cursor-pointer shrink-0 transition-colors ${
						errors.privacy ? 'accent-red-600' : 'accent-[#1C1C1C]'
					}`}
					aria-required="true"
					aria-invalid={!!errors.privacy}
					/>
					<label
						htmlFor="privacy-accept"
						className={`font-geist-mono font-normal text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer leading-relaxed flex-1 transition-colors ${
							errors.privacy ? 'text-red-600' : 'text-[#1C1C1C]'
						}`}
					>
						Ich habe die{' '}
						<Link
							href="/datenschutz"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:opacity-70 transition-opacity"
						>
							Datenschutzerklärung
						</Link>
						{' '}gelesen und stimme zu.{' '}
						<span className="text-red-600" aria-label="Pflichtfeld">
							*
						</span>
					</label>
				</div>
				{errors.privacy && (
					<div className="pl-8 md:pl-9 lg:pl-[44px] w-full" role="alert">
						<p className="font-geist-mono font-normal text-[14px] md:text-[16px] text-red-600">
							{errors.privacy}
						</p>
					</div>
				)}
			</div>
			<div className="flex flex-col gap-3 items-center justify-center overflow-clip px-0 py-3 md:py-4 lg:py-[11px] w-full">
				{submitStatus === 'success' && (
					<p className="font-geist-mono font-medium text-[16px] md:text-[18px] text-green-600 text-center">
						Nachricht erfolgreich gesendet!
					</p>
				)}
				{submitStatus === 'error' && privacyAccepted && email.trim() && message.trim() && (
					<p className="font-geist-mono font-medium text-[16px] md:text-[18px] text-red-600 text-center">
						Fehler beim Senden. Bitte versuche es erneut.
					</p>
				)}
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting ? 'Wird gesendet...' : 'Senden'}
				</Button>
			</div>
		</form>
	)
}
