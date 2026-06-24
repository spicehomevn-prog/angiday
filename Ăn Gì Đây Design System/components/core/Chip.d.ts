import React from 'react';

export type ChipTone = 'red' | 'green';

/**
 * Selectable rounded option chip. `red` tone for taste / diet pickers,
 * `green` tone for the pantry-seasonings picker. Drive `selected` from state.
 *
 * @startingPoint section="Core" subtitle="Selectable option chips" viewport="700x140"
 */
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Filled selected state. @default false */
  selected?: boolean;
  /** @default "red" */
  tone?: ChipTone;
  children?: React.ReactNode;
}

export function Chip(props: ChipProps): JSX.Element;
