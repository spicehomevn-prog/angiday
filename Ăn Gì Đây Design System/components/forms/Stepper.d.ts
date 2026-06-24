import React from 'react';

/**
 * Big quantity stepper — two round soft buttons around a large Baloo number.
 * Used for "how many people eat" and similar count inputs.
 */
export interface StepperProps {
  /** Current value. */
  value: number;
  /** Called with the next clamped value. */
  onChange?: (next: number) => void;
  /** @default 1 */
  min?: number;
  /** @default 20 */
  max?: number;
  /** Caption under the number, e.g. "người". */
  unit?: string;
  label?: string;
  style?: React.CSSProperties;
}

export function Stepper(props: StepperProps): JSX.Element;
