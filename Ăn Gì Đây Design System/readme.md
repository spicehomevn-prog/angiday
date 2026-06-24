# Ăn Gì Đây? — Design System

> *"Người bạn nhỏ trong căn bếp"* — a little friend in the kitchen.

**Ăn Gì Đây?** ("What shall we eat today?") is a Vietnamese family meal-planning
app. Each day a household taps one button to "roll" a balanced day of meals —
breakfast, lunch and dinner across the Vietnamese meal grammar of **mặn** (a
savoury main), **rau** (greens) and **canh** (soup) — each with an ingredient
list, steps, a nutrition note and a reminder of any pantry seasonings still to
buy. It onboards a family by asking their name, headcount, daily budget, taste
in cuisines, the seasonings already in their cupboard, and any dietary needs
(slimming, low-seasoning, vegetarian, calcium-rich for elders, macrobiotic),
then tailors suggestions to fit. Saved dishes and menus live in a Favorites tab.

The product is warm, домашний and unfussy: it speaks like a friendly family
member, leans on emoji as its entire icon set, and dresses everything in a
"toasted kitchen paper" palette with a chunky, pressable chili-red button.

## Sources

- **Codebase:** `ANGIDAY/an-gi-day-v2.html` — a single-file vanilla HTML/CSS/JS
  build of the whole app (welcome, onboarding, home/roll, favorites, settings).
  Every token, component and screen in this system is derived from it. The app
  optionally pulls real dish photos from the **Pexels** API when a key is set;
  otherwise it shows the dish emoji on a warm gradient.

This is the only material provided. There is no Figma file or separate brand
guide; the HTML build is the single source of truth.

---

## Content fundamentals

**Language.** Vietnamese throughout, with full diacritics. The product is built
Vietnamese-first (hence the Be Vietnam Pro body face).

