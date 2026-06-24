The signature dish card; emoji-or-photo cover with tags/heart/swap and an expandable recipe + YouTube video link.

```jsx
<DishCard
  name="Thịt kho hột vịt" emoji="🍳"
  image="https://.../thit-kho.jpg" time="45 phút" cost={2}
  favorite={fav} open={open}
  onToggle={() => setOpen(!open)} onFavorite={toggleFav} onSwap={swap}
  servingNote="(cho 4 người)"
  ingredients={["Thịt ba chỉ", "Trứng vịt luộc", "Nước dừa"]}
  steps={["Ướp thịt 20 phút", "Thắng nước màu", "Kho lửa nhỏ"]}
  videoUrl="https://www.youtube.com/results?search_query=thịt+kho+cách+nấu"
  tipNote="Đậm đà, giàu đạm — món tủ của bữa cơm Việt."
  buyNote="Nước dừa, hành tím"
/>
```

- **Pass `image` for a real dish photo cover** (the title turns white over a scrim); omit it for the emoji-on-gradient fallback.
- **`videoUrl`** renders a red "▶ Xem video cách nấu" button under the steps that opens the cooking video in a new tab.
- `cost` 1–3 → dollar-sign icon repeated. Recipe headings are green; tip note green, buy note gold.
