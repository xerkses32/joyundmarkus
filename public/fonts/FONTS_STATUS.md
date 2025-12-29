# Fonts Status

## ✅ Installed Fonts

### Geist Mono
- ✅ `GeistMono-Regular.woff2` (from geist npm package)
- ✅ `GeistMono-Medium.woff2` (from geist npm package)

### Libre Caslon Text
- ✅ `LibreCaslonText-Bold.ttf`
- ✅ `LibreCaslonText-Italic.ttf`
- ✅ `LibreCaslonText-Regular.ttf`

## ✅ All Required Fonts Installed

### Darker Grotesque
- ✅ `DarkerGrotesque-VariableFont_wght.woff2` (Variable Font supports all weights 300-900)
  - Supports: Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black
  - More efficient than separate font files

### Libre Caslon Text
- ✅ All variants installed (Regular, Bold, Italic in WOFF2 format)
- ⚠️ Bold Italic is simulated by browser (combines Bold weight + Italic style)

## Font Configuration

All fonts are configured in `app/globals.css` using `@font-face` declarations.

The fonts are also available in Tailwind via:
- `font-darker-grotesque`
- `font-libre-caslon`
- `font-geist-mono`
- `font-andale-mono`