**Voice — a warm family member, not an app.** The copy speaks as *mình* ("me",
intimate first person) and addresses the household as *nhà mình* ("our home /
our family"). It never says "the user" or issues commands; it offers to help:
*"Để mình lo chuyện nghĩ món"* ("Let me handle the thinking-up-of-dishes"). It
is encouraging and casual, often ending an invitation with *nha* / *nhé* (a
soft, affectionate particle): *"...bấm ❤️ để cất lại nha!"*.

**Casing & punctuation.** Sentence case everywhere. Titles are short questions
or warm statements: *"Bữa nay ăn gì ta?"*, *"Nhà mình có mấy người ăn?"*. The
one all-caps treatment is the **eyebrow** label (e.g. `HÔM NAY`, `BỘ SƯU TẬP`),
letter-spaced and red. Numbers use Vietnamese formatting: `200.000đ` (dot
thousands, `đ` suffix).

**Emoji are part of the writing.** They open headings and labels and stand in
for icons: `🎲 Lắc thực đơn`, `❤️ Lưu`, `🍗 Đủ đạm`, `🥬 Có rau xanh`,
`🦴 Giàu canxi`. Used generously but always meaningfully — each emoji maps to a
real concept (a meal time, a food group, an action, a nutrition tag).

**Tone examples.**
- Welcome: *"Hôm nay nhà mình ăn gì đây?"* / *"Để mình lo chuyện nghĩ món."*
- Onboarding: *"Gọi gia đình mình là gì nhỉ?"* · *"Mình sẽ canh khẩu phần cho vừa"*
- Empty state: *"Chưa có gì được lưu. Lắc thực đơn rồi bấm ❤️ để cất lại nha!"*
- Toast confirmations: *"Đã lưu món yêu thích ❤️"*, *"Đã đổi món khác 🔄"*

**Microcopy patterns.** Buttons are verbs + emoji (*"Bắt đầu nào 🌷"*,
*"Xong, vào bếp thôi! 🍳"*). Confirmations are past-tense and brief, delivered
as a toast. Helper text under a question explains *why* it's asked, gently.

---

## Visual foundations

**Palette — toasted kitchen paper.** Backgrounds are warm creams (`--paper`
#FBF3E8 → `--paper-2` #F4E7D6) under a soft radial highlight, never plain white
or grey. Text is a warm brown ink (`--ink` #3B2A20), secondary text a muted
taupe (`--ink-soft`). The primary is a friendly **chili red** (`--red` #E0533B,
pressed `--red-deep` #C23E29). Accents are **herb green** (#3F9A5B, "fresh &
healthy"), **turmeric gold** (#EFA53C) and **plum** (#A8537E, also the focus
ring). Every accent has a pale **`-soft`** tint for chips, badges and ghost
buttons. There are **no neutral greys** — even borders (`--line` #EDE0CF) and
shadows are warm.

**Background.** A fixed two-layer wash: a radial cream highlight at top-centre
over a vertical `--paper → --paper-2` gradient (`--bg-gradient`). No photographic
or pattern backgrounds; imagery appears only inside dish-card covers.

**Type.** Two families. **Baloo 2** (rounded, friendly; weights 700–800) for
anything loud — the wordmark, headings, big stepper numbers. **Be Vietnam Pro**
(400–700) for everything you read. Headings carry +0.2px tracking; body runs at
1.5 line-height. The hero headline is 33px/1.1; the eyebrow is 11.5px, 700,
1.4px-tracked, uppercase, red.

**Shape & radius.** Generously rounded. Cards use a 26px radius, inner blocks
(dish cards, list rows) 18px, inputs 13px, and all buttons/chips/badges are full
pills (999px). Mobile-first, a single ≤560px column.

**Cards.** White (`--card`) surface, **1px `--line` hairline border**, 26px
radius, and a **warm brown soft shadow** (`--shadow` = `0 14px 34px
rgba(120,75,40,.14)`). Hero/"ask" cards swap the flat white for a subtle cream
gradient (`tone="warm"`). Dish cards use the smaller `--shadow-sm`.

**Shadows.** Two soft warm elevations (`--shadow`, `--shadow-sm`) for floating
surfaces — always brown-tinted, never neutral. Separately, the **signature
chunky button shadow**: a *hard offset with no blur* (`0 7px 0 --red-deep`) so
the primary button looks like a physical key.

**Buttons & press feel.** The primary button is the brand's signature: red pill,
chunky 7px hard shadow below it. On `:hover` it darkens and the shadow shrinks to
5px; on `:active` the whole button translates down 2px and the shadow drops to
3px — it visibly *presses in*. Variants: `ghost` (red-soft), `soft` (green-soft),
`line` (white + 2px hairline that turns red on hover).

**Hover & press states.** Hover = a soft fill change or border turning red (chips,
line buttons, tabs go to `--paper-2`); mini round buttons scale up 1.08. Press =
translate-down on buttons (the chunky-shadow trick), filled state on chips.
Nothing uses opacity dimming except disabled (0.55).

**Motion — playful but short.** A small named set: `agd-bob` (the welcome bowl
floats and tilts, 2.8s loop — the only looping animation), `agd-pop` (cards fade
+ scale in, .35s), `agd-shake` (the dice wiggles when you roll, .5s), `agd-pulse`
(image-loading shimmer). The recipe accordion expands via a .35s max-height ease.
Easing is the standard `cubic-bezier(.4,0,.2,1)`. All motion respects
`prefers-reduced-motion`.

**Transparency & blur.** Used in exactly one place: the **floating bottom tab
bar** is frosted glass — `rgba(255,255,255,.86)` + `blur(12px)` — over a hairline
border and the soft shadow. Dish-card photo covers use a dark bottom-up gradient
scrim so the white title stays legible.

**Layout rules.** Everything lives in one centred column (≤560px), generous
22px card padding, cards stacked with 16px gaps. The tab bar floats fixed near
the bottom; toasts appear above it.

**Imagery vibe.** Dish cards carry **real food photography** — warm, appetising,
landscape shots under a dark bottom-up scrim so the white dish title stays
legible (the demo catalogue pulls verified Wikimedia Commons photos via the
stable `Special:FilePath` redirect; a consuming app swaps in its own CDN/Pexels
images). When a dish has no photo yet, the cover falls back to the dish **emoji**
centred on a gold→red soft gradient. Cover photos sit behind a title and small
white tag pills (time, cost as dollar-sign icons, a leaf if vegetarian). An expanded
recipe also offers a red **“Xem video cách nấu”** button linking to a cooking
video (YouTube).

---

## Iconography

**The `Icon` component is the icon system.** The original app used Unicode emoji
for every glyph; this design system replaces them with a clean, professional
**line-icon set** — `components/icons/Icon.jsx`: 28 rounded-stroke icons on a
24px grid, drawn in `currentColor` so each takes the colour of whatever it sits
in (matching Baloo 2's soft corners). `TabBar`, `MealHeader` and `DishCard`
accept icon **names** directly (with emoji fallback). Emoji are now reserved for
two jobs only: a **per-dish food glyph** that backs up the dish-card cover when
no photo is available, and the occasional expressive emoji in
**copy** (part of the warm voice). The concept → icon mapping:

- **Brand mark:** the lift-the-lid logo (`assets/logo-mark.svg`) — a pot with its lid raised and a puff of steam — next to the "Ăn Gì **Đây?**" wordmark (the "Đây?" in green).
- **Navigation:** 🏠 Hôm nay · ❤️ Đã lưu · ⚙️ Cài đặt.
- **Meal times:** 🌅 sáng · ☀️ trưa · 🌙 tối. **Food groups / dishes:** each dish
  has its own emoji (🍜 phở, 🐟 cá, 🥬 rau, 🍲 canh…).
- **Actions:** 🎲 roll · 🔄 swap · ❤ favourite · 🗑️ delete · 🛒 ingredients ·
  👩‍🍳 steps.
- **Nutrition badges:** 🍗 đạm · 🥬 rau · 🍵 canh · 🦴 canxi · 🥗 ít calo · 🌱 chay.

Use the `Icon` set for all UI affordances; don't recolor emoji or pull in a
separate icon library. Need a new glyph? Add it to `Icon.jsx` in the same
rounded-stroke style and it appears in the showcase automatically. The brand
**logo** is now a real symbolic mark — a pot with its lid lifting and a puff of
steam, the daily “what's under the lid?” reveal (`assets/logo-mark.svg`, with
`-white` knockout and `-ink` monochrome variants) — replacing the old 🍲 emoji;
dish-cover food emoji intentionally stay as imagery fallbacks.

---

## Index — what's in this system

**Foundations**
- `styles.css` — the single entry point consumers link (an `@import` manifest).
- `tokens/` — `fonts.css` (Google Fonts: Baloo 2 + Be Vietnam Pro), `colors.css`,
  `typography.css`, `spacing.css`, `effects.css` (shadows, background, keyframes),
  `base.css` (the few hover/press CSS rules that can't be inline).

**Components** (`components/<group>/` — React, namespace `window.NGYDesignSystem_adcec4`)
- `core/` — **Button**, **Chip**, **Card**, **Badge**
- `forms/` — **Input**, **Stepper**
- `navigation/` — **TabBar**, **ProgressDots**
- `food/` — **MealHeader**, **DishCard** (the signature card)

Each component dir has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and a
`*.card.html` showcase.

**UI kit** (`ui_kits/app/`)
- `index.html` — interactive recreation of the mobile app: welcome → onboarding →
  home (roll a balanced menu, open recipes, favourite) → favorites tab. Composes
  the components above. `dishes.js` (sample catalogue) + `screens.jsx` (screens).

**Foundation specimen cards** (`guidelines/`) — the swatches/specimens shown in
the Design System tab (colors, type, radii, spacing, shadows, wordmark).

**Other**
- `SKILL.md` — makes this folder usable as a downloadable Claude skill.
- `readme.md` — this file.

> Compiler-generated (do not edit): `_ds_bundle.js`, `_ds_manifest.json`,
> `_adherence.oxlintrc.json`.
