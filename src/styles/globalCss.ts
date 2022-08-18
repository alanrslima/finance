import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  body: {
    background: "$gray200",
    overflow: "hidden",
    maxHeight: "-webkit-fill-available",
  },
});
