import { CSSEffect } from "@donkeyclip/motorcortex";
export const zoom = (zoom,selector, duration,delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        zoom
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
