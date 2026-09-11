/* @ds-bundle: {"format":4,"namespace":"TechDayCaliDesignSystem_23dc8c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"FormMessage","sourcePath":"components/forms/FormMessage.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CommunityStrip","sourcePath":"components/site/CommunityStrip.jsx"},{"name":"CountdownTimer","sourcePath":"components/site/CountdownTimer.jsx"},{"name":"Footer","sourcePath":"components/site/Footer.jsx"},{"name":"Header","sourcePath":"components/site/Header.jsx"},{"name":"ScheduleRow","sourcePath":"components/site/ScheduleRow.jsx"},{"name":"SpeakerCard","sourcePath":"components/site/SpeakerCard.jsx"},{"name":"SponsorTier","sourcePath":"components/site/SponsorTier.jsx"},{"name":"TalkCard","sourcePath":"components/site/TalkCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"367343b0952a","components/core/Button.jsx":"6c0b374fde61","components/core/Card.jsx":"2005a09859d8","components/core/SectionHeading.jsx":"158c2d88a174","components/core/Stat.jsx":"af98e22b4763","components/core/Wordmark.jsx":"9744772d9ddb","components/forms/Checkbox.jsx":"108116a153db","components/forms/FormField.jsx":"92f50e959614","components/forms/FormMessage.jsx":"7fbe9bdddb9b","components/forms/Input.jsx":"b4781712d374","components/forms/RadioGroup.jsx":"17d8be8cccbe","components/forms/Select.jsx":"1ade2647ecfc","components/forms/Textarea.jsx":"7839cbc8d1af","components/site/CommunityStrip.jsx":"f25d7a0e3f73","components/site/CountdownTimer.jsx":"d6487f28d20b","components/site/Footer.jsx":"8a50fa49a7ac","components/site/Header.jsx":"7c54eb0a82e0","components/site/ScheduleRow.jsx":"690ae04a7131","components/site/SpeakerCard.jsx":"f8cc763dd421","components/site/SponsorTier.jsx":"99d1e881eb53","components/site/TalkCard.jsx":"608a2317c1f4","ui_kits/website/Cali.jsx":"e20cbfb7bd51","ui_kits/website/Charlas.jsx":"07efe79477d1","ui_kits/website/Home.jsx":"0ab1a13e0b7f","ui_kits/website/Inscripcion.jsx":"6dde6af95ee5","ui_kits/website/data.js":"6631823c17f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TechDayCaliDesignSystem_23dc8c = window.TechDayCaliDesignSystem_23dc8c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  turquoise: {
    bg: "var(--turquoise-100)",
    fg: "var(--turquoise-700)",
    br: "var(--turquoise-200)"
  },
  yellow: {
    bg: "var(--yellow-100)",
    fg: "var(--yellow-600)",
    br: "var(--yellow-200)"
  },
  green: {
    bg: "var(--green-100)",
    fg: "var(--green-700)",
    br: "var(--green-200)"
  },
  navy: {
    bg: "var(--navy-100)",
    fg: "var(--navy-800)",
    br: "var(--navy-200)"
  },
  lilac: {
    bg: "var(--lilac-100)",
    fg: "#6B4FB0",
    br: "var(--lilac-300)"
  },
  neutral: {
    bg: "var(--grey-100)",
    fg: "var(--grey-600)",
    br: "var(--grey-200)"
  },
  night: {
    bg: "rgba(255,255,255,.10)",
    fg: "var(--white)",
    br: "var(--border-night)"
  }
};
function Badge({
  tone = "turquoise",
  solid = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.turquoise;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      background: solid ? t.fg : t.bg,
      color: solid ? "var(--white)" : t.fg,
      border: "var(--border-w) solid " + (solid ? "transparent" : t.br),
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const PAD = {
  sm: "9px 16px",
  md: "13px 24px",
  lg: "17px 34px"
};
const FS = {
  sm: "var(--fs-caption)",
  md: "var(--fs-body-s)",
  lg: "var(--fs-body)"
};
function Button({
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const looks = {
    primary: {
      background: hover ? "var(--accent-primary-hover)" : "var(--accent-primary)",
      color: "var(--white)",
      border: "var(--border-w-strong) solid transparent",
      boxShadow: hover ? "var(--shadow-glow-turquoise)" : "var(--shadow-sm)"
    },
    secondary: {
      background: hover ? "var(--navy-900)" : "transparent",
      color: hover ? "var(--white)" : "var(--navy-900)",
      border: "var(--border-w-strong) solid var(--navy-900)",
      boxShadow: "none"
    },
    solid: {
      background: hover ? "var(--navy-800)" : "var(--navy-900)",
      color: "var(--white)",
      border: "var(--border-w-strong) solid transparent",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)"
    },
    accent: {
      background: hover ? "var(--yellow-400)" : "var(--yellow-500)",
      color: "var(--navy-900)",
      border: "var(--border-w-strong) solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    ghost: {
      background: hover ? "var(--surface-accent-soft)" : "transparent",
      color: "var(--turquoise-700)",
      border: "var(--border-w-strong) solid transparent",
      boxShadow: "none"
    },
    onNight: {
      background: hover ? "var(--white)" : "transparent",
      color: hover ? "var(--navy-900)" : "var(--white)",
      border: "var(--border-w-strong) solid rgba(255,255,255,.55)",
      boxShadow: "none"
    }
  };
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    padding: PAD[size],
    fontFamily: "var(--font-body)",
    fontSize: FS[size],
    fontWeight: "var(--fw-bold)",
    letterSpacing: "var(--ls-caps)",
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.42 : 1,
    textDecoration: "none",
    transform: press ? "scale(var(--press-scale))" : hover ? "var(--lift-hover)" : "none",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
    ...looks[variant],
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Card({
  tone = "light",
  interactive = false,
  padding = "var(--space-6)",
  accentBar = false,
  as = "div",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const Tag = as;
  const night = tone === "night";
  const soft = tone === "soft";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: "relative",
      overflow: "hidden",
      background: night ? "var(--surface-night-card)" : soft ? "var(--surface-sunken)" : "var(--surface-card)",
      color: night ? "var(--text-inverse)" : "var(--text-body)",
      border: "var(--border-w) solid " + (night ? "var(--border-night)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-lg)",
      padding: padding,
      boxShadow: night ? "none" : hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "var(--lift-hover)" : "none",
      transition: "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), accentBar && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      insetInlineStart: 0,
      insetBlockStart: 0,
      width: "100%",
      height: "4px",
      background: "var(--wash-plumage)"
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  tone = "light",
  action,
  style,
  ...rest
}) {
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      marginBottom: "var(--space-10)",
      textAlign: align === "center" ? "center" : "start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "58ch",
      marginInline: align === "center" ? "auto" : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-semibold)",
      color: night ? "var(--turquoise-400)" : "var(--turquoise-700)",
      marginBottom: "var(--space-4)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-m)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-display)",
      color: night ? "var(--white)" : "var(--text-strong)",
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      marginBottom: 0,
      fontSize: "var(--fs-body-l)",
      color: night ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, lead)), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  tone = "light",
  accent = "var(--accent-primary)",
  style,
  ...rest
}) {
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.25rem,4vw,3.25rem)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-display)",
      lineHeight: 1,
      color: night ? "var(--white)" : "var(--text-strong)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-semibold)",
      color: night ? "var(--turquoise-400)" : accent
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "28px",
      height: "3px",
      background: night ? "var(--turquoise-400)" : accent,
      borderRadius: "var(--radius-pill)"
    }
  }));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * No logo file was supplied with the brand materials, so the wordmark is set in
 * type exactly as it appears on the event poster: Space Grotesk, uppercase,
 * two stacked lines, tight tracking.
 */
