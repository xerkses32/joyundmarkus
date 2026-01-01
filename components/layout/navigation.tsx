'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HamburgerIcon } from '@/components/ui/hamburger-icon'
import { cn } from '@/lib/utils'

interface NavigationProps {
	className?: string
}

export function Navigation({ className }: NavigationProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [showEffect, setShowEffect] = useState(false)
	const navItems = ['HOME', 'MUSIK', 'CHORDSHEETS', 'ABOUT', 'KONTAKT']
	const isScrolledRef = useRef(false)
	const navContainerRef = useRef<HTMLDivElement>(null)
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
	const [dividerPositions, setDividerPositions] = useState<number[]>([])

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 10
			if (scrolled && !isScrolledRef.current) {
				isScrolledRef.current = true
				setIsScrolled(true)
				setShowEffect(true)
				// Remove effect after animation completes
				setTimeout(() => setShowEffect(false), 600)
			} else if (!scrolled && isScrolledRef.current) {
				isScrolledRef.current = false
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const updateDividerPositions = () => {
			if (!navContainerRef.current || buttonRefs.current.length === 0) return

			const navElement = document.querySelector('nav')
			if (!navElement) return

			const navRect = navElement.getBoundingClientRect()

			const positions: number[] = []
			for (let i = 0; i < buttonRefs.current.length - 1; i++) {
				const currentButton = buttonRefs.current[i]
				const nextButton = buttonRefs.current[i + 1]
				if (currentButton && nextButton) {
					const currentRect = currentButton.getBoundingClientRect()
					const nextRect = nextButton.getBoundingClientRect()
					const dividerX = (currentRect.right + nextRect.left) / 2
					const position = dividerX - navRect.left
					positions.push(position)
				}
			}
			setDividerPositions(positions)
		}

		updateDividerPositions()
		window.addEventListener('resize', updateDividerPositions)
		return () => window.removeEventListener('resize', updateDividerPositions)
	}, [])

	const handleScrollTo = useCallback((section: string) => {
		const element = document.getElementById(section.toLowerCase())
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
		setIsOpen(false) // Close menu on mobile after navigation
	}, [])

	return (
		<nav
			className={cn(
				'relative sticky top-0 z-50 w-full bg-[#ecebe6]/80 transition-shadow duration-500 border-y-[3px] border-[#1C1C1C]',
				showEffect && 'shadow-lg',
				className
			)}
			style={{ backdropFilter: 'blur(12px) saturate(250%)' }}
		>
			<div className="flex items-center justify-between w-full px-2 md:px-4 lg:px-8 py-[18px] md:py-[22px]">
				{/* Desktop Navigation */}
				<div 
					ref={navContainerRef}
					className="hidden md:flex items-center justify-center px-[20px] lg:px-[30px] py-[10px] rounded-[100px] flex-1 gap-[40px] md:gap-[50px] lg:gap-[100px] min-w-0"
				>
					{navItems.map((item, index) => (
						<motion.button
							key={item}
							ref={(el) => {
								buttonRefs.current[index] = el
							}}
							onClick={() => handleScrollTo(item)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									handleScrollTo(item)
								}
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 25,
							}}
							className="font-darker-grotesque font-black text-[16px] lg:text-[20px] text-[#1C1C1C] hover:opacity-70 transition-opacity relative z-10"
							aria-label={`Navigate to ${item}`}
							tabIndex={0}
						>
							{item}
						</motion.button>
					))}
				</div>
				
				{/* Instagram Icon - rechts */}
				<div className="hidden md:flex items-center justify-end flex-shrink-0 ml-4">
					<motion.a
						href="https://www.instagram.com/joyundmarkus"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 25,
						}}
						className="hover:opacity-70 transition-opacity"
						aria-label="Instagram"
					>
						<Image
							src="/icons/insta-svgrepo-com.svg"
							alt="Instagram"
							width={24}
							height={24}
							className="w-6 h-6"
						/>
					</motion.a>
				</div>
				
				{/* Vertical dividers - positioned absolutely from top border to bottom border of nav */}
				{dividerPositions.map((position, index) => (
					<div
						key={`divider-${index}`}
						className="hidden md:block absolute top-0 bottom-0 w-[3px] bg-[#1C1C1C] pointer-events-none"
						style={{
							left: `${position}px`,
						}}
					/>
				))}

				{/* Mobile: Hamburger Button zentriert und Instagram Icon rechts */}
				<div className="md:hidden flex items-center justify-between w-full">
					{/* Leerer Platzhalter für Zentrierung */}
					<div className="w-10"></div>
					{/* Hamburger Button - zentriert */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="flex items-center justify-center p-2 flex-1"
						aria-label="Toggle navigation menu"
						aria-expanded={isOpen}
					>
						<HamburgerIcon isOpen={isOpen} className="text-[#1C1C1C]" />
					</button>
					{/* Instagram Icon - rechts */}
					<motion.a
						href="https://www.instagram.com/joyundmarkus"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 25,
						}}
						className="hover:opacity-70 transition-opacity w-10 flex items-center justify-end"
						aria-label="Instagram"
					>
						<Image
							src="/icons/insta-svgrepo-com.svg"
							alt="Instagram"
							width={24}
							height={24}
							className="w-6 h-6"
						/>
					</motion.a>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-[#ecebe6]/95 shadow-lg z-50 py-4 border-b-[3px] border-[#1C1C1C]">
					<div className="flex flex-col gap-0">
						{navItems.map((item, index) => (
							<button
								key={item}
								onClick={() => handleScrollTo(item)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										handleScrollTo(item)
									}
								}}
								className={cn(
									'font-darker-grotesque font-black text-[20px] text-[#1C1C1C] hover:opacity-70 transition-opacity px-6 py-2 text-left',
									index < navItems.length - 1 && 'border-b-[3px] border-[#1C1C1C]'
								)}
								aria-label={`Navigate to ${item}`}
								tabIndex={0}
							>
								{item}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}
