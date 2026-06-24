import React from 'react';

/**
 * Text field with rounded hairline border, off-white fill and red focus
 * border. Pass `label` to render a label above the field.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional label rendered above the input. */
  label?: string;
}

export function Input(props: InputProps): JSX.Element;
