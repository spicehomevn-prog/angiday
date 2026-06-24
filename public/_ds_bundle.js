/* @ds-bundle: {"format":3,"namespace":"NGYDesignSystem_adcec4","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"DishCard","sourcePath":"components/food/DishCard.jsx"},{"name":"MealHeader","sourcePath":"components/food/MealHeader.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ProgressDots","sourcePath":"components/navigation/ProgressDots.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d80a8f64fef7","components/core/Button.jsx":"c6b0846bcdb5","components/core/Card.jsx":"f0335206116c","components/core/Chip.jsx":"20c9fdd41811","components/food/DishCard.jsx":"ceae35cf5096","components/food/MealHeader.jsx":"d6ee96a87c2a","components/forms/Input.jsx":"da102cab9345","components/forms/Stepper.jsx":"087b479c3256","components/icons/Icon.jsx":"25e93e5aaa63","components/navigation/ProgressDots.jsx":"4e2481a8f318","components/navigation/TabBar.jsx":"9e79d79d272d","ui_kits/app/dishes.js":"32621586ef87","ui_kits/app/screens.jsx":"b1ae785f56a3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NGYDesignSystem_adcec4 = window.NGYDesignSystem_adcec4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small soft-tint pill used to label menus ("Đủ đạm", "Có rau
 * xanh"). Four tones map to the brand accents.
 */
