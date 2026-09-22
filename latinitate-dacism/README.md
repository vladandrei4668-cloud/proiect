# Daco-Romanii · Latinitate și Dacism

Aplicație web educațională (Next.js App Router + TypeScript + Tailwind CSS).

## Rulare pe localhost

```bash
npm install
npm run dev
```

Deschide http://localhost:3000

## Build de producție

```bash
npm run build
npm start
```

## Cerințe

- Node.js 20.9 sau mai nou

## Structură

- `app/` — layout, pagina principală, stiluri globale
- `components/` — Navbar, Hero, Dacii, Romanizarea, MythCard, MythsSection, LinguisticTable, Footer
- `data/myths.ts` — miturile și răspunsurile lor (editează aici pentru a adăuga mituri)
- `data/words.ts` — intrările tabelului lingvistic (editează aici pentru a adăuga cuvinte)
