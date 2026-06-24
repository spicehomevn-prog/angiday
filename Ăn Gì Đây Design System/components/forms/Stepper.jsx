import React from 'react';

/**
 * Stepper — the big quantity control ("how many people eat?"). Two round
 * soft buttons flank a large Baloo number. Clamped between min and max.
 */
export function Stepper({
  value,
  onChange,
  min = 1,
  max = 20,
  label,
  unit,
  style,
  ...rest
}) {
  const set = (next) => onChange?.(Math.max(min, Math.min(max, next)));
  const roundBtn = {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: 'var(--red-soft)',
    color: 'var(--red-deep)',
    fontSize: 28,
    fontWeight: 'var(--fw-extra)',
    fontFamily: 'var(--font-display)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background var(--dur-fast) var(--ease)',
  };
  return (
    <div style={style} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
        <button className="agd-step-btn agd-focusable" aria-label="Giảm" style={roundBtn} onClick={() => set(value - 1)}>–</button>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--fw-extra)',
          fontSize: 'var(--fs-stepper)',
          minWidth: 70,
          textAlign: 'center',
          color: 'var(--red-deep)',
        }}>{value}</span>
        <button className="agd-step-btn agd-focusable" aria-label="Tăng" style={roundBtn} onClick={() => set(value + 1)}>+</button>
      </div>
      {(unit || label) && (
        <div style={{ textAlign: 'center', color: 'var(--ink-soft)', marginTop: 2, fontFamily: 'var(--font-body)' }}>
          {unit || label}
        </div>
      )}
    </div>
  );
}
