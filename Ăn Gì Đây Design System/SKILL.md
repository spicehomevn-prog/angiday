---
name: angiday-design
description: Use this skill to generate well-branded interfaces and assets for Ăn Gì Đây? (a warm, emoji-forward Vietnamese family meal-planning app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Ăn Gì Đây? — a Vietnamese family meal-planner. Voice is a warm family member ("mình" / "nhà mình"), Vietnamese-first, emoji used as the entire icon set.
- **Entry CSS:** link `styles.css` (an `@import` manifest reaching `tokens/`). Fonts are Baloo 2 (display) + Be Vietnam Pro (body), loaded from Google Fonts.
- **Components:** React, exported on `window.NGYDesignSystem_adcec4` from `_ds_bundle.js`. See `components/*/<Name>.prompt.md` for usage.
- **Signature looks:** the lift-the-lid logo mark (`assets/logo-mark.svg` — a pot with raised lid + steam), toasted-cream paper background, chili-red **chunky pressable** primary button (hard `0 7px 0` shadow that sinks on click), warm brown shadows, full-pill chips/badges, 26px rounded cards.
- **Reference UI:** `ui_kits/app/index.html` is a full interactive recreation of the app.

## Rules of thumb
- Warm palette only — no neutral greys; borders and shadows are brown-tinted.
- Emoji are the iconography; don't add a separate icon library or recolor emoji.
- Sentence case; the only uppercase is the red, letter-spaced eyebrow label.
- Keep motion short and playful (pop in, dice shake, bowl bob) and honor `prefers-reduced-motion`.
