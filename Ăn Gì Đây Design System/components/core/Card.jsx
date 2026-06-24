import React from 'react';

/**
 * Card — the white rounded surface everything sits on: hairline border,
 * big 26px radius, warm brown soft shadow. `tone="warm"` adds the subtle
 * cream gradient used on the "ask" / hero cards.
 */
export function Card({ tone = 'plain', padding, style, children, ...rest }) {
  const tones = {
    plain: { background: 'var(--card)' },
    warm: { background: 'linear-gradient(160deg, #fff, #FFF4EA)' },
    sunken: { background: 'var(--surface-sunken)' },
  };
  return (
    <div
      style={{
        border: '1px solid var(--line)',
        borderRadius: 'var(--r)',
        boxShadow: 'var(--shadow)',
        padding: padding ?? 'var(--card-pad)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