function Badge({
  tone = 'gold',
  style,
  children,
  ...rest
}) {
  const tones = {
    gold: {
      background: 'var(--gold-soft)',
      color: 'var(--gold-ink)'
    },
    green: {
      background: 'var(--green-soft)',
      color: 'var(--green)'
    },
    plum: {
      background: 'var(--plum-soft)',
      color: 'var(--plum)'
    },
    red: {
      background: 'var(--red-soft)',
      color: 'var(--red-deep)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-xs)',
      padding: '5px 11px',
      borderRadius: 'var(--r-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's pill-shaped action. The primary variant carries a
 * chunky hard-offset shadow so it reads as a physically pressable button
 * that sinks on click.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  type = 'button',
  style,
  children,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    fontSize: size === 'lg' ? 'var(--fs-lg)' : 'var(--fs-md)',
    lineHeight: 1,
    borderRadius: 'var(--r-pill)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    padding: size === 'lg' ? '17px 24px' : '14px 22px',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease), background var(--dur-base) var(--ease)',
    width: block ? '100%' : undefined
  };
  const variants = {
    primary: {
      background: 'var(--red)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--btn-shadow)'
    },
    ghost: {
      background: 'var(--red-soft)',
      color: 'var(--red-deep)'
    },
    soft: {
      background: 'var(--green-soft)',
      color: 'var(--green)'
    },
    line: {
      background: 'var(--card)',
      border: '2px solid var(--line)',
      color: 'var(--ink)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    "data-variant": variant,
    className: "agd-btn",
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the white rounded surface everything sits on: hairline border,
 * big 26px radius, warm brown soft shadow. `tone="warm"` adds the subtle
 * cream gradient used on the "ask" / hero cards.
 */
function Card({
  tone = 'plain',
  padding,
  style,
  children,
  ...rest
}) {
  const tones = {
    plain: {
      background: 'var(--card)'
    },
    warm: {
      background: 'linear-gradient(160deg, #fff, #FFF4EA)'
    },
    sunken: {
      background: 'var(--surface-sunken)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--line)',
      borderRadius: 'var(--r)',
      boxShadow: 'var(--shadow)',
      padding: padding ?? 'var(--card-pad)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a selectable rounded option. Red tone for taste/diet choices,
 * green tone for the "pantry seasonings" picker. Toggles its `selected`
 * fill on click.
 */
function Chip({
  selected = false,
  tone = 'red',
  type = 'button',
  style,
  children,
  ...rest
}) {
  const selFill = tone === 'green' ? {
    background: 'var(--green)',
    borderColor: 'var(--green)',
    color: '#fff'
  } : {
    background: 'var(--red)',
    borderColor: 'var(--red)',
    color: '#fff'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "data-tone": tone,
    "aria-pressed": selected,
    className: "agd-chip agd-focusable",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: '2px solid var(--line)',
      background: 'var(--card)',
      color: 'var(--ink)',
      borderRadius: 'var(--r-pill)',
      padding: '11px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-md)',
      fontWeight: 'var(--fw-semibold)',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)',
      ...(selected ? selFill : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with the brand's rounded hairline border, off-white
 * fill and red focus outline. Optional label above.
 */
function Input({
  label,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-sm)',
      marginBottom: 6,
      color: 'var(--ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: "agd-input",
    style: {
      width: '100%',
      border: '2px solid var(--line)',
      borderRadius: 'var(--r-sm)',
      padding: '13px 14px',
      fontSize: 'var(--fs-lg)',
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-sunken)',
      color: 'var(--ink)',
      outline: 'none',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stepper — the big quantity control ("how many people eat?"). Two round
 * soft buttons flank a large Baloo number. Clamped between min and max.
 */
function Stepper({
  value,
  onChange,
  min = 1,
  max = 20,
  label,
  unit,
  style,
  ...rest
}) {
  const set = next => onChange?.(Math.max(min, Math.min(max, next)));
  const roundBtn = {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: 'var(--red-soft)',
    color: 'var(--red-deep)',
    fontSize: 28,
    fontWeight: 'var(--fw-extra)',
    fontFamily: 'var(--font-display)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background var(--dur-fast) var(--ease)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "agd-step-btn agd-focusable",
    "aria-label": "Gi\u1EA3m",
    style: roundBtn,
    onClick: () => set(value - 1)
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extra)',
      fontSize: 'var(--fs-stepper)',
      minWidth: 70,
      textAlign: 'center',
      color: 'var(--red-deep)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    className: "agd-step-btn agd-focusable",
    "aria-label": "T\u0103ng",
    style: roundBtn,
    onClick: () => set(value + 1)
  }, "+")), (unit || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-soft)',
      marginTop: 2,
      fontFamily: 'var(--font-body)'
    }
  }, unit || label));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  home: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 11.5 12 4l8 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20v-5h4v5"
  })),
  heart: () => /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4.04 3 5.5l7 7Z"
  }),
  settings: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.55 1.55M6.85 17.15 5.3 18.7M18.7 18.7l-1.55-1.55M6.85 6.85 5.3 5.3"
  })),
  // ---- Meal times ----
  sunrise: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6.3 7.3 1.5 1.5M16.2 8.8l1.5-1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 18h2.5M19 18h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 18a4 4 0 0 1 8 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 22h20"
  })),
  sun: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
  })),
  moon: () => /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
  }),
  // ---- Actions ----
  dice: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "4.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.25",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.5",
    cy: "8.5",
    r: "1.25",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.25",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "15.5",
    r: "1.25",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.5",
    cy: "15.5",
    r: "1.25",
    fill: "currentColor",
    stroke: "none"
  })),
  refresh: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 1 15-6.7L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v5h-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 1-15 6.7L3 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21v-5h5"
  })),
  trash: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 7V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11v6M14 11v6"
  })),
  plus: () => /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  minus: () => /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }),
  check: () => /*#__PURE__*/React.createElement("path", {
    d: "m5 12 4.5 4.5L19 7"
  }),
  close: () => /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  }),
  chevronRight: () => /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  }),
  chevronDown: () => /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  play: () => /*#__PURE__*/React.createElement("path", {
    d: "M7 4.5v15l12-7.5z"
  }),
  video: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "6",
    width: "13",
    height: "12",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15.5 10 6-3.2v10.4l-6-3.2z"
  })),
  // ---- Food & kitchen ----
  basket: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "20",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3h2.2l2.3 12a1 1 0 0 0 1 .82h8.6a1 1 0 0 0 .98-.78L19.5 7H6"
  })),
  chefHat: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 13.9A4 4 0 0 1 7.4 6 5.1 5.1 0 0 1 8.5 4.5a5 5 0 0 1 7.08 0A5.1 5.1 0 0 1 16.6 6 4 4 0 0 1 18 13.9V21H6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17h12"
  })),
  leaf: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6"
  })),
  sprout: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 20h10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20c0-5 0-7 0-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11C12 8 10 6 6.5 6 6.5 9.5 8.5 11 12 11Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11c0-2.6 1.7-4.5 5.5-4.5C17.5 9.4 15.5 11 12 11Z"
  })),
  drumstick: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"
  })),
  soup: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 4c0 1-1 1.5-1 2.5S8 8 8 9M12 3c0 1-1 1.5-1 2.5S12 7 12 8M16 4c0 1-1 1.5-1 2.5S16 8 16 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 11.5h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 19.5h9"
  })),
  bone: () => /*#__PURE__*/React.createElement("path", {
    d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5z"
  }),
  salad: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7.5 19.5h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 11.5h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11.5c-1-3 .5-5.5 3-6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11.5c.5-2.5 2.8-4 5.5-3.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11.5C10.5 9 8 8.3 5.5 9.4"
  })),
  bulb: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 18h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 21h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0-3.8 10.7c.6.5.8.8.8 1.8v.5h6v-.5c0-1 .2-1.3.8-1.8A6 6 0 0 0 12 3Z"
  })),
  // ---- Meta ----
  clock: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3.2 2"
  })),
  dollar: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 4.5v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 7.8c-.9-.95-2.2-1.3-3.6-1.3-2 0-3.6 1-3.6 2.8 0 1.8 1.5 2.4 3.6 2.7 2.1.3 3.6.9 3.6 2.7 0 1.8-1.6 2.8-3.6 2.8-1.4 0-2.7-.35-3.6-1.3"
  })),
  wallet: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "14",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.5",
    cy: "14.5",
    r: "1.3",
    fill: "currentColor",
    stroke: "none"
  })),
  users: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 20a6 6 0 0 1 11 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.8 5.3a3.2 3.2 0 0 1 0 6.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 14.3A6 6 0 0 1 20.8 20"
  })),
  sparkle: () => /*#__PURE__*/React.createElement("path", {
    d: "M12 3.2l1.9 5.4a3 3 0 0 0 1.5 1.5l5.4 1.9-5.4 1.9a3 3 0 0 0-1.5 1.5L12 20.8l-1.9-5.4a3 3 0 0 0-1.5-1.5L3.2 12l5.4-1.9a3 3 0 0 0 1.5-1.5z"
  })
};
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  filled = false,
  style,
  ...rest
}) {
  const make = I[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: filled ? 'currentColor' : 'none',
    stroke: filled ? 'none' : 'currentColor',
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), make ? make() : null);
}

