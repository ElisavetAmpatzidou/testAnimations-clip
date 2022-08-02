import { CSSEffect } from "@donkeyclip/motorcortex";
export const scaleX = (scaleX,selector, duration, delay = 0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scaleX
        },
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
