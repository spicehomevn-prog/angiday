import React from 'react';

/**
 * Chip — a selectable rounded option. Red tone for taste/diet choices,
 * green tone for the "pantry seasonings" picker. Toggles its `selected`
 * fill on click.
 */
export function Chip({
  selected = false,
  tone = 'red',
  type = 'button',
  style,
  children,
  ...rest
}) {
  const selFill = tone === 'green'
    ? { background: 'var(--green)', borderColor: 'var(--green)', color: '#fff' }
    : { background: 'var(--red)', borderColor: 'var(--red)', color: '#fff' };

  return (
    <button
      type={type}
      data-tone={tone}
      aria-pressed={selected}
      className="agd-chip agd-focusable"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: '2px solid var(--line)',
        background: 'var(--card)',
        color: 'var(--ink)',
        borderRadius: 'var(--r-pill)',
        padding: '11px 16px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-md)',
        fontWeight: 'var(--fw-semibold)',
        cursor: 'pointer',
        transition: 'border-color var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)',
        ...(selected ? selFill : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
