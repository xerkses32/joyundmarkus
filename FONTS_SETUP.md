# Font Setup Guide

This guide explains how to set up the custom fonts for the Joy & Markus website.

## Option 1: Using Google Fonts (Recommended for Quick Setup)

If you want to quickly set up fonts using Google Fonts API:

1. Update `app/globals.css` to use Google Fonts @import:

```css
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@700;800;900&family=Libre+Caslon+Text:ital,wght@1,700&display=swap');

@font-face {
	font-family: 'Geist Mono';
	/* Add Geist Mono fonts */
}
```

2. Update Tailwind config to use the Google Fonts names

**Note**: Libre Caslon Text on Google Fonts might have slightly different naming.

## Option 2: Self-Hosted Fonts (Recommended for Production)

1. Download the font files:
   - **Darker Grotesque**: https://fonts.google.com/specimen/Darker+Grotesque
   - **Libre Caslon Text**: https://fonts.google.com/specimen/Libre+Caslon+Text
   - **Geist Mono**: https://vercel.com/font or `npm install @vercel/geist-mono`

2. Convert fonts to WOFF2 format (recommended) or WOFF format

3. Place font files in `public/fonts/` directory with these names:
   - DarkerGrotesque-Bold.woff2
   - DarkerGrotesque-ExtraBold.woff2
   - DarkerGrotesque-Black.woff2
   - LibreCaslonText-BoldItalic.woff2
   - GeistMono-Regular.woff2
   - GeistMono-Medium.woff2

4. The `@font-face` declarations in `app/globals.css` will automatically load them

## Option 3: Using next/font (Best for Performance)

For optimal performance, use Next.js font optimization:

1. Install Geist Mono:
```bash
npm install @vercel/geist-mono
```

2. Update `lib/fonts.ts` to use `next/font/local` for custom fonts and `next/font/google` for Google Fonts

3. Import and use in `app/layout.tsx`

## Current Implementation

The current setup uses `@font-face` declarations in `globals.css` which will work once you add the font files to `public/fonts/`.

The fonts are also configured in `tailwind.config.ts` and can be used with Tailwind classes:
- `font-darker-grotesque`
- `font-libre-caslon`
- `font-geist-mono`
- `font-andale-mono`

## Font Usage in Components

Based on the design system, fonts are used like this:

```tsx
// Headings - Darker Grotesque
className="font-['Darker_Grotesque',sans-serif] font-black"

// Buttons - Libre Caslon Text
className="font-['Libre_Caslon_Text',sans-serif] font-bold italic"

// Body/Lyrics - Geist Mono
className="font-['Geist_Mono',sans-serif] font-normal"

// Citations - Andale Mono
className="font-['Andale_Mono',sans-serif]"
```

Or using Tailwind config classes:
```tsx
className="font-darker-grotesque font-black"
className="font-libre-caslon font-bold italic"
className="font-geist-mono font-normal"
className="font-andale-mono"
```

## Next Steps

1. **Choose your approach** (Google Fonts or self-hosted)
2. **Download/obtain font files** if using self-hosted approach
3. **Add fonts to `public/fonts/`** directory
4. **Test font loading** in development
5. **Verify fonts render correctly** in browser DevTools

