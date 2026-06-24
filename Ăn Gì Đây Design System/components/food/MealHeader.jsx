import React from 'react';
import { Icon } from '../icons/Icon';

/**
 * MealHeader — the section divider for a meal ("Bữa sáng", "Bữa trưa").
 * Icon (a brand line-icon name, or any emoji string), a red title, then a
 * hairline rule filling the remaining space.
 */
export function MealHeader({ icon, title, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, margin: '0 2px 11px', color: 'var(--red-deep)', ...style }} {...rest}>
      {Icon.names.includes(icon)
        ? <Icon name={icon} size={20} />
        : <span style={{ fontSize: 20 }}>{icon}</span>}
      <h3 style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-h3)',
        color: 'var(--red-deep)',
        letterSpacing: 'var(--tracking-display)',
      }}>{title}</h3>
      <span style={{ flex: 1, height: 2, background: 'var(--line)', borderRadius: 2 }} />
    </div>
  );
}