function Wordmark({
  size = 28,
  tone = "navy",
  layout = "stacked",
  year = "2026",
  style,
  ...rest
}) {
  const color = tone === "light" ? "var(--white)" : "var(--navy-900)";
  const stacked = layout === "stacked";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: size + "px",
      lineHeight: 0.92,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, "Tech Day"), stacked ? /*#__PURE__*/React.createElement("br", null) : " ", /*#__PURE__*/React.createElement("span", null, "Cali", year ? " " : "", year && /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === "light" ? "var(--turquoise-400)" : "var(--turquoise-600)"
    }
  }, year)));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  id,
  label,
  description,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: "18px",
      height: "18px",
      marginTop: "2px",
      accentColor: "var(--accent-primary)",
      flexShrink: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-body-s)",
      color: "var(--text-strong)",
      fontWeight: "var(--fw-medium)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: "2px"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function FormField({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-s)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-body)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--state-error)",
      marginInlineStart: "4px"
    }
  }, "*")), hint && !error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      lineHeight: 1.45
    }
  }, hint), children, error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--state-error)",
      fontWeight: "var(--fw-semibold)"
    }
  }, error));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormMessage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  success: {
    bg: "var(--state-success-soft)",
    fg: "var(--state-success)",
    mark: "\u2713"
  },
  error: {
    bg: "var(--state-error-soft)",
    fg: "var(--state-error)",
    mark: "!"
  },
  info: {
    bg: "var(--state-info-soft)",
    fg: "var(--state-info)",
    mark: "i"
  },
  warning: {
    bg: "var(--state-warning-soft)",
    fg: "var(--state-warning)",
    mark: "!"
  }
};
function FormMessage({
  tone = "info",
  title,
  children,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === "error" ? "alert" : "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      padding: "14px 18px",
      borderRadius: "var(--radius-md)",
      background: t.bg,
      border: "var(--border-w) solid " + t.fg + "33",
      color: "var(--text-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: "22px",
      height: "22px",
      borderRadius: "var(--radius-pill)",
      background: t.fg,
      color: "var(--white)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)"
    }
  }, t.mark), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-s)"
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      color: t.fg,
      fontWeight: "var(--fw-bold)"
    }
  }, title), children));
}
Object.assign(__ds_scope, { FormMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormMessage.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const controlBase = (invalid, focus, disabled) => ({
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body-s)",
  color: "var(--text-strong)",
  background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
  border: "var(--border-w) solid " + (invalid ? "var(--state-error)" : focus ? "var(--accent-primary)" : "var(--border-default)"),
  borderRadius: "var(--radius-md)",
  padding: "13px 16px",
  outline: "none",
  boxShadow: focus ? "var(--ring-focus)" : "none",
  transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
  cursor: disabled ? "not-allowed" : "auto"
});
function Input({
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlBase(invalid, focus, disabled),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RadioGroup({
  name,
  options = [],
  value,
  onChange,
  columns = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    const desc = typeof o === "string" ? null : o.description;
    const active = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        padding: "14px 16px",
        borderRadius: "var(--radius-md)",
        border: "var(--border-w) solid " + (active ? "var(--accent-primary)" : "var(--border-default)"),
        background: active ? "var(--surface-accent-soft)" : "var(--surface-card)",
        cursor: "pointer",
        transition: "border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: active,
      onChange: onChange,
      style: {
        width: "18px",
        height: "18px",
        marginTop: "1px",
        accentColor: "var(--accent-primary)",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--fs-body-s)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)"
      }
    }, label), desc && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--fs-caption)",
        color: "var(--text-muted)",
        marginTop: "2px"
      }
    }, desc)));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const controlBase = (invalid, focus, disabled) => ({
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body-s)",
  color: "var(--text-strong)",
  background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
  border: "var(--border-w) solid " + (invalid ? "var(--state-error)" : focus ? "var(--accent-primary)" : "var(--border-default)"),
  borderRadius: "var(--radius-md)",
  padding: "13px 16px",
  outline: "none",
  boxShadow: focus ? "var(--ring-focus)" : "none",
  transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
  cursor: disabled ? "not-allowed" : "auto"
});
function Select({
  options = [],
  placeholder,
  invalid = false,
  disabled = false,
  style,
  children,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlBase(invalid, focus, disabled),
      appearance: "none",
      paddingInlineEnd: "42px",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      insetInlineEnd: "16px",
      insetBlockStart: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--grey-500)",
      fontSize: "11px"
    }
  }, "\u25BC"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const controlBase = (invalid, focus, disabled) => ({
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body-s)",
  color: "var(--text-strong)",
  background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
  border: "var(--border-w) solid " + (invalid ? "var(--state-error)" : focus ? "var(--accent-primary)" : "var(--border-default)"),
  borderRadius: "var(--radius-md)",
  padding: "13px 16px",
  outline: "none",
  boxShadow: focus ? "var(--ring-focus)" : "none",
  transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
  cursor: disabled ? "not-allowed" : "auto"
});
function Textarea({
  invalid = false,
  disabled = false,
  rows = 5,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlBase(invalid, focus, disabled),
      resize: "vertical",
      lineHeight: 1.55,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/site/CommunityStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CommunityStrip({
  communities = [],
  tone = "light",
  title = "Organizan",
  style,
  ...rest
}) {
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: night ? "var(--turquoise-400)" : "var(--grey-500)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2) var(--space-3)"
    }
  }, communities.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      background: night ? "rgba(255,255,255,.06)" : "var(--surface-card)",
      border: "var(--border-w) solid " + (night ? "var(--border-night)" : "var(--border-subtle)"),
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      color: night ? "var(--white)" : "var(--grey-600)",
      whiteSpace: "nowrap"
    }
  }, c))));
}
Object.assign(__ds_scope, { CommunityStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/CommunityStrip.jsx", error: String((e && e.message) || e) }); }

// components/site/CountdownTimer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
const UNITS = [["días", 86400000], ["horas", 3600000], ["min", 60000], ["seg", 1000]];
function CountdownTimer({
  target = "2026-11-21T08:00:00-05:00",
  tone = "night",
  style,
  ...rest
}) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  let remaining = Math.max(0, new Date(target).getTime() - now);
  const parts = UNITS.map(([label, ms]) => {
    const v = Math.floor(remaining / ms);
    remaining -= v * ms;
    return {
      label,
      value: String(v).padStart(2, "0")
    };
  });
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), parts.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.label,
    style: {
      flex: "1 1 0",
      minWidth: "68px",
      textAlign: "center",
      padding: "var(--space-4) var(--space-3)",
      borderRadius: "var(--radius-md)",
      background: night ? "rgba(255,255,255,.07)" : "var(--surface-card)",
      border: "var(--border-w) solid " + (night ? "var(--border-night)" : "var(--border-subtle)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "2rem",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      color: night ? "var(--white)" : "var(--navy-900)",
      fontVariantNumeric: "tabular-nums"
    }
  }, p.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: night ? "var(--turquoise-400)" : "var(--turquoise-700)"
    }
  }, p.label))));
}
Object.assign(__ds_scope, { CountdownTimer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/CountdownTimer.jsx", error: String((e && e.message) || e) }); }

// components/site/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  columns = [],
  communities = [],
  email = "techday@gmail.com",
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-night)",
      color: "var(--text-inverse-muted)",
      padding: "var(--space-20) 0 var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.4fr) repeat(auto-fit,minmax(150px,1fr))",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 34,
    tone: "light"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      maxWidth: "34ch",
      fontSize: "var(--fs-body-s)",
      color: "var(--navy-200)"
    }
  }, "21 de noviembre de 2026 \xB7 Cali, Valle del Cauca, Colombia."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + email,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-s)",
      color: "var(--turquoise-400)"
    }
  }, email)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--white)",
      marginBottom: "var(--space-4)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || "#",
    style: {
      fontSize: "var(--fs-body-s)",
      color: "var(--navy-200)",
      textDecoration: "none"
    }
  }, l.label))))))), communities.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      paddingTop: "var(--space-8)",
      borderTop: "var(--border-w) solid var(--border-night)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--turquoise-400)",
      marginBottom: "var(--space-5)"
    }
  }, "Organizan 8 comunidades"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)"
    }
  }, communities.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      border: "var(--border-w) solid var(--border-night)",
      fontSize: "var(--fs-caption)",
      color: "var(--white)"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      paddingTop: "var(--space-6)",
      borderTop: "var(--border-w) solid var(--border-night)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      justifyContent: "space-between",
      fontSize: "var(--fs-caption)",
      color: "var(--grey-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, note || "Hecho en Cali por y para la comunidad tech."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\xA9 2026 Tech Day Cali"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Footer.jsx", error: String((e && e.message) || e) }); }

