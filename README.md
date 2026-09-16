# Find Your Leading Man

A 5-question choose-your-own-adventure quiz that funnels you toward one of five fictional "celebrity husband" archetypes, then reveals an interactive envelope with a personalized mini wedding site — including an "Our Story" timeline generated from your actual quiz answers.

**Play it live: https://sahana631.github.io/find-your-leading-man/**

## Running locally

```bash
npm install
npm run dev
```

## Deploying

```bash
npm run deploy
```

Builds the app and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

## Stack

React + Vite, plain CSS (no UI framework). Quiz content, outcomes, and story fragments live in `src/data/` so they're easy to edit independently of the components.
