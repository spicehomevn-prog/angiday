import React from 'react';
import { Icon } from '../icons/Icon';

const renderGlyph = (glyph, size) =>
  Icon.names.includes(glyph)
    ? <Icon name={glyph} size={size} />
    : <span style={{ fontSize: size }}>{glyph}</span>;

/**
 * TabBar — the frosted floating bottom navigation. Each tab is an emoji icon
 * stacked over a short Vietnamese label; the active tab gets the red-soft pill.
 */
export function TabBar({ tabs, active, onChange, floating = true, style, ...rest }) {
  return (
    <nav
      style={{
        ...(floating ? {
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 14,
          width: 'calc(100% - 32px)',
          maxWidth: 'var(--tabbar-max)',
          zIndex: 40,
        } : { width: '100%' }),
        background: 'var(--glass-fill)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--line)',
        borderRadius: 22,
        boxShadow: 'var(--shadow)',
        display: 'flex',
        padding: 7,
        gap: 4,
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const on = t.key === active;
        return (
          <button
            key={t.key}
            className="agd-tab agd-focusable"
            aria-current={on ? 'page' : undefined}
            onClick={() => onChange?.(t.key)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: '8px 4px',
              borderRadius: 16,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-2xs)',
              fontWeight: 'var(--fw-semibold)',
              background: on ? 'var(--red-soft)' : 'transparent',
              color: on ? 'var(--red-deep)' : 'var(--ink-soft)',
              transition: 'background var(--dur-fast) var(--ease)',
            }}
          >
            <span style={{ display: 'grid', placeItems: 'center', height: 22 }}>{renderGlyph(t.icon, 22)}</span>
            {t.label}
          </button>
        );
      })}
    </nav>
  );
}
