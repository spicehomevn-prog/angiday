import React from 'react';

/**
 * Icon — the brand's clean line-icon set. Consistent 24px grid, rounded caps
 * and joins (echoing Baloo 2's soft corners), drawn in `currentColor` so each
 * icon inherits the colour of whatever it sits in. This is the elegant,
 * professional replacement for the app's original emoji glyphs.
 *
 * Every icon is outline by default; pass `filled` for the solid variant
 * (used for an active favourite heart, etc).
 */
const I = {
  // ---- Navigation ----
  home: () => (<>
    <path d="M4 11.5 12 4l8 7.5" />
    <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
    <path d="M10 20v-5h4v5" />
  </>),
  heart: () => (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4.04 3 5.5l7 7Z" />
  ),
  settings: () => (<>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.55 1.55M6.85 17.15 5.3 18.7M18.7 18.7l-1.55-1.55M6.85 6.85 5.3 5.3" />
  </>),

  // ---- Meal times ----
  sunrise: () => (<>
    <path d="M12 3v3" />
    <path d="m6.3 7.3 1.5 1.5M16.2 8.8l1.5-1.5" />
    <path d="M2.5 18h2.5M19 18h2.5" />
    <path d="M8 18a4 4 0 0 1 8 0" />
    <path d="M2 22h20" />
  </>),
  sun: () => (<>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
  </>),
  moon: () => (
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  ),

  // ---- Actions ----
  dice: () => (<>
    <rect x="3" y="3" width="18" height="18" rx="4.5" />
    <circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="8.5" r="1.25" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="15.5" r="1.25" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="15.5" r="1.25" fill="currentColor" stroke="none" />
  </>),
  refresh: () => (<>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </>),
  trash: () => (<>
    <path d="M4 7h16" />
    <path d="M10 7V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
    <path d="M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
    <path d="M10 11v6M14 11v6" />
  </>),
  plus: () => (<path d="M12 5v14M5 12h14" />),
  minus: () => (<path d="M5 12h14" />),
  check: () => (<path d="m5 12 4.5 4.5L19 7" />),
  close: () => (<path d="M6 6l12 12M18 6 6 18" />),
  chevronRight: () => (<path d="m9 6 6 6-6 6" />),
  chevronDown: () => (<path d="m6 9 6 6 6-6" />),
  play: () => (<path d="M7 4.5v15l12-7.5z" />),
  video: () => (<>
    <rect x="2.5" y="6" width="13" height="12" rx="3" />
    <path d="m15.5 10 6-3.2v10.4l-6-3.2z" />
  </>),

  // ---- Food & kitchen ----
  basket: () => (<>
    <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
    <path d="M2 3h2.2l2.3 12a1 1 0 0 0 1 .82h8.6a1 1 0 0 0 .98-.78L19.5 7H6" />
  </>),
  chefHat: () => (<>
    <path d="M6 13.9A4 4 0 0 1 7.4 6 5.1 5.1 0 0 1 8.5 4.5a5 5 0 0 1 7.08 0A5.1 5.1 0 0 1 16.6 6 4 4 0 0 1 18 13.9V21H6Z" />
    <path d="M6 17h12" />
  </>),
  leaf: () => (<>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </>),
  sprout: () => (<>
    <path d="M7 20h10" />
    <path d="M12 20c0-5 0-7 0-9" />
    <path d="M12 11C12 8 10 6 6.5 6 6.5 9.5 8.5 11 12 11Z" />
    <path d="M12 11c0-2.6 1.7-4.5 5.5-4.5C17.5 9.4 15.5 11 12 11Z" />
  </>),
  drumstick: () => (<>
    <path d="M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z" />
    <path d="m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16" />
  </>),
  soup: () => (<>
    <path d="M8 4c0 1-1 1.5-1 2.5S8 8 8 9M12 3c0 1-1 1.5-1 2.5S12 7 12 8M16 4c0 1-1 1.5-1 2.5S16 8 16 9" />
    <path d="M4 11.5h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z" />
    <path d="M7.5 19.5h9" />
  </>),
  bone: () => (
    <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5z" />
  ),
  salad: () => (<>
    <path d="M7.5 19.5h9" />
    <path d="M4 11.5h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z" />
    <path d="M12 11.5c-1-3 .5-5.5 3-6.5" />
    <path d="M12 11.5c.5-2.5 2.8-4 5.5-3.7" />
    <path d="M12 11.5C10.5 9 8 8.3 5.5 9.4" />
  </>),
  bulb: () => (<>
    <path d="M9.5 18h5" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.8 10.7c.6.5.8.8.8 1.8v.5h6v-.5c0-1 .2-1.3.8-1.8A6 6 0 0 0 12 3Z" />
  </>),

  // ---- Meta ----
  clock: () => (<>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </>),
  dollar: () => (<>
    <path d="M12 4.5v15" />
    <path d="M15.6 7.8c-.9-.95-2.2-1.3-3.6-1.3-2 0-3.6 1-3.6 2.8 0 1.8 1.5 2.4 3.6 2.7 2.1.3 3.6.9 3.6 2.7 0 1.8-1.6 2.8-3.6 2.8-1.4 0-2.7-.35-3.6-1.3" />
  </>),
  wallet: () => (<>
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <path d="M3 10h18" />
    <circle cx="16.5" cy="14.5" r="1.3" fill="currentColor" stroke="none" />
  </>),
  users: () => (<>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a6 6 0 0 1 11 0" />
    <path d="M15.8 5.3a3.2 3.2 0 0 1 0 6.1" />
    <path d="M17 14.3A6 6 0 0 1 20.8 20" />
  </>),
  sparkle: () => (
    <path d="M12 3.2l1.9 5.4a3 3 0 0 0 1.5 1.5l5.4 1.9-5.4 1.9a3 3 0 0 0-1.5 1.5L12 20.8l-1.9-5.4a3 3 0 0 0-1.5-1.5L3.2 12l5.4-1.9a3 3 0 0 0 1.5-1.5z" />
  ),
};

export function Icon({ name, size = 24, strokeWidth = 2, filled = false, style, ...rest }) {
  const make = I[name];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: 'block', flex: 'none', ...style }}
      {...rest}
    >
      {make ? make() : null}
    </svg>
  );
}

/** Names available in the set — handy for the showcase card. */
Icon.names = Object.keys(I);
