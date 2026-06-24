import React from 'react';

/**
 * ProgressDots — the onboarding step indicator. Past steps are green, the
 * current step is an elongated red pill, future steps are red-soft dots.
 */
export function ProgressDots({ total, current, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 7, justifyContent: 'center', ...style }} {...rest}>
      {Array.from({ length: total }).map((_, i) => {
        const done = i < current;
        const on = i === current;
        return (
          <i
            key={i}
            style={{
              display: 'block',
              height: 8,
              width: on ? 22 : 8,
              borderRadius: on ? 6 : '50%',
              background: done ? 'var(--green)' : on ? 'var(--red)' : 'var(--red-soft)',
              transition: 'all var(--dur-base) var(--ease)',
            }}
          />
        );
      })}
    </div>
  );
}
