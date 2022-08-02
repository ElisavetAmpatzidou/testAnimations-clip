import { CSSEffect } from "@donkeyclip/motorcortex";
export const fontSize = (fontSize,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        fontSize,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );