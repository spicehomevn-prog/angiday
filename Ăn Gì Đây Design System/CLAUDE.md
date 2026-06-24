# Ăn Gì Đây? — Design System (Claude Code guide)

This repository **is** the Ăn Gì Đây? design system — a warm, emoji-light
Vietnamese family meal-planner brand. When opened in Claude Code, use it to
generate on-brand interfaces and assets (production code or throwaway
prototypes/mocks).

## Start here
1. Read **`readme.md`** — the full design guide: brand context, content/voice
   rules, visual foundations, iconography, and a file index.
2. Read **`SKILL.md`** — the one-paragraph operating brief (also makes this
   folder a drop-in Agent Skill).
3. Browse component usage in **`components/*/<Name>.prompt.md`**.

## How it's organized
- **`styles.css`** — the single CSS entry point. It is an `@import` manifest
  only; all real declarations live in **`tokens/`** (`colors`, `typography`,
  `spacing`, `effects`, `base`, `fonts`). Link this one file to inherit every
  token. Fonts (Baloo 2 + Be Vietnam Pro) load from Google Fonts.
- **`components/<group>/`** — React UI primitives. Each is `<Name>.jsx` with a
  named `export function <Name>`, a sibling `<Name>.d.ts` (props contract) and
  `<Name>.prompt.md` (usage). Groups: `core/` (Button, Chip, Card, Badge),
  `forms/` (Input, Stepper), `navigation/` (TabBar, ProgressDots), `food/`
  (MealHeader, DishCard), `icons/` (Icon — the rounded line-icon set).
- **`ui_kits/app/`** — `index.html` is a full interactive recreation of the
  mobile app (welcome → onboarding → roll a balanced menu → favorites).
  Composes the components; `dishes.js` + `screens.jsx` drive it.
- **`templates/today-menu/`** — a reusable "Today's Menu" starting point.
- **`guidelines/`** — foundation specimen cards (colors, type, spacing, logo).
- **`assets/`** — the logo mark (`logo-mark.svg` + `-white`/`-ink` variants).

## Using the components
Components are bundled to **`_ds_bundle.js`** and exposed on
`window.NGYDesignSystem_adcec4`. In a plain HTML page: link `styles.css`, load
React + Babel, `<script src=".../_ds_bundle.js">`, then
`const { Button, DishCard } = window.NGYDesignSystem_adcec4`. In a real React
app, port the `.jsx` sources directly (they only import React and reference CSS
custom properties — no other deps).

## Generated — do NOT edit by hand
`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are produced by
a compiler that reads the sources. Edit the `.jsx`/`.css`/token files instead.

## Brand cheat-sheet
- Palette: toasted-cream paper (`--paper` #FBF3E8), chili-red primary
  (`--red` #E0533B), herb green, turmeric gold, plum — all warm, no neutral grey.
- Type: Baloo 2 (display/headings), Be Vietnam Pro (body). Sentence case;
  uppercase only for the red, letter-spaced eyebrow label.
- Signature: chunky pressable red button (hard `0 7px 0` shadow that sinks on
  click), 26px rounded warm-shadow cards, full-pill chips/badges.
- Icons: the `Icon` component (rounded line icons). Don't add another icon
  library or recolor emoji. Logo = the lift-the-lid pot mark in `assets/`.
- Voice: a warm family member — first person *mình*, addresses the household as
  *nhà mình*; Vietnamese-first with full diacritics.
