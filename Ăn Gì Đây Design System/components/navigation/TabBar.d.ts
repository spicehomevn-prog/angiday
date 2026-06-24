import React from 'react';

export interface TabItem {
  /** Stable key matched against `active`. */
  key: string;
  /** Emoji icon (the brand's iconography). */
  icon: string;
  /** Short Vietnamese label, e.g. "Hôm nay". */
  label: string;
}

/**
 * Frosted floating bottom navigation. Emoji icon over a short label; the
 * active tab gets a red-soft pill. Set `floating={false}` to embed it inline.
 *
 * @startingPoint section="Navigation" subtitle="Frosted floating bottom tab bar" viewport="700x120"
 */
export interface TabBarProps {
  tabs: TabItem[];
  /** Key of the active tab. */
  active: string;
  onChange?: (key: string) => void;
  /** Fixed to the bottom of the viewport. @default true */
  floating?: boolean;
  style?: React.CSSProperties;
}

export function TabBar(props: TabBarProps): JSX.Element;
