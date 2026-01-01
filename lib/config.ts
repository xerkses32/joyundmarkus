/**
 * Configuration values for the application
 * Values from environment variables with fallback defaults
 */

export function getPaypalUrl(): string {
	return process.env.NEXT_PUBLIC_PAYPAL_URL || 'https://paypal.me/joyundmarkussupport'
}

