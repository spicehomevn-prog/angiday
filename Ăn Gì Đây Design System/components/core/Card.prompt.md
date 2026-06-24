The white rounded surface that holds content; `warm` for hero/CTA cards.

```jsx
<Card>
  <div className="eyebrow">Hôm nay</div>
  <h2>Chào nhà mình! 👋</h2>
</Card>

<Card tone="warm">…ask card…</Card>
```

- `tone`: `plain` (white) · `warm` (cream gradient, used on hero/ask cards) · `sunken` (off-white for list rows)
- 26px radius, 1px `--line` border, warm `--shadow`. Stack cards with 16px gap.
