import React from 'react';

/**
 * Input — text field with the brand's rounded hairline border, off-white
 * fill and red focus outline. Optional label above.
 */
export function Input({ label, id, style, ...rest }) {
  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--fw-semibold)',
            fontSize: 'var(--fs-sm)',
            marginBottom: 6,
            color: 'var(--ink)',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className="agd-input"
        style={{
          width: '100%',
          border: '2px solid var(--line)',
          borderRadius: 'var(--r-sm)',
          padding: '13px 14px',
          fontSize: 'var(--fs-lg)',
          fontFamily: 'var(--font-body)',
          background: 'var(--surface-sunken)',
          color: 'var(--ink)',
          outline: 'none',
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