// components/site/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Header({
  items = [],
  active,
  onNavigate,
  cta = "Inscríbete",
  ctaHref = "#inscripciones",
  tone = "light",
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const night = tone === "night";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: night ? "var(--glass-fill-night)" : "var(--glass-fill)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)",
      borderBottom: "var(--border-w) solid " + (night ? "var(--border-night)" : "var(--border-subtle)"),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "14px var(--gutter)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate("inicio");
      }
    },
    style: {
      textDecoration: "none",
      lineHeight: 0.9
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 19,
    layout: "stacked",
    tone: night ? "light" : "navy"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginInlineStart: "auto",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, items.map(it => {
    const isActive = active === it.id;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: it.href || "#" + it.id,
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it.id);
        }
      },
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-body-s)",
        fontWeight: isActive ? "var(--fw-bold)" : "var(--fw-medium)",
        color: night ? isActive ? "var(--turquoise-400)" : "var(--navy-100)" : isActive ? "var(--navy-900)" : "var(--grey-600)",
        textDecoration: "none",
        paddingBottom: "3px",
        borderBottom: "2px solid " + (isActive ? "var(--accent-primary)" : "transparent"),
        transition: "color var(--dur-fast) var(--ease-standard)"
      }
    }, it.label);
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: night ? "onNight" : "primary",
    href: ctaHref
  }, cta))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Header.jsx", error: String((e && e.message) || e) }); }

