# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**Ăn Gì Đây?** ("What shall we eat today?") is a Vietnamese family meal-planning web app. This workspace contains two parallel codebases:

- **`an-gi-day-v2.html`** — the canonical single-file vanilla app (HTML + CSS + JS, no build step). This is the source of truth for all product logic, screens, and content.
- **`Ăn Gì Đây Design System/`** — a React-based design system extracted from the vanilla app. See its own `CLAUDE.md` for component and brand rules.

The deploy target is **Netlify** as a static site (no build command). The production structure places `index.html` under `public/` and an optional Pexels proxy under `netlify/functions/`.

## Commands

```bash
# Local dev with Netlify Functions at http://localhost:8888
netlify dev

# Preview deploy
netlify deploy

# Production deploy
netlify deploy --prod

# Set Pexels API key in Netlify environment (never hardcode it)
netlify env:set PEXELS_API_KEY "your-key-here"
```

`netlify.toml` must set `publish = "public"` and `functions = "netlify/functions"` with no build command.

## Vanilla app architecture (`an-gi-day-v2.html`)

The file is organized in clearly labelled comment sections — scan for the Vietnamese section names:

| Section | What it contains |
|---|---|
| `GIA VỊ` | `SEASONINGS[]` array + `SEASON_NAME` lookup map |
| `KHO MÓN` | `DISHES[]` (47 dishes) + `IMG_Q` (English Pexels keywords per dish ID) |
| `STORAGE` | `Store` object + storage key constants |
| `STATE` | Global vars: `profile`, `favorites`, `today`, `pexelsKey`, `imgCache` |
| `NAV` | Screen switching, tab activation, toast notifications |
| `ONBOARDING` | Multi-step profile form (name, headcount, budget, cuisine, seasonings, dietary needs) |
| `GỢI Ý` | Menu generation algorithm |
| `HOME` | Profile loading, menu rolling, dish card rendering |
| `ẢNH` | Pexels image loading + caching |
| `FAVORITES` | Save/view/delete saved dishes and menus |
| `SETTINGS` | API key management, profile editing |
| `TIỆN ÍCH` | Helpers: `byId`, date/VND formatting, HTML escaping |
| `INIT` | IIFE: routes to welcome or home based on stored profile |

**Screens:** welcome → onboarding → home (roll menu) → favorites → settings. All five `#screen-*` divs exist in the DOM; JS shows/hides them.

**Menu algorithm** (`GỢI Ý`): filters by budget + dietary flags, scores dishes, then assembles: breakfast = 1 `sang` dish; lunch/dinner = 1 `man` + 1 `rau` + 1 `canh`.

**Image loading** (`loadDishImage`): checks `imgCache` first, then calls Pexels with the dish's `IMG_Q` keyword. Results are cached in `angiday:imgcache`. Requests are staggered 120ms apart to avoid rate limiting. Falls back to the dish emoji on a gradient if no key or fetch fails.

### Dish data structure

Every entry in `DISHES[]` must have all of these fields:

```
id   — unique string
t    — title (Vietnamese)
e    — emoji
c    — category: "sang" | "man" | "rau" | "canh"
am   — cuisine: "viet" | "a" | "tay"
cp   — cost tier: 1 | 2 | 3
chay — boolean (vegetarian)
tg   — cook time (minutes, number)
g    — servings (number)
nl   — nutrition note (string)
cn   — ingredients (string, Vietnamese)
dd   — steps (string, Vietnamese)
```

Dietary flags (additional boolean fields): `itgv` (low-seasoning), `ankieng` (diet-friendly), `canxi` (calcium-rich), `tduong` (macrobiotic).

When adding a dish, also add its English Pexels search keyword to `IMG_Q[id]`.

### Storage — MUST change for Netlify

The current `Store` object uses `window.storage` (a Claude artifact API that doesn't exist in browsers). Replace it before deploying:

```js
const Store = {
  get(k){ try { const v = localStorage.getItem(k); return v == null ? null : JSON.parse(v); } catch(e){ return null; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} },
  del(k){ try { localStorage.removeItem(k); } catch(e){} }
};
```

Existing `await Store.get(...)` call sites work unchanged — `await` on a plain value is a no-op.

Storage keys (keep as-is): `angiday:profile`, `angiday:favorites`, `angiday:today`, `angiday:pexelskey`, `angiday:imgcache`.

## Pexels image proxy (Netlify Function)

**Option A (simpler):** Keep the current code. Users paste their Pexels key in Settings; it's stored in `localStorage`. Each device needs its own key.

**Option B (recommended for shared sites):** Add `netlify/functions/pexels.mjs` that proxies Pexels using the `PEXELS_API_KEY` env var. The function receives `?query=<term>` and returns Pexels JSON. In `index.html`, update `loadDishImage` to fetch `/.netlify/functions/pexels?query=<term>` (no Authorization header, no key check). The Pexels attribution line (`📷 author / Pexels`) is required by Pexels terms — keep it.

## Design system

`Ăn Gì Đây Design System/` is a React component library and design token system derived from the vanilla app. It is **not** required for the Netlify deploy — it's a separate tool for building on-brand UIs.

- Do not edit `_ds_bundle.js`, `_ds_manifest.json`, or `_adherence.oxlintrc.json` — they are compiler-generated.
- Read `Ăn Gì Đây Design System/CLAUDE.md` for brand rules, component usage, and the token system.
- Use `Ăn Gì Đây Design System/ui_kits/app/index.html` to preview the full app flow rendered with React components.

## Key constraints

- **No framework, no bundler** for the vanilla app. Keep it a single file.
- All UI text and copy must remain in **Vietnamese** with full diacritics. Voice: warm family member (`mình` / `nhà mình`), never formal or command-tone.
- The `c` category field only accepts exactly: `sang`, `man`, `rau`, `canh`.
- Pexels API key must never be hardcoded in source files or `netlify.toml`. Use Netlify env vars (Option B) or `localStorage` (Option A).
- Preserve all existing features: onboarding, roll menu, swap dish, favorites, settings, bottom tab bar, keyboard support, `prefers-reduced-motion`.
- Take screenshot when there is major change