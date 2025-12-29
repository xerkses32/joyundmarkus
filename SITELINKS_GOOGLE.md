# Google Sitelinks - Anleitung

## Was sind Sitelinks?

Sitelinks sind die zusätzlichen Links, die unter der Haupt-URL einer Website in Google-Suchergebnissen angezeigt werden. Sie helfen Nutzern, direkt zu wichtigen Unterseiten zu navigieren.

**Beispiel:**
```
Joy & Markus - Christliche Musik
https://joyundmarkus.de
  📄 Musik
  📄 Chordsheets
  📄 About
  📄 Kontakt
```

## Wie funktionieren Sitelinks?

### Automatisch von Google generiert

Google generiert Sitelinks **automatisch** basierend auf:
1. **Website-Struktur** - Klare Navigation und Hierarchie
2. **Interne Verlinkung** - Wie Seiten miteinander verlinkt sind
3. **Relevanz** - Welche Seiten am wichtigsten sind
4. **Traffic** - Welche Seiten am meisten besucht werden

### Du kannst Sitelinks nicht direkt "erstellen"

❌ **Nicht möglich:**
- Sitelinks manuell festlegen
- Sitelinks in Google Search Console hinzufügen
- Sitelinks per Code erzwingen

✅ **Aber du kannst sie beeinflussen:**
- Klare Website-Struktur
- Gute interne Verlinkung
- Strukturierte Daten (Schema.org)
- Breadcrumbs implementieren

## Was wurde bereits implementiert?

### ✅ Strukturierte Daten (Schema.org)
- **WebSite Schema** - Hilft Google, die Website-Struktur zu verstehen
- **Breadcrumb Schema** - Kann für Unterseiten hinzugefügt werden

### ✅ Klare Navigation
- Semantische HTML-Struktur (`<nav>`)
- Anchor-Links zu Sektionen (`#musik`, `#kontakt`)

### ✅ Sitemap
- Automatische Sitemap mit allen wichtigen Seiten
- Wird von Google gecrawlt

## Was kannst du noch tun?

### 1. Breadcrumbs hinzufügen (für Unterseiten)

Breadcrumbs helfen Google, die Seitenhierarchie zu verstehen:

```tsx
// Beispiel für Impressum-Seite
<BreadcrumbStructuredData
  items={[
    { name: 'Home', url: '/' },
    { name: 'Impressum', url: '/impressum' },
  ]}
/>
```

### 2. Interne Verlinkung verbessern

- Verlinke wichtige Seiten im Footer
- Verlinke relevante Seiten im Content
- Nutze beschreibende Anchor-Texte

### 3. Klare URL-Struktur

✅ **Gut:**
- `/impressum`
- `/datenschutz`
- `/cookie-einstellungen`

❌ **Schlecht:**
- `/page?id=123`
- `/impressum-2024-v2`

### 4. Wichtige Seiten hervorheben

- Nutze `<h1>` für Hauptüberschriften
- Nutze semantische HTML-Tags (`<nav>`, `<main>`, `<article>`)
- Stelle sicher, dass wichtige Seiten gut verlinkt sind

## Wann erscheinen Sitelinks?

Sitelinks erscheinen typischerweise:
- ✅ Nach einigen Wochen/Monaten, wenn die Website etabliert ist
- ✅ Wenn die Website gute Rankings hat
- ✅ Wenn die Website-Struktur klar ist
- ✅ Wenn es mehrere relevante Unterseiten gibt

**Nicht sofort!** Google braucht Zeit, um die Website zu verstehen.

## Was beeinflusst, welche Links angezeigt werden?

1. **Häufigkeit der Verlinkung** - Oft verlinkte Seiten erscheinen eher
2. **Traffic** - Viel besuchte Seiten erscheinen eher
3. **Relevanz** - Relevante Seiten für die Suchanfrage
4. **Struktur** - Seiten, die strukturell wichtig sind (z.B. Navigation)

## Aktuelle Website-Struktur

Deine Website hat bereits:
- ✅ Klare Navigation (HOME, MUSIK, CHORDSHEETS, ABOUT, KONTAKT)
- ✅ Wichtige Unterseiten (Impressum, Datenschutz)
- ✅ Strukturierte Daten (WebSite Schema)
- ✅ Sitemap

**Potenzielle Sitelinks könnten sein:**
- Musik
- Chordsheets
- About
- Kontakt
- Impressum
- Datenschutz

## Tipps für bessere Sitelinks

1. **Warte** - Sitelinks erscheinen nicht sofort
2. **Verbessere interne Verlinkung** - Verlinke wichtige Seiten im Footer/Content
3. **Nutze strukturierte Daten** - Breadcrumbs für Unterseiten
4. **Halte die Struktur konsistent** - Ändere URLs nicht ständig
5. **Erstelle guten Content** - Relevante, gut strukturierte Seiten

## Kann ich bestimmte Links blockieren?

Ja, in Google Search Console:
1. Gehe zu "Sitelinks"
2. Du kannst bestimmte Links als "Sitelink blockieren" markieren
3. Diese erscheinen dann nicht mehr in den Suchergebnissen

## Zusammenfassung

- ✅ Sitelinks werden **automatisch** von Google generiert
- ✅ Du kannst sie **beeinflussen**, aber nicht direkt erstellen
- ✅ Klare Struktur, gute Verlinkung und strukturierte Daten helfen
- ✅ Es dauert **einige Wochen/Monate**, bis sie erscheinen
- ✅ Deine Website ist bereits gut vorbereitet!

