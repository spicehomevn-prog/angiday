import React from 'react';

export type CardTone = 'plain' | 'warm' | 'sunken';

/**
 * The white rounded surface that holds almost all content. `warm` is the
 * cream-gradient treatment for hero / call-to-action cards.
 *
 * @startingPoint section="Core" subtitle="Rounded warm-shadow surface" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "plain" */
  tone?: CardTone;
  /** Override the default 22px padding. */
  padding?: number | string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
