Pill-shaped primary action; use one `primary` per screen, others as `ghost`/`soft`/`line`.

```jsx
<Button variant="primary" size="lg" block onClick={roll}>Lắc thực đơn 🎲</Button>
<Button variant="ghost">Chỉnh sửa</Button>
<Button variant="soft">🎲 Lắc lại</Button>
<Button variant="line">Quay lại</Button>
```

- `variant`: `primary` (red, chunky press shadow) · `ghost` (red-soft) · `soft` (green-soft) · `line` (white + hairline border)
- `size`: `md` (default) · `lg` (welcome/CTA)
- `block`: full width. Emoji at the end of the label is on-brand.