/** Names available in the set — handy for the showcase card. */
Icon.names = Object.keys(I);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/food/DishCard.jsx
try { (() => {
/**
 * DishCard — the signature card. A photo-or-emoji cover carries the cooking
 * time / cost tags, a favourite heart and a swap button, with the dish name
 * overlaid. Click the cover to expand the recipe (ingredients + steps).
 */
function DishCard({
  name,
  emoji,
  image,
  time,
  cost = 1,
  vegetarian = false,
  favorite = false,
  open = false,
  onToggle,
  onFavorite,
  onSwap,
  ingredients = [],
  steps = [],
  videoUrl,
  tipNote,
  buyNote,
  servingNote,
  style
}) {
  const hasImg = Boolean(image);
  const mini = {
    width: 36,
    height: 36,
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    fontSize: 15,
    border: 'none',
    cursor: 'pointer',
    background: 'rgba(255,255,255,.94)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'transform var(--dur-fast) var(--ease)'
  };
  const ctag = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    background: 'rgba(255,255,255,.92)',
    color: 'var(--ink)',
    fontSize: '11.5px',
    fontWeight: 'var(--fw-semibold)',
    padding: '4px 9px',
    borderRadius: 'var(--r-pill)',
    boxShadow: 'var(--shadow-sm)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: onToggle,
    className: "agd-focusable",
    style: {
      position: 'relative',
      height: 148,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      background: hasImg ? `linear-gradient(180deg,transparent 35%,rgba(40,22,12,.62)), url("${image}") center/cover` : 'linear-gradient(150deg, var(--gold-soft), var(--red-soft))'
    }
  }, !hasImg && (__ds_scope.Icon.names.includes(emoji) ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: emoji,
    size: 52,
    strokeWidth: 1.6,
    style: {
      color: 'var(--red-deep)',
      filter: 'drop-shadow(0 6px 8px rgba(0,0,0,.10))'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 58,
      filter: 'drop-shadow(0 6px 8px rgba(0,0,0,.12))'
    }
  }, emoji)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'flex',
      gap: 6
    }
  }, time && /*#__PURE__*/React.createElement("span", {
    style: ctag
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13,
    strokeWidth: 2.1
  }), " ", time), /*#__PURE__*/React.createElement("span", {
    style: ctag,
    "aria-label": `mức giá ${cost}/3`
  }, Array.from({
    length: cost
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "dollar",
    size: 13,
    strokeWidth: 2.1
  }))), vegetarian && /*#__PURE__*/React.createElement("span", {
    style: ctag
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "leaf",
    size: 13,
    strokeWidth: 2.1,
    style: {
      color: 'var(--green)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      display: 'flex',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "agd-mini",
    title: "L\u01B0u m\xF3n",
    onClick: e => {
      e.stopPropagation();
      onFavorite?.();
    },
    style: {
      ...mini,
      ...(favorite ? {
        background: 'var(--red)',
        color: '#fff'
      } : {
        color: 'var(--red)'
      })
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 17,
    filled: favorite,
    strokeWidth: 2.1
  })), /*#__PURE__*/React.createElement("button", {
    className: "agd-mini",
    title: "\u0110\u1ED5i m\xF3n kh\xE1c",
    onClick: e => {
      e.stopPropagation();
      onSwap?.();
    },
    style: {
      ...mini,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "refresh",
    size: 16,
    strokeWidth: 2.1
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: hasImg ? 14 : 11,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 18,
      color: hasImg ? '#fff' : 'var(--ink)',
      textShadow: hasImg ? '0 1px 6px rgba(0,0,0,.4)' : 'none'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 1200 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur-expand) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 16px'
    }
  }, ingredients.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RecipeHeading, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "basket",
    size: 16
  }), " Nguy\xEAn li\u1EC7u", servingNote && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)',
      fontWeight: 'var(--fw-medium)'
    }
  }, " ", servingNote)), /*#__PURE__*/React.createElement("ul", {
    style: listStyle
  }, ingredients.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: liStyle
  }, x)))), steps.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RecipeHeading, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chefHat",
    size: 16
  }), " C\xE1ch n\u1EA5u"), /*#__PURE__*/React.createElement("ol", {
    style: listStyle
  }, steps.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: liStyle
  }, x)))), videoUrl && /*#__PURE__*/React.createElement("a", {
    href: videoUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "agd-focusable",
    onClick: e => e.stopPropagation(),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 12,
      padding: '12px 16px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--red-soft)',
      color: 'var(--red-deep)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-sm)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--red)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 12,
    filled: true
  })), "Xem video c\xE1ch n\u1EA5u"), tipNote && /*#__PURE__*/React.createElement(Note, {
    bg: "var(--green-soft)",
    color: "#2c6b41",
    icon: "bulb"
  }, tipNote), buyNote && /*#__PURE__*/React.createElement(Note, {
    bg: "var(--gold-soft)",
    color: "#8a5e0e",
    icon: "basket"
  }, "C\u1EA7n mua th\xEAm: ", buyNote))), !open && /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      textAlign: 'center',
      fontSize: 'var(--fs-xs)',
      color: 'var(--ink-soft)',
      padding: 9,
      cursor: 'pointer',
      borderTop: '1px dashed var(--line)'
    }
  }, "Xem c\xF4ng th\u1EE9c \u25BE"));
}
const listStyle = {
  margin: 0,
  paddingLeft: 20
};
const liStyle = {
  fontSize: 'var(--fs-sm)',
  lineHeight: 'var(--lh-relaxed)',
  marginBottom: 3
};
function RecipeHeading({
  children
}) {
  return /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-sm)',
      margin: '14px 0 6px',
      color: 'var(--green)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)'
    }
  }, children);
}
function Note({
  bg,
  color,
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      borderRadius: 12,
      padding: '9px 12px',
      fontSize: 'var(--fs-xs)',
      marginTop: 8,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 7
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    strokeWidth: 2,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { DishCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/food/DishCard.jsx", error: String((e && e.message) || e) }); }

// components/food/MealHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MealHeader — the section divider for a meal ("Bữa sáng", "Bữa trưa").
 * Icon (a brand line-icon name, or any emoji string), a red title, then a
 * hairline rule filling the remaining space.
 */
function MealHeader({
  icon,
  title,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      margin: '0 2px 11px',
      color: 'var(--red-deep)',
      ...style
    }
  }, rest), __ds_scope.Icon.names.includes(icon) ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--red-deep)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      background: 'var(--line)',
      borderRadius: 2
    }
  }));
}
Object.assign(__ds_scope, { MealHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/food/MealHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProgressDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressDots — the onboarding step indicator. Past steps are green, the
 * current step is an elongated red pill, future steps are red-soft dots.
 */
function ProgressDots({
  total,
  current,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 7,
      justifyContent: 'center',
      ...style
    }
  }, rest), Array.from({
    length: total
  }).map((_, i) => {
    const done = i < current;
    const on = i === current;
    return /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        display: 'block',
        height: 8,
        width: on ? 22 : 8,
        borderRadius: on ? 6 : '50%',
        background: done ? 'var(--green)' : on ? 'var(--red)' : 'var(--red-soft)',
        transition: 'all var(--dur-base) var(--ease)'
      }
    });
  }));
}
Object.assign(__ds_scope, { ProgressDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProgressDots.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const renderGlyph = (glyph, size) => __ds_scope.Icon.names.includes(glyph) ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
  name: glyph,
  size: size
}) : /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: size
  }
}, glyph);

