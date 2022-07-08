import { createStitches } from "@stitches/react";
import { defaultTheme } from "./themes/default";
import { media } from "./themes/default/designTokens/media";
import { utils } from "./utils";

export const {
  styled,
  css,
  theme,
  createTheme,
  globalCss,
  getCssText,
  reset,
  keyframes,
  config,
} = createStitches({
  theme: {
    ...defaultTheme,
  },
  media,
  utils,
});
