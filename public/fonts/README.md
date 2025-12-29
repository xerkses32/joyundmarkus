# Fonts Directory

This directory should contain the following font files:

## Required Fonts

### Darker Grotesque
- `DarkerGrotesque-Bold.woff2` / `DarkerGrotesque-Bold.woff`
- `DarkerGrotesque-ExtraBold.woff2` / `DarkerGrotesque-ExtraBold.woff`
- `DarkerGrotesque-Black.woff2` / `DarkerGrotesque-Black.woff`

### Libre Caslon Text
- `LibreCaslonText-BoldItalic.woff2` / `LibreCaslonText-BoldItalic.woff`

### Geist Mono
- `GeistMono-Regular.woff2` / `GeistMono-Regular.woff`
- `GeistMono-Medium.woff2` / `GeistMono-Medium.woff`

### Andale Mono
- This is a system font and doesn't need to be included

## Font Sources

### Darker Grotesque
- Available on Google Fonts: https://fonts.google.com/specimen/Darker+Grotesque
- You can download from Google Fonts or purchase from the original foundry

### Libre Caslon Text
- Available on Google Fonts: https://fonts.google.com/specimen/Libre+Caslon+Text
- Download from Google Fonts

### Geist Mono
- Available from Vercel: https://vercel.com/font
- Or use the npm package: `@vercel/geist-mono`

### Andale Mono
- System font, available on macOS and Windows
- No download needed

## Installation Instructions

1. Download fonts from the sources above
2. Convert to WOFF2 format (preferred) or WOFF format
3. Place font files in this directory (`public/fonts/`)
4. The fonts will be automatically loaded via `app/globals.css`

## Alternative: Using Google Fonts via next/font

If you prefer to use Google Fonts instead of self-hosted fonts, you can modify `lib/fonts.ts` and use `next/font/google` instead of `@font-face` declarations.

