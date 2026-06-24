Frosted floating bottom nav; emoji icon over short label, red-soft pill on active.

```jsx
<TabBar
  active={tab}
  onChange={setTab}
  tabs={[
    { key: 'home', icon: '🏠', label: 'Hôm nay' },
    { key: 'favorites', icon: '❤️', label: 'Đã lưu' },
    { key: 'settings', icon: '⚙️', label: 'Cài đặt' },
  ]}
/>
```

- `floating` (default true) pins it to the bottom; set false to embed inline in a card/demo.