/**
 * TabBar — the frosted floating bottom navigation. Each tab is an emoji icon
 * stacked over a short Vietnamese label; the active tab gets the red-soft pill.
 */
function TabBar({
  tabs,
  active,
  onChange,
  floating = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      ...(floating ? {
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 14,
        width: 'calc(100% - 32px)',
        maxWidth: 'var(--tabbar-max)',
        zIndex: 40
      } : {
        width: '100%'
      }),
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--line)',
      borderRadius: 22,
      boxShadow: 'var(--shadow)',
      display: 'flex',
      padding: 7,
      gap: 4,
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      className: "agd-tab agd-focusable",
      "aria-current": on ? 'page' : undefined,
      onClick: () => onChange?.(t.key),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: '8px 4px',
        borderRadius: 16,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-2xs)',
        fontWeight: 'var(--fw-semibold)',
        background: on ? 'var(--red-soft)' : 'transparent',
        color: on ? 'var(--red-deep)' : 'var(--ink-soft)',
        transition: 'background var(--dur-fast) var(--ease)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        height: 22
      }
    }, renderGlyph(t.icon, 22)), t.label);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/dishes.js
try { (() => {
// Subset of the real Ăn Gì Đây? dish catalogue, enough to drive the UI kit.
// img — real dish photo (cover). yt — YouTube cooking-recipe link.
// Photos are real Wikimedia Commons files served via the stable Special:FilePath
// redirect. Dishes without a confirmed Commons photo set img:null and fall back
// to the emoji-on-gradient cover. yt — YouTube cooking-recipe search link.
const ytSearch = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q + ' cách nấu');
const wiki = file => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=640`;
window.AGD_DISHES = [
// sáng (breakfast)
{
  id: 'pho_bo',
  t: 'Phở bò',
  e: '🍜',
  c: 'sang',
  cost: 2,
  veg: false,
  time: '30 phút',
  img: wiki('Two bowls of phở bò with various toppings.jpg'),
  yt: ytSearch('phở bò'),
  nl: ['Bánh phở', 'Thịt bò thái mỏng', 'Xương bò', 'Hành lá, ngò', 'Gừng, hành tây nướng'],
  cn: ['Nướng thơm gừng và hành tây rồi ninh với xương ~1 tiếng.', 'Nêm muối vừa miệng, lọc lấy nước trong.', 'Trụng bánh phở, xếp thịt bò lên.', 'Chan nước dùng nóng, rắc hành ngò.'],
  dd: 'Giàu đạm, nước dùng ấm bụng cho buổi sáng.'
}, {
  id: 'banh_mi_opla',
  t: 'Bánh mì ốp la',
  e: '🥖',
  c: 'sang',
  cost: 1,
  veg: false,
  time: '10 phút',
  img: wiki('Bánh mì và ly sữa bữa sáng (2).jpg'),
  yt: ytSearch('bánh mì ốp la'),
  nl: ['Bánh mì', 'Trứng gà', 'Dưa leo', 'Xì dầu', 'Rau thơm'],
  cn: ['Ốp la trứng lòng đào với chút dầu.', 'Rưới ít xì dầu và tiêu lên trứng.', 'Kẹp bánh mì cùng dưa leo, rau thơm.'],
  dd: 'Nhanh gọn, đủ tinh bột và đạm.'
},
// mặn (mains)
{
  id: 'thit_kho_trung',
  t: 'Thịt kho hột vịt',
  e: '🍳',
  c: 'man',
  cost: 2,
  veg: false,
  time: '45 phút',
  img: wiki('Caramelized Pork and Eggs.jpg'),
  yt: ytSearch('thịt kho hột vịt'),
  nl: ['Thịt ba chỉ', 'Trứng vịt luộc', 'Nước dừa', 'Nước mắm', 'Hành tím'],
  cn: ['Ướp thịt với nước mắm, đường, hành tím 20 phút.', 'Thắng nước màu rồi cho thịt vào săn.', 'Đổ nước dừa, cho trứng vào kho lửa nhỏ.', 'Kho tới khi thịt mềm, nước sánh lại.'],
  dd: 'Đậm đà, giàu đạm — món "tủ" của bữa cơm Việt.'
}, {
  id: 'ca_kho_to',
  t: 'Cá kho tộ',
  e: '🐟',
  c: 'man',
  cost: 2,
  veg: false,
  time: '40 phút',
  img: wiki('Cá kho tộ.JPG'),
  yt: ytSearch('cá kho tộ'),
  nl: ['Cá (lóc/basa)', 'Nước mắm', 'Đường, nước màu', 'Ớt, tiêu', 'Hành tím'],
  cn: ['Ướp cá với nước mắm, nước màu, tiêu 20 phút.', 'Đặt cá vào nồi đất, kho lửa nhỏ.', 'Thêm chút nước, kho tới khi thấm và sánh.', 'Rắc tiêu, ớt trước khi tắt bếp.'],
  dd: 'Cá giàu đạm và canxi, rất đưa cơm.'
}, {
  id: 'dauhu_sot_ca',
  t: 'Đậu hũ sốt cà chua',
  e: '🍲',
  c: 'man',
  cost: 1,
  veg: true,
  time: '20 phút',
  img: null,
  yt: ytSearch('đậu hũ sốt cà chua'),
  nl: ['Đậu hũ', 'Cà chua', 'Hành lá', 'Hạt nêm chay', 'Đường'],
  cn: ['Chiên sơ đậu hũ cho vàng.', 'Xào cà chua nhuyễn thành sốt, nêm vừa.', 'Cho đậu vào rim cho thấm, rắc hành lá.'],
  dd: 'Đậu hũ giàu canxi thực vật, dễ nấu.'
},
// rau (greens)
{
  id: 'rau_muong_xao_toi',
  t: 'Rau muống xào tỏi',
  e: '🥬',
  c: 'rau',
  cost: 1,
  veg: true,
  time: '10 phút',
  img: wiki('Rau muống xào tỏi.jpg'),
  yt: ytSearch('rau muống xào tỏi'),
  nl: ['Rau muống', 'Tỏi', 'Dầu ăn', 'Hạt nêm'],
  cn: ['Phi thơm tỏi với dầu.', 'Cho rau vào xào lửa lớn cho xanh.', 'Nêm hạt nêm vừa ăn.'],
  dd: 'Nhiều chất xơ, giòn xanh đưa cơm.'
}, {
  id: 'cai_thia_xao',
  t: 'Cải thìa xào tỏi',
  e: '🥬',
  c: 'rau',
  cost: 1,
  veg: true,
  time: '10 phút',
  img: null,
  yt: ytSearch('cải thìa xào tỏi'),
  nl: ['Cải thìa', 'Tỏi', 'Dầu hào', 'Dầu ăn'],
  cn: ['Chần sơ cải cho xanh.', 'Phi tỏi rồi cho cải vào xào nhanh.', 'Nêm chút dầu hào.'],
  dd: 'Rau xanh đậm giàu canxi, tốt cho xương.'
},
// canh (soups)
{
  id: 'canh_chua_ca',
  t: 'Canh chua cá',
  e: '🍲',
  c: 'canh',
  cost: 2,
  veg: false,
  time: '30 phút',
  img: null,
  yt: ytSearch('canh chua cá'),
  nl: ['Cá', 'Me / dứa', 'Cà chua, đậu bắp', 'Giá, bạc hà', 'Nước mắm'],
  cn: ['Nấu nước me chua, nêm vừa.', 'Cho cá vào nấu chín.', 'Thêm rau, đậu bắp, cà chua.', 'Rắc rau thơm, ớt.'],
  dd: 'Chua mát, giàu đạm và rau.'
}, {
  id: 'canh_rau_ngot',
  t: 'Canh rau ngót thịt bằm',
  e: '🥬',
  c: 'canh',
  cost: 1,
  veg: false,
  time: '15 phút',
  img: wiki('Rau ngót.jpg'),
  yt: ytSearch('canh rau ngót thịt bằm'),
  nl: ['Rau ngót', 'Thịt bằm', 'Hạt nêm', 'Hành tím'],
  cn: ['Xào sơ thịt bằm với hành.', 'Thêm nước, đun sôi.', 'Cho rau ngót vào, nêm vừa, tắt bếp ngay.'],
  dd: 'Rau ngót giàu canxi và vitamin, mát gan.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/dishes.js", error: String((e && e.message) || e) }); }

// ui_kits/app/screens.jsx
try { (() => {
// Ăn Gì Đây? — UI kit screens. Composes the design-system components into
// the real app flow: welcome → onboarding → home (roll a menu) → favorites.
const {
  Button,
  Chip,
  Card,
  Badge,
  Input,
  Stepper,
  ProgressDots,
  TabBar,
  MealHeader,
  DishCard,
  Icon
} = window.NGYDesignSystem_adcec4;
const CUISINES = [{
  k: 'viet',
  n: 'Món Việt',
  e: '🍚'
}, {
  k: 'a',
  n: 'Món Á',
  e: '🍱'
}, {
  k: 'tay',
  n: 'Món Tây',
  e: '🍝'
}];
const SEASONINGS = ['Nước mắm', 'Muối', 'Tiêu', 'Đường', 'Tỏi', 'Hành', 'Dầu ăn', 'Hạt nêm', 'Ớt', 'Gừng', 'Sả', 'Giấm'];
const fmtVND = n => n.toLocaleString('vi-VN');
const pick = (cat, used) => {
  const pool = window.AGD_DISHES.filter(d => d.c === cat && !used.includes(d.id));
  const arr = pool.length ? pool : window.AGD_DISHES.filter(d => d.c === cat);
  return arr[Math.floor(Math.random() * arr.length)].id;
};
const byId = id => window.AGD_DISHES.find(d => d.id === id);

// ----- Welcome -----
function WelcomeScreen({
  onStart
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: "warm",
    style: {
      textAlign: 'center',
      padding: '8px 22px 26px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      letterSpacing: 6,
      opacity: .9,
      marginBottom: 6
    }
  }, "\uD83E\uDD6C \uD83C\uDF5A \uD83D\uDC1F \uD83C\uDF45 \uD83C\uDF57"), /*#__PURE__*/React.createElement("span", {
    className: "agd-bob",
    style: {
      fontSize: 78,
      display: 'inline-block',
      filter: 'drop-shadow(0 10px 12px rgba(0,0,0,.10))'
    }
  }, "\uD83E\uDD62"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 33,
      margin: '12px 0 8px',
      color: 'var(--red-deep)',
      lineHeight: 1.1
    }
  }, "H\xF4m nay nh\xE0 m\xECnh", /*#__PURE__*/React.createElement("br", null), "\u0103n g\xEC \u0111\xE2y?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 15.5,
      margin: '0 auto 22px',
      maxWidth: 330
    }
  }, "\u0110\u1EC3 m\xECnh lo chuy\u1EC7n ngh\u0129 m\xF3n. Cho m\xECnh bi\u1EBFt v\xE0i \u0111i\u1EC1u v\u1EC1 gia \u0111\xECnh, r\u1ED3i m\u1ED7i ng\xE0y ch\u1EC9 c\u1EA7n m\u1ED9t c\xFA ch\u1EA1m l\xE0 c\xF3 th\u1EF1c \u0111\u01A1n c\xE2n b\u1EB1ng k\xE8m c\xF4ng th\u1EE9c."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onStart
  }, "B\u1EAFt \u0111\u1EA7u n\xE0o \uD83C\uDF37"));
}

// ----- Onboarding (3 representative steps) -----
function OnboardingScreen({
  onDone
}) {
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState('');
  const [people, setPeople] = React.useState(4);
  const [budget, setBudget] = React.useState(200000);
  const [cuisine, setCuisine] = React.useState(['viet']);
  const [pantry, setPantry] = React.useState(['Nước mắm', 'Muối', 'Tiêu', 'Đường', 'Tỏi', 'Hành']);
  const total = 4;
  const toggle = (arr, set, v) => set(arr.includes(v) ? arr.length > 1 ? arr.filter(x => x !== v) : arr : [...arr, v]);
  const next = () => step < total - 1 ? setStep(step + 1) : onDone({
    name,
    people,
    budget
  });
  const back = () => setStep(Math.max(0, step - 1));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressDots, {
    total: total,
    current: step
  })), /*#__PURE__*/React.createElement(Card, {
    className: "agd-pop",
    key: step
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      textAlign: 'center',
      display: 'block',
      marginBottom: 8
    }
  }, "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"), /*#__PURE__*/React.createElement("h2", {
    style: qTitle
  }, "G\u1ECDi gia \u0111\xECnh m\xECnh l\xE0 g\xEC nh\u1EC9?"), /*#__PURE__*/React.createElement("p", {
    style: qSub
  }, "\u0110\u1EC3 m\xECnh ch\xE0o cho th\xE2n m\u1EADt (c\xF3 th\u1EC3 b\u1ECF qua)"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 330,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "VD: nh\xE0 B\u1ED1ng, gia \u0111\xECnh Minh...",
    maxLength: 24
  }))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      textAlign: 'center',
      display: 'block',
      marginBottom: 8
    }
  }, "\uD83C\uDF7D\uFE0F"), /*#__PURE__*/React.createElement("h2", {
    style: qTitle
  }, "Nh\xE0 m\xECnh c\xF3 m\u1EA5y ng\u01B0\u1EDDi \u0103n?"), /*#__PURE__*/React.createElement("p", {
    style: qSub
  }, "M\xECnh s\u1EBD canh kh\u1EA9u ph\u1EA7n cho v\u1EEBa"), /*#__PURE__*/React.createElement(Stepper, {
    value: people,
    onChange: setPeople,
    unit: "ng\u01B0\u1EDDi"
  })), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      textAlign: 'center',
      display: 'block',
      marginBottom: 8
    }
  }, "\uD83D\uDE0B"), /*#__PURE__*/React.createElement("h2", {
    style: qTitle
  }, "Nh\xE0 m\xECnh th\xEDch m\xF3n g\xEC?"), /*#__PURE__*/React.createElement("p", {
    style: qSub
  }, "Ch\u1ECDn m\u1ED9t ho\u1EB7c nhi\u1EC1u lo\u1EA1i"), /*#__PURE__*/React.createElement("div", {
    style: chipWrap
  }, CUISINES.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c.k,
    selected: cuisine.includes(c.k),
    onClick: () => toggle(cuisine, setCuisine, c.k)
  }, c.e, " ", c.n)))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      textAlign: 'center',
      display: 'block',
      marginBottom: 8
    }
  }, "\uD83E\uDDC2"), /*#__PURE__*/React.createElement("h2", {
    style: qTitle
  }, "T\u1EE7 gia v\u1ECB nh\xE0 m\xECnh c\xF3 g\xEC?"), /*#__PURE__*/React.createElement("p", {
    style: qSub
  }, "M\xECnh s\u1EBD nh\u1EAFc mua th\xEAm th\u1EE9 c\xF2n thi\u1EBFu"), /*#__PURE__*/React.createElement("div", {
    style: chipWrap
  }, SEASONINGS.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    tone: "green",
    selected: pantry.includes(s),
    onClick: () => toggle(pantry, setPantry, s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    }
  }, step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    style: {
      flex: 1
    },
    onClick: back
  }, "Quay l\u1EA1i"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1
    },
    onClick: next
  }, step === total - 1 ? 'Xong, vào bếp thôi! 🍳' : 'Tiếp tục →'))));
}

// ----- Home -----
function HomeScreen({
  profile,
  menu,
  onRoll,
  rolling,
  favorites,
  onFav,
  onSave
}) {
  const [open, setOpen] = React.useState({});
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: eyebrow
  }, "Th\u1EE9 Ba \xB7 H\xF4m nay"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 25,
      color: 'var(--red-deep)',
      margin: '2px 0 0'
    }
  }, "Ch\xE0o nh\xE0 ", profile.name || 'mình', "! \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 13,
      marginTop: 3
    }
  }, profile.people, " ng\u01B0\u1EDDi \xB7 ", fmtVND(profile.budget), "\u0111/ng\xE0y")), /*#__PURE__*/React.createElement(Card, {
    tone: "warm",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: rolling ? 'agd-shake' : '',
    style: {
      display: 'inline-flex',
      color: 'var(--red)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dice",
    size: 42,
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontFamily: 'var(--font-display)',
      fontSize: 25,
      margin: '6px 0 2px'
    }
  }, "B\u1EEFa nay \u0103n g\xEC ta?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 14,
      margin: '2px 0 18px'
    }
  }, "B\u1EA5m \u0111\u1EC3 l\u1EAFc ra th\u1EF1c \u0111\u01A1n v\u1EEBa \xFD cho c\u1EA3 nh\xE0"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onRoll
  }, menu ? 'Lắc lại thực đơn' : 'Lắc thực đơn')), menu && /*#__PURE__*/React.createElement(Card, {
    className: "agd-pop",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "drumstick",
    size: 14
  }), " \u0110\u1EE7 \u0111\u1EA1m"), /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 14
  }), " C\xF3 rau xanh"), /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "soup",
    size: 14
  }), " C\xF3 canh")), [['sunrise', 'Bữa sáng', [menu.sang]], ['sun', 'Bữa trưa', menu.trua], ['moon', 'Bữa tối', menu.toi]].map(([ic, label, ids]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(MealHeader, {
    icon: ic,
    title: label
  }), ids.map(id => {
    const d = byId(id);
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        marginBottom: 13
      }
    }, /*#__PURE__*/React.createElement(DishCard, {
      name: d.t,
      emoji: d.e,
      image: d.img,
      time: d.time,
      cost: d.cost,
      vegetarian: d.veg,
      favorite: favorites.includes(id),
      open: !!open[id],
      onToggle: () => setOpen(o => ({
        ...o,
        [id]: !o[id]
      })),
      onFavorite: () => onFav(id),
      onSwap: () => onRoll(),
      servingNote: `(cho ${profile.people} người)`,
      ingredients: d.nl,
      steps: d.cn,
      videoUrl: d.yt,
      tipNote: d.dd
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    style: {
      flex: 1,
      gap: 7
    },
    onClick: onRoll
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    size: 17
  }), " L\u1EAFc l\u1EA1i"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1,
      gap: 7
    },
    onClick: onSave
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 17
  }), " L\u01B0u"))));
}

// ----- Favorites -----
function FavoritesScreen({
  favorites,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow,
    className: "eyebrow"
  }, "B\u1ED9 s\u01B0u t\u1EADp"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 25,
      color: 'var(--red-deep)',
      margin: '2px 0 0'
    }
  }, "\u0110\xE3 l\u01B0u \u2764\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 13,
      marginTop: 3
    }
  }, "Nh\u1EEFng m\xF3n c\u1EA3 nh\xE0 th\xEDch")), favorites.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    style: {
      textAlign: 'center',
      color: 'var(--ink-soft)',
      padding: '34px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 50
    }
  }, "\uD83C\uDF7D\uFE0F"), /*#__PURE__*/React.createElement("p", null, "Ch\u01B0a c\xF3 g\xEC \u0111\u01B0\u1EE3c l\u01B0u.", /*#__PURE__*/React.createElement("br", null), "L\u1EAFc th\u1EF1c \u0111\u01A1n r\u1ED3i b\u1EA5m \u2764\uFE0F \u0111\u1EC3 c\u1EA5t l\u1EA1i nha!")) : /*#__PURE__*/React.createElement(Card, null, favorites.map(id => {
    const d = byId(id);
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: favItem
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15
      }
    }, d.e, " ", d.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-soft)',
        marginTop: 2
      }
    }, "M\xF3n \u0103n y\xEAu th\xEDch")), /*#__PURE__*/React.createElement("button", {
      className: "agd-mini",
      title: "Xo\xE1",
      onClick: () => onRemove(id),
      style: miniBtn
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 16
    })));
  })));
}
const qTitle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 22,
  textAlign: 'center',
  margin: '0 0 4px',
  color: 'var(--ink)'
};
const qSub = {
  textAlign: 'center',
  color: 'var(--ink-soft)',
  fontSize: 14,
  margin: '0 0 20px'
};
const chipWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  justifyContent: 'center'
};
const eyebrow = {
  fontWeight: 700,
  fontSize: 11.5,
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
  color: 'var(--red)'
};
const favItem = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,
  background: 'var(--surface-sunken)',
  border: '1px solid var(--line)',
  borderRadius: 'var(--r-md)',
  padding: '13px 14px',
  marginBottom: 10
};
const miniBtn = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  fontSize: 15,
  border: 'none',
  cursor: 'pointer',
  background: 'var(--paper-2)',
  boxShadow: 'var(--shadow-sm)'
};
Object.assign(window, {
  WelcomeScreen,
  OnboardingScreen,
  HomeScreen,
  FavoritesScreen,
  byId,
  pick
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.DishCard = __ds_scope.DishCard;

__ds_ns.MealHeader = __ds_scope.MealHeader;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ProgressDots = __ds_scope.ProgressDots;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