// components/site/ScheduleRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScheduleRow({
  time,
  title,
  detail,
  track,
  kind = "talk",
  style,
  ...rest
}) {
  const breakRow = kind === "break";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "104px minmax(0,1fr) auto",
      gap: "var(--space-5)",
      alignItems: "center",
      padding: "var(--space-5) var(--space-4)",
      borderBottom: "var(--border-w) solid var(--border-subtle)",
      background: breakRow ? "var(--surface-sunken)" : "transparent",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-s)",
      color: "var(--grey-500)"
    }
  }, time), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      color: breakRow ? "var(--grey-600)" : "var(--text-strong)"
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: "2px"
    }
  }, detail)), /*#__PURE__*/React.createElement("span", null, track && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, track)));
}
Object.assign(__ds_scope, { ScheduleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ScheduleRow.jsx", error: String((e && e.message) || e) }); }

// components/site/SpeakerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpeakerCard({
  name,
  role,
  company,
  photo,
  topics = [],
  tone = "light",
  style,
  ...rest
}) {
  const night = tone === "night";
  const initials = String(name || "").split(" ").slice(0, 2).map(w => w.charAt(0)).join("");
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    interactive: true,
    padding: "0",
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      background: night ? "var(--navy-800)" : "var(--wash-aurora)",
      display: "grid",
      placeItems: "center",
      overflow: "hidden"
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "saturate(1.05)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "2.5rem",
      fontWeight: "var(--fw-bold)",
      color: night ? "var(--turquoise-400)" : "var(--navy-400)"
    }
  }, initials)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5) var(--space-6) var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h4)",
      color: night ? "var(--white)" : "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-s)",
      color: night ? "var(--navy-200)" : "var(--text-muted)"
    }
  }, role, company ? " · " + company : ""), topics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-3)"
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: night ? "night" : "turquoise"
  }, t)))));
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

