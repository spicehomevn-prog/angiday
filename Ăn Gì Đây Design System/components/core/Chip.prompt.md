Selectable rounded option; toggle `selected` from state.

```jsx
<Chip selected={picked} onClick={() => setPicked(!picked)}>🍚 Món Việt</Chip>
<Chip tone="green" selected={hasGarlic}>Tỏi</Chip>
```

- `tone`: `red` (taste/diet/cuisine pickers) · `green` (pantry seasonings)
- Lay out in a wrapping flex row with ~10px gap, usually centred.
