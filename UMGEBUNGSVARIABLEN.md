# Umgebungsvariablen - Anleitung

## Was sind Umgebungsvariablen?

Umgebungsvariablen sind Konfigurationswerte, die außerhalb des Codes gespeichert werden. Sie werden verwendet für:
- **Sensible Daten** (API-Keys, Passwörter) - nicht im Code committen!
- **Umgebungsspezifische Werte** (Development vs. Production)
- **Einfache Konfiguration** ohne Code-Änderungen

## Welche Umgebungsvariablen werden verwendet?

### 1. `NEXT_PUBLIC_SITE_URL`

**Was macht es?**
- Definiert die vollständige URL deiner Website
- Wird verwendet für:
  - Open Graph Tags (Social Media Vorschau)
  - Sitemap URLs
  - Canonical URLs
  - Strukturierte Daten (Schema.org)

**Aktueller Wert:**
- Fallback: `https://joyundmarkus.de` (wenn nicht gesetzt)
- Empfohlener Wert: `https://joyundmarkus.de`

**Wie setzen?**
```bash
NEXT_PUBLIC_SITE_URL=https://joyundmarkus.de
```

**Wichtig:**
- `NEXT_PUBLIC_` bedeutet: Diese Variable ist im Browser verfügbar
- Muss mit `https://` beginnen
- Kein Slash am Ende!

### 2. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

**Was macht es?**
- Google Search Console Verifizierungscode
- Wird als Meta-Tag im HTML eingefügt
- Nur nötig, wenn du Meta-Tag-Verifizierung verwendest

**Aktueller Wert:**
- Nicht gesetzt (optional)

**Wie setzen?**
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=CgATms2AYILpyjNFaJMF2hIDh8Ud6QplrEc
```

**Hinweis:**
- Nur nötig für Meta-Tag-Verifizierung
- HTML-Datei-Verifizierung funktioniert ohne diese Variable

### 3. `NEXT_PUBLIC_GETFORM_ENDPOINT`

**Was macht es?**
- Endpoint-URL für das Kontaktformular
- Wird von Getform bereitgestellt

**Aktueller Wert:**
- Muss gesetzt werden, sonst funktioniert das Kontaktformular nicht!

**Wie setzen?**
```bash
NEXT_PUBLIC_GETFORM_ENDPOINT=https://getform.io/f/your-form-id
```

## Wie setze ich Umgebungsvariablen?

### Lokale Entwicklung (.env.local)

1. **Erstelle eine `.env.local` Datei** im Projekt-Root:
   ```bash
   # .env.local (wird nicht ins Git committed)
   NEXT_PUBLIC_SITE_URL=https://joyundmarkus.de
   NEXT_PUBLIC_GETFORM_ENDPOINT=https://getform.io/f/your-form-id
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=CgATms2AYILpyjNFaJMF2hIDh8Ud6QplrEc
   ```

2. **Starte den Dev-Server neu:**
   ```bash
   npm run dev
   ```

### Production (Vercel/Netlify/etc.)

#### Vercel:
1. Gehe zu deinem Projekt auf vercel.com
2. Settings → Environment Variables
3. Füge die Variablen hinzu:
   - `NEXT_PUBLIC_SITE_URL` = `https://joyundmarkus.de`
   - `NEXT_PUBLIC_GETFORM_ENDPOINT` = dein Getform-Endpoint
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = dein Verifizierungscode (optional)

#### Netlify:
1. Gehe zu deinem Projekt auf netlify.com
2. Site settings → Environment variables
3. Füge die Variablen hinzu

#### Andere Hosting-Anbieter:
- Prüfe die Dokumentation deines Hosting-Anbieters
- Meist unter "Environment Variables" oder "Config Variables"

## Wichtige Hinweise

### ✅ DO:
- Verwende `.env.local` für lokale Entwicklung (wird nicht committed)
- Setze alle `NEXT_PUBLIC_*` Variablen in deinem Hosting-Service
- Verwende immer `https://` für URLs
- Starte den Dev-Server neu nach Änderungen

### ❌ DON'T:
- Committe `.env.local` ins Git (ist in .gitignore)
- Verwende `http://` für Production
- Setze Slashes am Ende von URLs (`https://joyundmarkus.de/` ❌)

## Aktuelle Konfiguration

**Ohne Umgebungsvariablen:**
- `NEXT_PUBLIC_SITE_URL` → Fallback: `https://joyundmarkus.de` ✅
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` → Nicht gesetzt (optional)
- `NEXT_PUBLIC_GETFORM_ENDPOINT` → Muss gesetzt werden! ⚠️

**Empfehlung:**
Setze mindestens `NEXT_PUBLIC_GETFORM_ENDPOINT` für das Kontaktformular!

## Prüfen ob Variablen gesetzt sind

Im Browser-Console (nach Build):
```javascript
console.log(process.env.NEXT_PUBLIC_SITE_URL)
```

Oder im Code:
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyundmarkus.de'
console.log('Site URL:', siteUrl)
```

