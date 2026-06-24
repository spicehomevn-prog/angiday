import React from 'react';

/**
 * Onboarding step indicator. Completed steps are green dots, the current
 * step is an elongated red pill, upcoming steps are pale red-soft dots.
 */
export interface ProgressDotsProps {
  /** Total number of steps. */
  total: number;
  /** Zero-based index of the active step. */
  current: number;
  style?: React.CSSProperties;
}

export function ProgressDots(props: ProgressDotsProps): JSX.Element;
