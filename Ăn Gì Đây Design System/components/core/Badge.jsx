import React from 'react';

/**
 * Badge — a small soft-tint pill used to label menus ("Đủ đạm", "Có rau
 * xanh"). Four tones map to the brand accents.
 */
export function Badge({ tone = 'gold', style, children, ...rest }) {
  const tones = {
    gold: { background: 'var(--gold-soft)', color: 'var(--gold-ink)' },
    green: { background: 'var(--green-soft)', color: 'var(--green)' },
    plum: { background: 'var(--plum-soft)', color: 'var(--plum)' },
    red: { background: 'var(--red-soft)', color: 'var(--red-deep)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: 'var(--fs-xs)',
        padding: '5px 11px',
        borderRadius: 'var(--r-pill)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
