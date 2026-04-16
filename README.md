# Stovetop

Stovetop is a Progressive Web App for organizing and browsing recipe Markdown files.

## Features

- Indexes recipe files from the `recipes/` folder
- Parses YAML-style frontmatter for metadata like tags, categories, cuisine, and timings
- Displays ingredients, instructions, notes, and source links
- Supports search plus category and tag filtering
- Installs as a PWA and caches app assets for offline use

## Managing Recipes

Recipe files live in the `recipes/` folder:

- Add a recipe by creating a new `.md` file in `recipes/`
- Edit a recipe by opening that file in your editor
- Remove a recipe by deleting its file from `recipes/`

The app does not store recipes internally. Your computer files are the source of truth.

## Recipe Format

The included `recipes/b-l-c-l-c-shaking-beef.md` file is a valid example. Recipes should use:

- YAML-style frontmatter between `---` markers
- A top-level `# Title`
- Optional `## Description`
- `## Ingredients`
- `## Instructions`
- Optional `## Notes`

A starter template is here:

---
title: "Recipe Title"
source: ""
author: ""
yield: ""
prep_time: ""
cook_time: ""
total_time: ""
categories:
  - dinner
tags:
  - ingredient
cuisine: ""
image: ""
date_saved: ""
---

# Recipe Title

## Description
Short summary of the recipe.

## Ingredients
- 1 item
- 2 item

## Instructions
1. First step.
2. Second step.

## Notes
- Optional notes.

---

## Development

```bash
npm install
npm run dev
```

`npm run dev` is the main workflow while you are editing recipes or UI. It does not register the service worker, so source changes stay in sync immediately and do not get masked by cached PWA assets.

For local network access:

```bash
npm run dev:lan
```

For local HTTPS on your LAN:

```bash
npm run dev:https
```

This uses a self-signed local certificate. Other devices may show a certificate warning until that certificate is trusted.

If you specifically want to test PWA behavior during development, use:

```bash
npm run dev:pwa
```

Or over LAN HTTPS:

```bash
npm run dev:https:pwa
```

## Production Build

```bash
npm run build
```

To preview the production build on your local network:

```bash
npm run preview:lan
```

To preview the production build over local HTTPS:

```bash
npm run build
npm run preview:https
```

`preview:https` runs on port `4174` by default so it does not collide with the dev server on `4173`.

Use `npm run preview` only when you want to verify the final built output in `dist/`. It will always reflect the last build, not live source changes.
