import React from 'react';

/**
 * Meal-section divider: emoji + red title + trailing hairline rule. Sits
 * above the dishes of a meal (sáng / trưa / tối).
 */
export interface MealHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Emoji icon, e.g. "🌅". */
  icon: string;
  /** e.g. "Bữa sáng". */
  title: string;
}

export function MealHeader(props: MealHeaderProps): JSX.Element;
