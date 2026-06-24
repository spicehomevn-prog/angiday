import React from 'react';

export type BadgeTone = 'gold' | 'green' | 'plum' | 'red';

/**
 * Small soft-tint label pill. Used to summarise a menu's nutrition balance
 * ("🍗 Đủ đạm", "🥬 Có rau xanh") and to tag dishes.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "gold" */
  tone?: BadgeTone;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
