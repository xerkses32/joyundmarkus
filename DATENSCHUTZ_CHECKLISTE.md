# Datenschutz-Checkliste für Joy & Markus Website

## 🔴 Kritische Punkte (Muss umgesetzt werden)

### 1. **Datenschutzerklärung**
**Status:** ❌ Nicht vorhanden  
**Pflicht:** Ja (DSGVO Art. 13, 14)  
**Was zu tun:**
- Erstelle eine Datenschutzerklärung-Seite (`/datenschutz`)
- Erkläre alle Datenverarbeitungen:
  - Kontaktformular (Getform)
  - YouTube-Embeds
  - Externe Links zu Streaming-Diensten
- Informiere über:
  - Welche Daten werden gesammelt
  - Wer ist Verantwortlicher
  - Rechte der Nutzer (Auskunft, Löschung, etc.)
  - Speicherdauer
  - Kontaktdaten des Datenschutzbeauftragten (falls vorhanden)

### 2. **Impressum**
**Status:** ❌ Nicht vorhanden  
**Pflicht:** Ja (TMG §5, DSGVO Art. 13)  
**Was zu tun:**
- Erstelle eine Impressum-Seite (`/impressum`)
- Enthalten muss:
  - Name und Anschrift
  - Kontaktdaten (E-Mail, Telefon)
  - Verantwortlicher für den Inhalt
  - Bei kommerzieller Nutzung: Handelsregister, USt-IdNr.

### 3. **Cookie-Banner / Cookie-Consent**
**Status:** ❌ Nicht vorhanden  
**Pflicht:** Ja (ePrivacy-Richtlinie, DSGVO)  
**Grund:** YouTube-Embeds setzen Cookies (Google/YouTube Tracking)  
**Was zu tun:**
- Implementiere Cookie-Consent-Banner
- Opt-in für YouTube-Embeds (erst nach Zustimmung laden)
- Informiere über:
  - Welche Cookies werden gesetzt
  - Zweck der Cookies
  - Dauer der Speicherung
  - Möglichkeit zur Ablehnung

**Empfohlene Lösung:**
- Cookie-Banner mit Zustimmung/Ablehnung
- YouTube-Embeds erst nach Zustimmung laden (Lazy Loading)
- Cookie-Präferenzen speichern (localStorage)

### 4. **Getform Datenschutz**
**Status:** ⚠️ Teilweise  
**Pflicht:** Ja  
**Was zu prüfen:**
- ✅ Getform ist DSGVO-konform (laut deren Website)
- ⚠️ Daten werden an Drittanbieter (Getform) übertragen
- **Was zu tun:**
  - In Datenschutzerklärung erwähnen, dass Daten an Getform übertragen werden
  - Getform Datenschutzerklärung verlinken: https://getform.io/privacy
  - Informieren, dass E-Mail-Adressen und Nachrichten an Getform gesendet werden
  - Speicherdauer bei Getform prüfen

### 5. **YouTube-Embeds Datenschutz**
**Status:** ⚠️ Problematisch  
**Pflicht:** Ja  
**Problem:** YouTube-Embeds laden automatisch Tracking-Cookies von Google  
**Was zu tun:**
- **Option 1 (Empfohlen):** YouTube-Embeds erst nach Cookie-Consent laden
  - Verwende `youtube-nocookie.com` Domain (reduziert Tracking, aber nicht vollständig)
  - Lade Videos erst nach Zustimmung
- **Option 2:** Thumbnail-Bilder mit Link zu YouTube verwenden (kein Embed)
- **Option 3:** Vimeo verwenden (besserer Datenschutz)
- In Datenschutzerklärung erwähnen:
  - YouTube/Google setzt Cookies
  - Zweck: Tracking, Personalisierung
  - Link zu YouTube Datenschutz: https://policies.google.com/privacy

## 🟡 Wichtige Punkte (Sollte umgesetzt werden)

### 6. **Externe Links**
**Status:** ✅ Teilweise vorhanden  
**Was zu tun:**
- Links zu Spotify, Apple Music, YouTube, Amazon Music sind OK
- Keine direkte Datenerfassung durch die Website
- **Optional:** In Datenschutzerklärung erwähnen, dass externe Links zu Drittanbietern führen

