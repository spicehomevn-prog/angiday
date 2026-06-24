import React from 'react';

/**
 * Button — the brand's pill-shaped action. The primary variant carries a
 * chunky hard-offset shadow so it reads as a physically pressable button
 * that sinks on click.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  type = 'button',
  style,
  children,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    fontSize: size === 'lg' ? 'var(--fs-lg)' : 'var(--fs-md)',
    lineHeight: 1,
    borderRadius: 'var(--r-pill)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    padding: size === 'lg' ? '17px 24px' : '14px 22px',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease), background var(--dur-base) var(--ease)',
    width: block ? '100%' : undefined,
  };

  const variants = {
    primary: {
      background: 'var(--red)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--btn-shadow)',
    },
    ghost: {
      background: 'var(--red-soft)',
      color: 'var(--red-deep)',
    },
    soft: {
      background: 'var(--green-soft)',
      color: 'var(--green)',
    },
    line: {
      background: 'var(--card)',
      border: '2px solid var(--line)',
      color: 'var(--ink)',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      data-variant={variant}
      className="agd-btn"
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
