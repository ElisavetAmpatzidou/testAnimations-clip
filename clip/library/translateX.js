import { CSSEffect } from "@donkeyclip/motorcortex";
export const translateX = (translateX,selector, duration, delay = 0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
            translateX
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