### 7. **Kontaktformular - Datenminimierung**
**Status:** ✅ Gut  
**Was zu prüfen:**
- ✅ Nur E-Mail und Nachricht werden gesammelt (minimal notwendig)
- ✅ Keine unnötigen Felder
- ⚠️ **Empfehlung:** Hinweistext zum Datenschutz im Formular:
  ```
  "Mit dem Absenden stimmen Sie zu, dass Ihre Daten zur Bearbeitung Ihrer Anfrage verwendet werden. 
  Weitere Informationen finden Sie in unserer Datenschutzerklärung."
  ```

### 8. **Server-Logs**
**Status:** ⚠️ Zu prüfen  
**Was zu tun:**
- Prüfe, welche Daten in Server-Logs gespeichert werden (IP-Adressen, etc.)
- In Datenschutzerklärung erwähnen
- Speicherdauer festlegen (max. 7 Tage empfohlen)
- Bei Hosting-Anbieter prüfen (Vercel, etc.)

### 9. **SSL/TLS Verschlüsselung**
**Status:** ✅ Sollte vorhanden sein (Next.js/Vercel)  
**Was zu prüfen:**
- HTTPS muss aktiv sein
- Keine unverschlüsselten Verbindungen

## 🟢 Gute Praktiken (Optional, aber empfohlen)

### 10. **Robots.txt & Meta-Tags**
**Status:** ⚠️ Zu prüfen  
**Was zu tun:**
- `robots.txt` erstellen (falls nicht vorhanden)
- Meta-Tags für Datenschutz in `<head>`:
  ```html
  <meta name="robots" content="noindex, nofollow"> <!-- Nur für Test-Seiten -->
  ```

### 11. **Content Security Policy (CSP)**
**Status:** ⚠️ Nicht vorhanden  
**Was zu tun:**
- CSP Header setzen (in `next.config.ts` oder via Middleware)
- Erlaubt nur vertrauenswürdige Quellen
- Verhindert XSS-Angriffe

### 12. **Kontakt für Datenschutzanfragen**
**Status:** ⚠️ Zu prüfen  
**Was zu tun:**
- E-Mail-Adresse für Datenschutzanfragen bereitstellen
- In Datenschutzerklärung und Impressum erwähnen
- Antwortzeit: max. 1 Monat (DSGVO)

## 📋 Umsetzungsplan

### Phase 1: Kritische Pflichten (Vor Launch)
1. ✅ Impressum erstellen
2. ✅ Datenschutzerklärung erstellen
3. ✅ Cookie-Banner implementieren
4. ✅ YouTube-Embeds mit Consent laden

### Phase 2: Verbesserungen (Nach Launch)
5. ✅ Hinweistext im Kontaktformular
6. ✅ CSP Header setzen
7. ✅ Server-Logs prüfen

## 🔗 Wichtige Links

- **DSGVO Text:** https://gdpr-info.eu/
- **Getform Datenschutz:** https://getform.io/privacy
- **YouTube Datenschutz:** https://policies.google.com/privacy
- **BfDI (Bundesbeauftragter für Datenschutz):** https://www.bfdi.bund.de/

## 📝 Template für Datenschutzerklärung

Die Datenschutzerklärung sollte folgende Abschnitte enthalten:

1. **Verantwortlicher**
2. **Kontaktdaten des Datenschutzbeauftragten** (falls vorhanden)
3. **Allgemeine Hinweise zur Datenverarbeitung**
4. **Rechte der betroffenen Person**
5. **Kontaktformular** (Getform)
6. **YouTube-Embeds** (Google/YouTube Tracking)
7. **Externe Links**
8. **Server-Logs**
9. **Cookies**
10. **Änderungen der Datenschutzerklärung**

## ⚠️ Wichtige Hinweise

- **Keine Rechtsberatung:** Diese Checkliste ist keine Rechtsberatung
- **Rechtliche Prüfung empfohlen:** Bei kommerzieller Nutzung sollte ein Anwalt prüfen
- **Regelmäßige Updates:** Datenschutzerklärung muss aktuell gehalten werden
- **Dokumentation:** Alle Datenverarbeitungen sollten dokumentiert werden

