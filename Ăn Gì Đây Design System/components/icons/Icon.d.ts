import React from 'react';

export type IconName =
  // navigation
  | 'home' | 'heart' | 'settings'
  // meal times
  | 'sunrise' | 'sun' | 'moon'
  // actions
  | 'dice' | 'refresh' | 'trash' | 'plus' | 'minus' | 'check' | 'close'
  | 'chevronRight' | 'chevronDown' | 'play' | 'video'
  // food & kitchen
  | 'basket' | 'chefHat' | 'leaf' | 'sprout' | 'drumstick' | 'soup'
  | 'bone' | 'salad' | 'bulb'
  // meta
  | 'clock' | 'dollar' | 'wallet' | 'users' | 'sparkle';

/**
 * The brand's clean line-icon set — a 24px rounded-stroke system drawn in
 * `currentColor`, the elegant replacement for the app's emoji glyphs. Use it
 * anywhere a UI affordance needs an icon; set the colour via the parent's
 * `color`.
 *
 * @startingPoint section="Core" subtitle="Rounded line-icon set in currentColor" viewport="700x320"
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  /** Which glyph to render. */
  name: IconName;
  /** Pixel size (width = height). @default 24 */
  size?: number;
  /** Stroke weight. @default 2 */
  strokeWidth?: number;
  /** Solid fill instead of outline (e.g. an active heart). @default false */
  filled?: boolean;
}

export function Icon(props: IconProps): JSX.Element;
export namespace Icon { const names: IconName[]; }
