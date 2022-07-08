import { colors } from "./designTokens/colors";
import { space } from "./designTokens/spaces";
import { fonts } from "./designTokens/fonts";
import { lineHeights } from "./designTokens/lineHeights";
import { fontSizes } from "./designTokens/fontSizes";
import { radii } from "./designTokens/radii";
import { zIndices } from "./designTokens/zIndices";
import { transitions } from "./designTokens/transitions";
import { sizes } from "./designTokens/sizes";
import { fontWeights } from "./designTokens/fontWeights";
import { semanticColors } from "./componentTokens/semanticColors";
import { borders } from "./designTokens/borders";

export const defaultTheme = {
  colors: { ...colors, ...semanticColors },
  space,
  sizes,
  borders,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  radii,
  zIndices,
  transitions,
};
