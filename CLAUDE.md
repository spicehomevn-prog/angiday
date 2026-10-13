# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**Sổ Thuê Nhà** is a Vietnamese rental-contract tracker for a landlord (Mrs. Hằng): rent collected per period, management fees paid out, debts and upcoming due dates. It replaced the old "Ăn Gì Đây?" meal planner (removed; still in git history) and keeps that app's visual design. Primary users are older people — large text, large buttons, every icon labelled.

Static site, **no framework, no bundler, no build step**. Deployed on **Vercel** with `public/` as the output directory (`vercel.json`).

## Commands

```bash
node --test                                   # unit tests (tests/core.test.mjs) — numbers must match the Excel
npx serve public                              # local preview (or: python3 -m http.server 8080 --directory public)
npx vercel / npx vercel --prod                # preview / production deploy
```

## Files

| File | Role |
|---|---|
| `public/index.html` | Markup shell + all CSS (design tokens in `:root`) |
| `public/js/data.js` | `SEED` — data extracted from the Excel (contracts, rent rows, fee rows) |
| `public/js/core.js` | `Core` — pure logic, no DOM; also loadable from Node for tests |
| `public/js/app.js` | UI: screens, bottom sheets, save/autosave, backup/restore |
| `public/js/pdf.js` | PDF export; lazy-loads `vendor/pdfmake.min.js` + `vendor/vfs_fonts_bvp.js` |
| `public/sw.js` | Offline cache (bump `CACHE` when the precache list changes) |

`data.js` and `core.js` use a UMD-style wrapper (`module.exports` in Node, `window.SEED` / `window.Core` in the browser). Keep it that way so tests can `require` them.

## Data model (`localStorage` key `thuenha:data`)

```
contracts[]: id, tenant, phone, property, start, end, rent, dueDay, cycle, deposit, fee, feeDay, feeTo, status, note
rent[]:      id (R###), period 'YYYY-MM', contract, months, due, dueDate 'YYYY-MM-DD', paidDate, paid, note
fees[]:      id (F###), period, contract, due, dueDate, paidDate, paid, note
```

- `due` and `dueDate` are stored per row when the row is created (editing a contract's rent doesn't rewrite history).
- Blank Excel cells stay `null`/`''` — don't coerce to 0.
- Prefs (font size, last backup) live in `thuenha:prefs`.

## Business rules (mirror the Excel formulas — see `core.js`)

- remaining = due − paid; days late = today − dueDate when remaining > 0.
- Status: remaining ≤ 0 → ✅ done; dueDate < today → 🔴 late; ≤ 3 days left → 🟡 soon; else ⚪ wait.
- Month summary = TỔNG QUAN C7:C10 / C13:C16; total debt = sum of remaining over late rows (C19/C20).
- New periods: from the contract's start month every `cycle` months (1 = monthly, 3 = quarterly) while dueDate ≤ end date, only for status "Đang thuê"; fees monthly when fee > 0.
- HĐ006: the 45.000.000đ received 05/08/2026 is recorded as advance payment for periods 08, 09, 10/2026 (agreed with the user; the Excel had a deleted formula there).

Reference numbers at 13/10/2026 (asserted in tests): 07/2026 rent 244.000.000 / 209.000.000 / 35.000.000; customers owe 923.000.000; we owe fees 53.842.700.

## Saving

Edits mutate in-memory `data` via `change()` and mark it dirty → yellow save bar with **Lưu lại** + countdown; autosave after 60 s (`AUTOSAVE_MS`). "Lưu" buttons inside sheets save immediately. `visibilitychange`/`pagehide` flush unsaved changes. Every change keeps an undo snapshot for the toast's "Hoàn tác".

## Constraints

- All UI copy in **Vietnamese with full diacritics**; warm voice (`mình`, `nhà mình`), never command-tone.
- Keep the design: cream paper background, yellow primary (`--yellow`), dark ink cards, dark floating tab bar, Bricolage Grotesque (display) + Be Vietnam Pro (body). Sizes in `rem` so the font-size setting scales everything.
- Elderly-friendly: touch targets ≥ 48–56px, text labels next to icons, no hidden gestures, confirm destructive actions. Keep keyboard support (native buttons, `<dialog>`) and `prefers-reduced-motion`.
- PDF text must use the embedded Be Vietnam Pro font; emoji don't render in PDFs (strip them, use colored cells).
- No secrets or API keys in the repo. The seed data is intentionally public (owner's decision).
- Take screenshots when there is a major UI change.
