import React from 'react';

/**
 * The signature dish card. A photo-or-emoji cover holds the time/cost/veg
 * tags, a favourite heart and a swap button, with the dish name overlaid.
 * Clicking the cover (or the "Xem công thức" hint) expands the recipe.
 *
 * @startingPoint section="Food" subtitle="Signature dish card with expandable recipe" viewport="700x420"
 */
export interface DishCardProps {
  name: string;
  /** Fallback emoji shown when no image is provided. */
  emoji: string;
  /** Cover photo URL. Omit to use the emoji-on-gradient cover. */
  image?: string;
  /** Cooking time label, e.g. "30 phút". */
  time?: string;
  /** Price tier 1–3, rendered as 💵 repeated. @default 1 */
  cost?: number;
  /** Show the 🌱 vegetarian tag. @default false */
  vegetarian?: boolean;
  /** Filled heart state. @default false */
  favorite?: boolean;
  /** Recipe expanded. @default false */
  open?: boolean;
  onToggle?: () => void;
  onFavorite?: () => void;
  onSwap?: () => void;
  ingredients?: string[];
  steps?: string[];
  /** YouTube (or any) cooking-video URL. Renders a "Xem video cách nấu" button under the steps. */
  videoUrl?: string;
  /** Green tip note (nutrition blurb). */
  tipNote?: string;
  /** Gold "need to buy" note (missing seasonings). */
  buyNote?: string;
  /** Serving caption next to the ingredients heading, e.g. "(cho 4 người)". */
  servingNote?: string;
  style?: React.CSSProperties;
}

export function DishCard(props: DishCardProps): JSX.Element;
