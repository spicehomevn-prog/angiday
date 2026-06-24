The brand's clean line-icon set — rounded-stroke, 24px grid, `currentColor`. The professional replacement for emoji.

```jsx
<Icon name="home" />
<Icon name="heart" filled style={{ color: 'var(--red)' }} />
<Icon name="clock" size={16} />
<Icon name="leaf" strokeWidth={1.75} />
```

- `name`: navigation (`home` `heart` `settings`), meal times (`sunrise` `sun` `moon`), actions (`dice` `refresh` `trash` `plus` `minus` `check` `close` `chevronRight` `chevronDown`), food (`basket` `chefHat` `leaf` `sprout` `drumstick` `soup` `bone` `salad` `bulb`), meta (`clock` `dollar` `wallet` `users` `sparkle`).
- Colour comes from the parent's `color` (it draws in `currentColor`). `filled` gives the solid variant.
- `TabBar`, `MealHeader` and `DishCard` accept these names directly (with emoji fallback for unknown strings).
