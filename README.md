# Example Workspace con Release Please

Monorepo Node.js con npm workspaces + Release Please (GitHub Actions).

## Requisiti
- Node.js 20+
- npm 10+

## Setup locale
```bash
npm ci
npm run -ws test
npm --workspace apps/web start
```

Apri http://localhost:3000

## Convenzione di commit
Usa **Conventional Commits** per il changelog automatico:

- `feat(utils): aggiunge funzione parseDate`  → nuova minor
- `fix(web): corregge timeout`                → patch
- `feat!: cambia API greet()`                 → major

## Rilasci automatici
1. Fai commit in `main` con messaggi convenzionali.
2. Il workflow **release-please** apre una PR di rilascio con version bump e CHANGELOG per ogni package toccato.
3. Unisci la PR: verranno creati **tag**, **GitHub Release** e pubblicati i file `CHANGELOG.md`/`package.json` aggiornati.

> Nota: per la pubblicazione su npm, aggiungi un job separato che reagisce ai tag (es. `vX.Y.Z`) e lanci `npm publish` per i pacchetti pubblici.
