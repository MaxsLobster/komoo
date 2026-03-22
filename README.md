# komo

Minimalistische Paar-Organisations-App für Max und Anna.

## Stack

- React + Vite
- Tailwind CSS
- Supabase (Schema in `supabase/migrations`)
- PWA (`public/manifest.json`, `public/sw.js`)

## Setup

```bash
npm install
npm run dev
```

Optional für Supabase:

1. `.env` anlegen:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`
2. Migration gegen Supabase anwenden.

## Features (aktueller Stand)

- User-Auswahl: Max oder Anna (lokal gespeichert)
- Tabs für Themen und Aufgaben
- Erstellen, Priorisieren, Erledigen, Follow-ups
- Vordefinierte und benutzerdefinierte Kategorie-Tags
- Dynamischer Tagesgruß
- Positive Feedback-Toasts beim Abschließen von Aufgaben
