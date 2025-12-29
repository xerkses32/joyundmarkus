# Neue Website

Next.js Website mit TypeScript, Tailwind CSS, Redux Toolkit und Shadcn UI.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **Shadcn UI**
- **Redux Toolkit**
- **Zod** (Schema Validation)
- **React Hook Form**
- **next-i18next** (Internationalization)

## Entwicklung

```bash
# Development Server starten
npm run dev

# Build erstellen
npm run build

# Production Server starten
npm start

# Linting
npm run lint

# Type Checking
npm run type-check
```

## Projekt-Struktur

```
├── app/              # Next.js App Router Seiten
├── components/       # React Komponenten
├── hooks/           # Custom React Hooks
├── lib/             # Utility Funktionen und Provider
├── store/           # Redux Store und Slices
├── types/           # TypeScript Type Definitions
└── public/          # Statische Assets
```

## Internationalization (i18n)

**Hinweis**: next-i18next ist für den Pages Router ausgelegt. Für den App Router sollte `next-intl` oder eine andere App-Router-kompatible Lösung verwendet werden. Die aktuelle Struktur kann als Basis für die Migration dienen.

