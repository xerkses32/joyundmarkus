# Chordsheets

Dieser Ordner enthält alle Chordsheet-Dateien zum Download.

## Dateiformat

Die Chordsheets sollten als PDF-Dateien vorliegen.

## Dateinamen

Die Dateinamen sollten kebab-case sein und mit den URLs in `app/page.tsx` übereinstimmen:

- `alles-beugt-sich.pdf`
- `abba.pdf`
- `ueberwunden.pdf`
- `mein-lohn-bist-du.pdf`
- `nah-zu-sein.pdf`

## Hinzufügen neuer Chordsheets

1. Füge die PDF-Datei in diesen Ordner ein
2. Aktualisiere das `chordsheets` Array in `app/page.tsx` mit dem neuen Eintrag
3. Verwende den Pfad `/chordsheets/dein-dateiname.pdf` als `downloadUrl`

## Alternative: Externe Links

Falls Chordsheets extern gehostet werden (z.B. Google Drive, Dropbox), kannst du auch externe URLs verwenden:

```typescript
{ id: '6', name: 'SONG NAME', anzahl: 1, downloadUrl: 'https://example.com/file.pdf' }
```

Die Komponente erkennt automatisch externe Links und öffnet sie in einem neuen Tab.

