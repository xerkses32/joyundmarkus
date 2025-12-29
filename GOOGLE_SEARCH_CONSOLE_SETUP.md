# Google Search Console Setup - Anleitung

## Schritt 1: Google Search Console Account erstellen

1. Gehe zu: https://search.google.com/search-console
2. Melde dich mit deinem Google-Account an
3. Klicke auf "Property hinzufügen" (Add Property)

## Schritt 2: Domain oder URL-Präfix wählen

Du hast zwei Optionen:

### Option A: Domain-Property (empfohlen)
- Domain: `joyundmarkus.de`
- Verifizierung über DNS TXT Record (wie im Screenshot)

### Option B: URL-Präfix-Property
- URL: `https://joyundmarkus.de`
- Verifizierung über Meta-Tag (einfacher)

## Schritt 3: Verifizierung

### Methode 1: HTML-Datei (EINFACHER - Empfohlen)

1. **In Google Search Console:**
   - Wähle "URL-Präfix" statt "Domain"
   - Gib ein: `https://joyundmarkus.de`
   - Wähle "HTML-Datei" als Verifizierungsmethode
   - Google gibt dir einen Dateinamen (z.B. `google60900037a3ff30d4.html`)

2. **Die HTML-Datei wurde bereits erstellt:**
   - Datei: `public/google60900037a3ff30d4.html`
   - Diese Datei wird automatisch unter `https://joyundmarkus.de/google60900037a3ff30d4.html` verfügbar sein

3. **Website deployen** (die Datei muss live sein!)

4. **In Google Search Console auf "Bestätigen" klicken**

### Methode 1b: Meta-Tag (Alternative)

1. **In Google Search Console:**
   - Wähle "URL-Präfix" statt "Domain"
   - Gib ein: `https://joyundmarkus.de`
   - Wähle "HTML-Tag" als Verifizierungsmethode
   - Kopiere den `content`-Wert aus dem Meta-Tag (z.B. `CgATms2AYILpyjNFaJMF2hIDh8Ud6QplrEc`)

2. **In deiner .env Datei:**
   ```bash
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=CgATms2AYILpyjNFaJMF2hIDh8Ud6QplrEc
   ```

3. **Website neu deployen** (der Meta-Tag wird automatisch eingefügt)

4. **In Google Search Console auf "Bestätigen" klicken**

### Methode 2: DNS TXT Record (wie im Screenshot)

1. **In Google Search Console:**
   - Wähle "Domain" als Property-Typ
   - Gib ein: `joyundmarkus.de`
   - Kopiere den TXT-Eintrag: `google-site-verification=CgATms2AYILpyjNFaJMF2hIDh8Ud6QplrEc`

2. **Bei deinem Domain-Provider (z.B. IONOS, Strato, etc.):**
   - Logge dich ein
   - Gehe zu DNS-Einstellungen / DNS-Verwaltung
   - Füge einen neuen TXT-Record hinzu:
     - **Name/Host:** `@` oder leer lassen
     - **Typ:** `TXT`
     - **Wert:** `google-site-verification=CgATms2AYILpyjNFaJMF2hIDh8Ud6QplrEc`
     - **TTL:** Standard (meist 3600)

3. **Warte 24-48 Stunden** (DNS-Propagierung)

4. **In Google Search Console auf "Bestätigen" klicken**

## Schritt 4: Sitemap einreichen

Nach erfolgreicher Verifizierung:

1. Gehe zu "Sitemaps" im linken Menü
2. Gib ein: `sitemap.xml`
3. Klicke auf "Einreichen"

Die Sitemap ist automatisch verfügbar unter: `https://joyundmarkus.de/sitemap.xml`

## Schritt 5: URL-Prüfung (Optional)

1. Gehe zu "URL-Prüfung" im linken Menü
2. Gib deine Startseite ein: `https://joyundmarkus.de`
3. Klicke auf "URL zur Indizierung anfordern"

## Wichtige Hinweise

- **DNS-Änderungen** können 24-48 Stunden dauern
- **Meta-Tag-Verifizierung** funktioniert sofort nach Deployment
- Du kannst **beide Methoden** verwenden (Domain + URL-Präfix)
- Die **Sitemap** wird automatisch generiert und aktualisiert

## Troubleshooting

### Verifizierung schlägt fehl?

1. **Meta-Tag-Methode:**
   - Prüfe, ob die .env Variable gesetzt ist
   - Prüfe, ob die Website neu deployed wurde
   - Prüfe im Quellcode, ob der Meta-Tag vorhanden ist: `<meta name="google-site-verification" content="...">`

2. **DNS-Methode:**
   - Prüfe mit einem DNS-Checker: https://dnschecker.org/
   - Gib ein: `joyundmarkus.de` → TXT Record
   - Warte 24-48 Stunden nach DNS-Änderung

### Sitemap wird nicht gefunden?

- Prüfe: `https://joyundmarkus.de/sitemap.xml` im Browser
- Sollte eine XML-Datei anzeigen
- Falls nicht: Prüfe die Next.js Build-Logs

