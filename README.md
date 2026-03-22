# komo

Minimalistische Paar-Organisations-App für Max und Anna.

## Stack

- React + Vite
- Tailwind CSS
- Supabase (Schema in `supabase/migrations`)
- PWA (`public/manifest.json`, `public/sw.js`)

## Lokal starten

```bash
npm install
npm run dev
```

Optional für Supabase:

1. `.env` anlegen:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`
2. Migration gegen Supabase anwenden.

## Deployment (direkt im Browser öffnbar)

### Option A: Vercel (empfohlen, 2 Minuten)

1. Repo zu GitHub pushen.
2. Auf [vercel.com](https://vercel.com) mit GitHub einloggen.
3. `New Project` → dieses Repo auswählen.
4. Build bleibt automatisch `vite build`.
5. Deploy klicken.

Danach bekommst du eine URL wie `https://komo-xyz.vercel.app`.

> Für SPA-Routing ist `vercel.json` bereits angelegt.

### Option B: GitHub Pages (automatisch per Action)

Workflow-Datei ist bereits vorhanden: `.github/workflows/deploy-pages.yml`.

1. Standard-Branch muss `main` heißen.
2. GitHub Repo Settings → **Pages**:
   - Source: **GitHub Actions** auswählen.
3. Nach einem Push auf `main` deployed GitHub automatisch.

URL ist dann in der Regel:

`https://<github-user>.github.io/<repo-name>/`

Der Build setzt die Vite `base` automatisch auf den Repo-Namen im CI.

## Features (aktueller Stand)

- User-Auswahl: Max oder Anna (lokal gespeichert)
- Tabs für Themen und Aufgaben
- Erstellen, Priorisieren, Erledigen, Follow-ups
- Vordefinierte und benutzerdefinierte Kategorie-Tags
- Dynamischer Tagesgruß
- Positive Feedback-Toasts beim Abschließen von Aufgaben
