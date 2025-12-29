# Favicon Setup - Anleitung

## Problem

Im Browser-Tab wird aktuell das Standard-Favicon (Weltkugel) angezeigt, statt eines eigenen Logos.

## Lösung

Next.js verwendet automatisch Icons aus dem `app/` Verzeichnis oder aus `public/`.

## Option 1: Icon-Dateien im `app/` Verzeichnis (Empfohlen)

Next.js 13+ erkennt automatisch folgende Dateien:

1. **`app/icon.png`** oder **`app/icon.ico`** - Haupt-Icon
2. **`app/apple-icon.png`** - Apple Touch Icon (für iOS)

**Größen:**
- `icon.png`: 32x32px oder 192x192px
- `apple-icon.png`: 180x180px

## Option 2: Favicon im `public/` Verzeichnis

1. Erstelle ein Favicon (z.B. aus deinem Logo):
   - `public/favicon.ico` (16x16px oder 32x32px)
   - `public/icon.png` (32x32px)
   - `public/apple-icon.png` (180x180px für iOS)

2. Die Icons sind bereits in der SEO-Konfiguration referenziert.

## Wie erstelle ich ein Favicon?

### Aus einem Logo/Bild:

1. **Online-Tools:**
   - https://favicon.io/ - Favicon Generator
   - https://realfavicongenerator.net/ - Umfassender Generator
   - https://www.favicon-generator.org/ - Einfacher Generator

2. **Aus deinem Logo:**
   - Lade dein Logo hoch
   - Tool generiert alle benötigten Größen
   - Download und in `app/` oder `public/` speichern

### Manuell:

1. Öffne dein Logo in einem Bildbearbeitungsprogramm
2. Erstelle:
   - 32x32px → `icon.png`
   - 180x180px → `apple-icon.png`
   - 16x16px oder 32x32px → `favicon.ico` (optional)

## Dateien-Struktur

```
app/
  icon.png          # Haupt-Icon (32x32px oder 192x192px)
  apple-icon.png    # Apple Touch Icon (180x180px)

ODER

public/
  favicon.ico       # Standard Favicon
  icon.png          # PNG Icon
  apple-icon.png    # Apple Icon
```

## Nach dem Hinzufügen

1. **Dateien speichern** in `app/` oder `public/`
2. **Dev-Server neu starten:**
   ```bash
   npm run dev
   ```
3. **Browser-Cache leeren** (Strg+Shift+R oder Cmd+Shift+R)
4. **Prüfen:** Browser-Tab sollte jetzt dein Icon zeigen

## Empfehlung

Verwende **Option 1** (`app/icon.png`), da Next.js diese automatisch optimiert und für alle Geräte bereitstellt.

## Aktueller Status

✅ Icons sind in der SEO-Konfiguration referenziert  
⚠️ Icon-Dateien müssen noch erstellt/hinzugefügt werden

