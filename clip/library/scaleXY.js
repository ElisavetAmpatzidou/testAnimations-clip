import { CSSEffect } from "@donkeyclip/motorcortex";
export const scaleXY = (scale,selector, duration, delay = 0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scaleX:scale,
          scaleY:scale
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