// components/site/SponsorTier.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TIER = {
  diamante: {
    color: "var(--turquoise-500)",
    label: "Diamante"
  },
  oro: {
    color: "var(--yellow-500)",
    label: "Oro"
  },
  plata: {
    color: "var(--grey-400)",
    label: "Plata"
  },
  comunidad: {
    color: "var(--green-600)",
    label: "Comunidad"
  }
};
function SponsorTier({
  tier = "oro",
  sponsors = [],
  style,
  ...rest
}) {
  const t = TIER[tier] || TIER.oro;
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: t.color,
      fontWeight: "var(--fw-semibold)"
    }
  }, t.label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border-subtle)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, sponsors.map((s, i) => {
    const name = typeof s === "string" ? s : s.name;
    const logo = typeof s === "string" ? null : s.logo;
    return /*#__PURE__*/React.createElement("div", {
      key: name + "-" + i,
      style: {
        flex: "1 1 180px",
        minHeight: tier === "diamante" ? "116px" : "84px",
        display: "grid",
        placeItems: "center",
        padding: "var(--space-5)",
        background: "var(--surface-card)",
        border: "var(--border-w) solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-xs)"
      }
    }, logo ? /*#__PURE__*/React.createElement("img", {
      src: logo,
      alt: name,
      style: {
        maxHeight: "40px",
        maxWidth: "100%",
        objectFit: "contain"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--grey-500)",
        fontSize: "var(--fs-body)"
      }
    }, name));
  })));
}
Object.assign(__ds_scope, { SponsorTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SponsorTier.jsx", error: String((e && e.message) || e) }); }

// components/site/TalkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TRACK_TONE = {
  Cloud: "turquoise",
  DevOps: "yellow",
  Software: "green",
  "IA/ML": "lilac",
  Innovación: "navy"
};
function TalkCard({
  time,
  title,
  speaker,
  track,
  room,
  level,
  format = "Charla",
  tone = "light",
  style,
  ...rest
}) {
  const night = tone === "night";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-s)",
      fontWeight: "var(--fw-semibold)",
      color: night ? "var(--turquoise-400)" : "var(--navy-900)"
    }
  }, time), track && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: night ? "night" : TRACK_TONE[track] || "turquoise"
  }, track), format && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, format)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-tight)",
      color: night ? "var(--white)" : "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      fontSize: "var(--fs-body-s)",
      color: night ? "var(--navy-200)" : "var(--text-muted)"
    }
  }, speaker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: night ? "var(--white)" : "var(--text-body)"
    }
  }, speaker), room && /*#__PURE__*/React.createElement("span", null, room), level && /*#__PURE__*/React.createElement("span", null, "Nivel ", level)));
}
Object.assign(__ds_scope, { TalkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/TalkCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cali.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  Stat
} = window.TechDayCaliDesignSystem_23dc8c;
function Cali({
  go
}) {
  const tips = [{
    t: "Cómo llegar",
    d: "Aeropuerto Alfonso Bonilla Aragón (CLO), a 30 minutos del centro. Taxi o shuttle directo."
  }, {
    t: "Dónde quedarse",
    d: "Granada y San Antonio concentran hoteles y hostales a pocos minutos del venue."
  }, {
    t: "Clima",
    d: "Entre 23 y 30 °C todo el año. Ropa liviana; noviembre trae lluvias cortas por la tarde."
  }, {
    t: "Qué comer",
    d: "Chontaduro, cholado y un buen sancocho de gallina. Pregúntale al comité, todos opinan."
  }, {
    t: "Salsa",
    d: "La capital mundial de la salsa. La afterparty del evento no es opcional."
  }, {
    t: "Naturaleza",
    d: "Los Farallones y el bosque de niebla: donde vive la tangara multicolor de nuestro afiche."
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wash-sky)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "clamp(48px,6vw,88px)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,.8fr)",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tdc-eyebrow"
  }, "Cali \xB7 Valle del Cauca \xB7 Colombia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display-l)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      margin: "var(--space-5) 0 0"
    }
  }, "Bienvenido a", /*#__PURE__*/React.createElement("br", null), "la sucursal del cielo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-accent)",
      fontStyle: "italic",
      fontSize: "1.75rem",
      color: "var(--navy-800)",
      marginTop: "var(--space-4)"
    }
  }, "Cali, Colombia"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "48ch",
      fontSize: "var(--fs-body-l)",
      color: "var(--grey-600)"
    }
  }, "Si vienes de fuera, esta es la gu\xEDa corta que le damos a todo el mundo antes del evento.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tanager-portrait.png",
    alt: "Tangara multicolor",
    style: {
      width: "100%",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
      gap: "var(--space-8)",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2.2M",
    label: "Habitantes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1.000 m",
    label: "Sobre el mar",
    accent: "var(--green-600)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "25 \xB0C",
    label: "Promedio anual",
    accent: "var(--yellow-600)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "30 min",
    label: "Del aeropuerto",
    accent: "var(--lilac-500)"
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Gu\xEDa r\xE1pida",
    title: "Lo que deber\xEDas saber antes de aterrizar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-5)"
    }
  }, tips.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.t,
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 var(--space-2)",
      fontSize: "var(--fs-h4)"
    }
  }, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body-s)",
      color: "var(--text-muted)"
    }
  }, x.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-night)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--white)",
      fontSize: "var(--fs-display-m)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      margin: 0
    }
  }, "Te esperamos el 21 de noviembre"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => go("inscripcion-asistente")
  }, "Reservar mi cupo"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "onNight",
    onClick: () => go("charlas")
  }, "Ver la agenda")))));
}
Object.assign(window, {
  Cali
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cali.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Charlas.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  TalkCard,
  ScheduleRow
} = window.TechDayCaliDesignSystem_23dc8c;
function Charlas({
  go
}) {
  const [track, setTrack] = React.useState("Todas");
  const tracks = ["Todas", "Cloud", "DevOps", "Software", "IA/ML", "Innovación"];
  const list = window.TDC_DATA.charlas.filter(c => track === "Todas" || c.track === track);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wash-aurora)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "clamp(48px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-eyebrow"
  }, "Charlas \xB7 21 de noviembre de 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display-l)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      margin: "var(--space-5) 0 0"
    }
  }, "La agenda del d\xEDa"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "52ch",
      marginTop: "var(--space-5)",
      fontSize: "var(--fs-body-l)",
      color: "var(--grey-600)"
    }
  }, "Programaci\xF3n preliminar. Los nombres de ponentes se confirman a medida que cierra la convocatoria."))), /*#__PURE__*/React.createElement("section", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginBottom: "var(--space-8)"
    }
  }, tracks.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTrack(t),
    style: {
      padding: "9px 18px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      background: track === t ? "var(--navy-900)" : "transparent",
      color: track === t ? "var(--white)" : "var(--grey-600)",
      border: "var(--border-w) solid " + (track === t ? "var(--navy-900)" : "var(--border-default)"),
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
      gap: "var(--space-5)"
    }
  }, list.map(c => /*#__PURE__*/React.createElement(TalkCard, _extends({
    key: c.title
  }, c))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Run of show",
    title: "El d\xEDa completo, hora por hora",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go("inscripcion-asistente")
    }, "Reservar mi cupo")
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, window.TDC_DATA.agenda.map(a => /*#__PURE__*/React.createElement(ScheduleRow, {
    key: a.time + a.title,
    time: a.time,
    title: a.title,
    detail: a.detail,
    track: a.track,
    kind: a.kind
  }))))));
}
Object.assign(window, {
  Charlas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Charlas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  Stat,
  SectionHeading,
  Wordmark,
  TalkCard,
  ScheduleRow,
  SponsorTier,
  CountdownTimer,
  CommunityStrip,
  FormField,
  Input,
  Textarea,
  FormMessage
} = window.TechDayCaliDesignSystem_23dc8c;
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    style: {
      background: "var(--wash-aurora)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "clamp(56px,8vw,104px)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginBottom: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "turquoise",
    solid: true
  }, "21 \xB7 Nov \xB7 2026"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "Cali, Colombia")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display-xl)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      margin: 0,
      color: "var(--navy-900)"
    }
  }, "Tech Day", /*#__PURE__*/React.createElement("br", null), "Cali ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--turquoise-600)"
    }
  }, "2026")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      maxWidth: "46ch",
      fontSize: "var(--fs-body-l)",
      color: "var(--grey-600)"
    }
  }, "El primer evento tecnol\xF3gico de escala en Cali. Ocho comunidades, un solo d\xEDa, 250+ personas que construyen software en el Valle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => go("inscripcion-asistente")
  }, "Quiero asistir"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go("inscripcion-ponente")
  }, "Quiero dar una charla")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(CommunityStrip, {
    communities: window.TDC_DATA.comunidades
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tanager-flight.png",
    alt: "Tangara multicolor en vuelo",
    style: {
      width: "100%",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      insetInlineStart: "-16px",
      insetBlockEnd: "-28px",
      width: "min(340px,90%)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)",
    style: {
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement(CountdownTimer, {
    tone: "light"
  }))))));
}
function Acerca() {
  return /*#__PURE__*/React.createElement("section", {
    id: "acerca",
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "01 \u2014 Acerca del evento",
    title: "Dejamos de organizarnos por separado",
    lead: "Hasta ahora los eventos tech en Cali eran fragmentados: m\xE1ximo 50 personas cada uno, comunidades aisladas. Tech Day Cali los une en una sola cita anual."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "8",
    label: "Comunidades"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "250+",
    label: "Asistentes",
    accent: "var(--yellow-600)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1",
    label: "D\xEDa completo",
    accent: "var(--green-600)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4",
    label: "Ejes tem\xE1ticos",
    accent: "var(--lilac-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-12)"
    }
  }, window.TDC_DATA.ejes.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.titulo,
    accentBar: true,
    interactive: true
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: {
      Cloud: "turquoise",
      DevOps: "yellow",
      Software: "green",
      "IA/ML": "lilac"
    }[e.track]
  }, e.track), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "var(--space-4) 0 var(--space-2)",
      fontSize: "var(--fs-h3)"
    }
  }, e.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body-s)",
      color: "var(--text-muted)"
    }
  }, e.detalle)))));
}
function Inscripciones({
  go
}) {
  const opciones = [{
    id: "inscripcion-asistente",
    titulo: "Asistente",
    copy: "Asegura tu cupo para el 21 de noviembre. Entrada gratuita con registro previo.",
    cta: "Inscribirme",
    variant: "primary"
  }, {
    id: "inscripcion-ponente",
    titulo: "Ponente",
    copy: "Propón una charla o un workshop. Convocatoria abierta hasta agosto.",
    cta: "Postular charla",
    variant: "accent"
  }, {
    id: "inscripcion-patrocinador",
    titulo: "Patrocinador",
    copy: "Conecta tu marca con 250+ profesionales tech del suroccidente.",
    cta: "Ver tiers",
    variant: "secondary"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "inscripciones",
    style: {
      background: "var(--surface-night)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "night",
    eyebrow: "02 \u2014 Inscripciones",
    title: "Elige c\xF3mo participar",
    lead: "Tres formas de estar en Tech Day Cali. Todas empiezan con un formulario corto."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-5)"
    }
  }, opciones.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.id,
    tone: "night",
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: "var(--white)",
      fontSize: "var(--fs-h2)"
    }
  }, o.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--navy-200)",
      fontSize: "var(--fs-body-s)",
      flex: 1
    }
  }, o.copy), /*#__PURE__*/React.createElement(Button, {
    variant: o.variant === "secondary" ? "onNight" : o.variant,
    onClick: () => go(o.id)
  }, o.cta))))));
}
function Agenda({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "charlas",
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "03 \u2014 Charlas",
    title: "C\xF3mo se ve el d\xEDa",
    lead: "Dos salas, un lab de workshops y una pausa larga para networking.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go("charlas")
    }, "Ver todas las charlas \u2192")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.45fr) minmax(0,1fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, window.TDC_DATA.agenda.map(a => /*#__PURE__*/React.createElement(ScheduleRow, {
    key: a.time + a.title,
    time: a.time,
    title: a.title,
    detail: a.detail,
    track: a.track,
    kind: a.kind
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, window.TDC_DATA.charlas.slice(0, 4).map(c => /*#__PURE__*/React.createElement(TalkCard, _extends({
    key: c.title
  }, c))))));
}
function CaliTeaser({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "cali",
    style: {
      background: "var(--wash-sky)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tanager-perched.png",
    alt: "Tangara multicolor, ave emblem\xE1tica del Valle del Cauca",
    style: {
      width: "100%",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-md)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "04 \u2014 Cali",
    title: "Vienes por las charlas, te quedas por la ciudad",
    lead: "Cali es salsa, guayacanes en flor y la tangara multicolor: el ave emblem\xE1tica del Valle del Cauca y la imagen de este evento."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("cali")
  }, "Gu\xEDa para visitantes"))));
}
function Patrocinadores({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "patrocinadores",
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "05 \u2014 Patrocinadores",
    title: "Marcas que hacen posible el d\xEDa",
    lead: "Los cupos de patrocinio para 2026 est\xE1n abiertos.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => go("inscripcion-patrocinador")
    }, "Quiero patrocinar")
  }), /*#__PURE__*/React.createElement(SponsorTier, {
    tier: "diamante",
    sponsors: ["Tu marca aquí", "Tu marca aquí"]
  }), /*#__PURE__*/React.createElement(SponsorTier, {
    tier: "oro",
    sponsors: ["Tu marca aquí", "Tu marca aquí", "Tu marca aquí"]
  }), /*#__PURE__*/React.createElement(SponsorTier, {
    tier: "comunidad",
    sponsors: window.TDC_DATA.comunidades.slice(0, 4)
  }));
}
function Contacto() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "06 \u2014 Contacto",
    title: "\xBFTienes una pregunta?",
    lead: "Escr\xEDbenos y te responde una persona del comit\xE9 organizador."
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:techday@gmail.com",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-l)"
    }
  }, "techday@gmail.com")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Nombre",
    htmlFor: "c-nombre",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-nombre",
    placeholder: "Ana Mar\xEDn"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Correo",
    htmlFor: "c-mail",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-mail",
    type: "email",
    placeholder: "ana@correo.com"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Mensaje",
    htmlFor: "c-msg",
    required: true
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-msg",
    rows: 4,
    placeholder: "Cu\xE9ntanos en qu\xE9 te ayudamos."
  })), sent && /*#__PURE__*/React.createElement(FormMessage, {
    tone: "success",
    title: "Mensaje enviado"
  }, "Te respondemos en menos de 48 horas."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Enviar mensaje"))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Acerca, null), /*#__PURE__*/React.createElement(Inscripciones, {
    go: go
  }), /*#__PURE__*/React.createElement(Agenda, {
    go: go
  }), /*#__PURE__*/React.createElement(CaliTeaser, {
    go: go
  }), /*#__PURE__*/React.createElement(Patrocinadores, {
    go: go
  }), /*#__PURE__*/React.createElement(Contacto, null));
}
Object.assign(window, {
  Home,
  Hero,
  Acerca,
  Inscripciones,
  Agenda,
  CaliTeaser,
  Patrocinadores,
  Contacto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Inscripcion.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  FormField,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  FormMessage,
  CountdownTimer
} = window.TechDayCaliDesignSystem_23dc8c;
const TIPOS = {
  "inscripcion-asistente": {
    eyebrow: "Inscripción · Asistente",
    titulo: "Asegura tu cupo",
    lead: "Entrada gratuita con registro previo. Cupo limitado a 250 personas.",
    tabla: "attendees"
  },
  "inscripcion-ponente": {
    eyebrow: "Inscripción · Ponente",
    titulo: "Propón tu charla",
    lead: "Charlas de 30 minutos o workshops de 90. Convocatoria abierta.",
    tabla: "speakers"
  },
  "inscripcion-patrocinador": {
    eyebrow: "Inscripción · Patrocinador",
    titulo: "Patrocina el día",
    lead: "Conecta tu marca con 250+ profesionales tech del suroccidente colombiano.",
    tabla: "sponsors"
  }
};
function Inscripcion({
  tipo,
  go
}) {
  const meta = TIPOS[tipo] || TIPOS["inscripcion-asistente"];
  const [sent, setSent] = React.useState(false);
  const [formato, setFormato] = React.useState("charla");
  const [tier, setTier] = React.useState("oro");
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wash-aurora)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-container",
    style: {
      paddingBlock: "clamp(40px,5vw,72px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-eyebrow"
  }, meta.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display-m)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      margin: "var(--space-4) 0 var(--space-3)"
    }
  }, meta.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "52ch",
      fontSize: "var(--fs-body-l)",
      color: "var(--grey-600)",
      margin: 0
    }
  }, meta.lead))), /*#__PURE__*/React.createElement("section", {
    className: "tdc-container",
    style: {
      paddingBlock: "var(--section-y)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.25fr) minmax(0,.75fr)",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, sent && /*#__PURE__*/React.createElement(FormMessage, {
    tone: "success",
    title: "\xA1Listo!"
  }, "Recibimos tus datos. Te escribimos a tu correo con los siguientes pasos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Nombre y apellido",
    htmlFor: "i-nombre",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "i-nombre",
    placeholder: "Ana Mar\xEDn"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Correo",
    htmlFor: "i-mail",
    required: true,
    hint: "Te enviamos la confirmaci\xF3n aqu\xED."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "i-mail",
    type: "email",
    placeholder: "ana@correo.com"
  }))), tipo === "inscripcion-asistente" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Rol",
    htmlFor: "i-rol",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    id: "i-rol",
    placeholder: "Selecciona tu rol",
    options: ["Desarrollo full-stack", "Frontend", "Backend", "Architect / DevOps", "Engineering manager / Tech lead", "En transición de carrera", "HR / Talent acquisition"]
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Empresa u organizaci\xF3n",
    htmlFor: "i-emp"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "i-emp",
    placeholder: "Independiente"
  }))), /*#__PURE__*/React.createElement(FormField, {
    label: "Temas que m\xE1s te interesan",
    htmlFor: "i-tema"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "i-tema",
    placeholder: "Selecciona un eje",
    options: ["Cloud (AWS, GCP, Azure)", "Kubernetes & DevOps", "Software moderno", "Innovación e IA/ML"]
  }))), tipo === "inscripcion-ponente" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormField, {
    label: "Formato"
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    name: "formato",
    columns: 2,
    value: formato,
    onChange: e => setFormato(e.target.value),
    options: [{
      value: "charla",
      label: "Charla",
      description: "30 minutos"
    }, {
      value: "workshop",
      label: "Workshop",
      description: "90 minutos, hands-on"
    }]
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "T\xEDtulo de la propuesta",
    htmlFor: "i-tit",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "i-tit",
    placeholder: "Kubernetes desde cero, en 90 minutos"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Eje tem\xE1tico",
    htmlFor: "i-eje",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    id: "i-eje",
    placeholder: "Selecciona un eje",
    options: ["Cloud", "Kubernetes & DevOps", "Software moderno", "Innovación e IA/ML"]
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Nivel",
    htmlFor: "i-niv",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    id: "i-niv",
    placeholder: "Selecciona un nivel",
    options: ["Básico", "Intermedio", "Avanzado"]
  }))), /*#__PURE__*/React.createElement(FormField, {
    label: "Resumen",
    htmlFor: "i-abs",
    required: true,
    hint: "M\xE1ximo 600 caracteres. \xBFQu\xE9 se lleva quien te escuche?"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "i-abs",
    rows: 5,
    placeholder: "En esta charla mostramos c\xF3mo\u2026"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Bio corta",
    htmlFor: "i-bio",
    required: true
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "i-bio",
    rows: 3,
    placeholder: "Ingeniera de plataforma en\u2026"
  }))), tipo === "inscripcion-patrocinador" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Empresa",
    htmlFor: "i-comp",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "i-comp",
    placeholder: "Nombre de la empresa"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Sitio web",
    htmlFor: "i-web"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "i-web",
    placeholder: "https://"
  }))), /*#__PURE__*/React.createElement(FormField, {
    label: "Tier de patrocinio",
    required: true
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    name: "tier",
    columns: 2,
    value: tier,
    onChange: e => setTier(e.target.value),
    options: [{
      value: "diamante",
      label: "Diamante",
      description: "Marca principal + keynote"
    }, {
      value: "oro",
      label: "Oro",
      description: "Stand + logo en agenda"
    }, {
      value: "plata",
      label: "Plata",
      description: "Logo en sitio y pantallas"
    }, {
      value: "comunidad",
      label: "Comunidad",
      description: "Apoyo en especie"
    }]
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\xBFQu\xE9 buscan con el patrocinio?",
    htmlFor: "i-obj"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "i-obj",
    rows: 4,
    placeholder: "Contratar perfiles backend, dar a conocer el producto\u2026"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    id: "i-datos",
    label: "Autorizo el tratamiento de mis datos personales",
    description: "Solo los usamos para organizar Tech Day Cali 2026."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Enviar"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-caption)",
      color: "var(--grey-400)"
    }
  }, "Se guarda en Supabase \xB7 tabla ", meta.tabla)), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      position: "sticky",
      top: "96px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tdc-eyebrow"
  }, "Faltan"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(CountdownTimer, {
    tone: "light"
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "night",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "night"
  }, "21 \xB7 Nov \xB7 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--navy-200)",
      fontSize: "var(--fs-body-s)"
    }
  }, "8:00 a 18:00 \xB7 Cali, Valle del Cauca. Un solo d\xEDa, dos salas y un lab de workshops."), /*#__PURE__*/React.createElement(Button, {
    variant: "onNight",
    size: "sm",
    onClick: () => go("charlas")
  }, "Ver la agenda")))));
}
Object.assign(window, {
  Inscripcion
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Inscripcion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.TDC_DATA = {
  nav: [{
    id: "acerca",
    label: "Acerca"
  }, {
    id: "charlas",
    label: "Charlas"
  }, {
    id: "cali",
    label: "Cali"
  }, {
    id: "patrocinadores",
    label: "Patrocinadores"
  }, {
    id: "contacto",
    label: "Contacto"
  }],
  comunidades: ["AWS UG Valle del Cauca", "Cloud Native Cali", "GDG Cali", "Parchatech", "Pioneras Dev Cali", "Python Cali", "PyLadies Cali", "Rails Girls Cali"],
  ejes: [{
    track: "Cloud",
    titulo: "Cloud",
    detalle: "AWS, GCP y Azure: arquitectura, costos y multi-región."
  }, {
    track: "DevOps",
    titulo: "Kubernetes & DevOps",
    detalle: "Plataformas internas, CI/CD, observabilidad y SRE."
  }, {
    track: "Software",
    titulo: "Software moderno",
    detalle: "Frontend, backend, APIs y calidad en equipos reales."
  }, {
    track: "IA/ML",
    titulo: "Innovación e IA",
    detalle: "Casos de éxito con IA/ML aplicada en producto."
  }],
  agenda: [{
    time: "08:00",
    title: "Registro y café",
    kind: "break"
  }, {
    time: "09:00",
    title: "Apertura: ocho comunidades, un solo día",
    track: "Keynote",
    detail: "Auditorio principal"
  }, {
    time: "09:45",
    title: "Bloque de charlas — Cloud",
    track: "Cloud"
  }, {
    time: "11:00",
    title: "Workshop — Kubernetes desde cero",
    track: "DevOps",
    detail: "Cupo limitado · trae tu portátil"
  }, {
    time: "12:30",
    title: "Almuerzo y networking",
    kind: "break"
  }, {
    time: "14:00",
    title: "Bloque de charlas — Software moderno",
    track: "Software"
  }, {
    time: "15:30",
    title: "Panel: talento tech en el Valle",
    track: "Innovación",
    detail: "Con perfiles de HR y tech leads"
  }, {
    time: "16:30",
    title: "Casos de éxito con IA/ML",
    track: "IA/ML"
  }, {
    time: "17:30",
    title: "Cierre y afterparty",
    kind: "break"
  }],
  charlas: [{
    time: "09:45",
    track: "Cloud",
    title: "Multi-región sin perder el sueño",
    speaker: "Por confirmar",
    room: "Auditorio",
    level: "Intermedio",
    format: "Charla"
  }, {
    time: "09:45",
    track: "Software",
    title: "APIs que sobreviven a su segundo año",
    speaker: "Por confirmar",
    room: "Sala B",
    level: "Intermedio",
    format: "Charla"
  }, {
    time: "11:00",
    track: "DevOps",
    title: "Kubernetes desde cero, en 90 minutos",
    speaker: "Por confirmar",
    room: "Lab",
    level: "Básico",
    format: "Workshop"
  }, {
    time: "11:00",
    track: "IA/ML",
    title: "De notebook a producción: MLOps mínimo viable",
    speaker: "Por confirmar",
    room: "Sala B",
    level: "Avanzado",
    format: "Charla"
  }, {
    time: "14:00",
    track: "Software",
    title: "Frontend sin frameworks de moda",
    speaker: "Por confirmar",
    room: "Auditorio",
    level: "Básico",
    format: "Charla"
  }, {
    time: "14:00",
    track: "Cloud",
    title: "FinOps para equipos pequeños",
    speaker: "Por confirmar",
    room: "Sala A",
    level: "Intermedio",
    format: "Charla"
  }, {
    time: "15:30",
    track: "Innovación",
    title: "Panel: cómo contrata el Valle",
    speaker: "Por confirmar",
    room: "Auditorio",
    level: "Todos",
    format: "Panel"
  }, {
    time: "16:30",
    track: "DevOps",
    title: "Observabilidad que sí se usa",
    speaker: "Por confirmar",
    room: "Sala A",
    level: "Intermedio",
    format: "Charla"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.FormMessage = __ds_scope.FormMessage;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CommunityStrip = __ds_scope.CommunityStrip;

__ds_ns.CountdownTimer = __ds_scope.CountdownTimer;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.ScheduleRow = __ds_scope.ScheduleRow;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

__ds_ns.SponsorTier = __ds_scope.SponsorTier;

__ds_ns.TalkCard = __ds_scope.TalkCard;

})();
