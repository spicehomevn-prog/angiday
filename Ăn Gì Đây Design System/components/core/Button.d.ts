import React from 'react';

export type ButtonVariant = 'primary' | 'ghost' | 'soft' | 'line';
export type ButtonSize = 'md' | 'lg';

/**
 * The brand's pill-shaped action button. Use `primary` for the single main
 * action on a screen (it gets the chunky pressable shadow); `ghost`/`soft`
 * for secondary actions, `line` for tertiary/cancel.
 *
 * @startingPoint section="Core" subtitle="Pill buttons with the signature chunky press" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Stretch to full container width. @default false */
  block?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
