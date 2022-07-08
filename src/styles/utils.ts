import type * as Stitches from "@stitches/react";

export const utils = {
  bg: (value: string) => ({
    backgroundColor: value,
  }),

  align: (value: Stitches.PropertyValue<"alignItems">) => ({
    alignItems: value,
  }),

  justify: (value: Stitches.PropertyValue<"justifyContent">) => ({
    justifyContent: value,
  }),

  direction: (value: Stitches.PropertyValue<"flexDirection">) => ({
    flexDirection: value,
  }),

  w: (value: Stitches.PropertyValue<"width">) => ({
    width: value,
  }),

  maxW: (value: Stitches.PropertyValue<"width">) => ({
    maxWidth: value,
  }),

  minW: (value: Stitches.PropertyValue<"width">) => ({
    minWidth: value,
  }),

  h: (value: Stitches.PropertyValue<"height">) => ({
    height: value,
  }),

  maxH: (value: Stitches.PropertyValue<"height">) => ({
    maxHeight: value,
  }),

  minH: (value: Stitches.PropertyValue<"height">) => ({
    minHeight: value,
  }),

  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

  fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
    flexDirection: value,
  }),
  fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

  ai: (value: Stitches.PropertyValue<"alignItems">) => ({ alignItems: value }),
  ac: (value: Stitches.PropertyValue<"alignContent">) => ({
    alignContent: value,
  }),
  jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
    justifyContent: value,
  }),
  as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
  fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<"flexShrink">) => ({ flexShrink: value }),
  fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

  bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
    backgroundColor: value,
  }),

  br: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

  lh: (value: Stitches.PropertyValue<"lineHeight">) => ({ lineHeight: value }),

  ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
  oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

  pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
    pointerEvents: value,
  }),
  us: (value: Stitches.PropertyValue<"userSelect">) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  size: (value: Stitches.PropertyValue<"width">) => ({
    width: value,
    height: value,
  }),

  maxSize: (value: Stitches.PropertyValue<"width">) => ({
    maxWidth: value,
    maxHeight: value,
  }),

  minSize: (value: Stitches.PropertyValue<"width">) => ({
    minWidth: value,
    minHeight: value,
  }),

  appearance: (value: Stitches.PropertyValue<"appearance">) => ({
    WebkitAppearance: value,
    appearance: value,
  }),

  backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),

  bgGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
    backgroundImage: value,
  }),

  _hover: (value: Stitches.CSS) => ({
    "&:hover": value,
  }),

  _active: (value: Stitches.CSS) => ({
    "&:active": value,
    "&:active-within": value,
  }),

  _focus: (value: Stitches.CSS) => ({
    "&:focus": value,
    "&:focus-within": value,
  }),

  _disabled: (value: Stitches.CSS) => ({
    "&:disabled": value,
  }),

  _placeholder: (value: Stitches.CSS) => ({
    "&::placeholder": value,
    "&::-webkit-input-placeholder": value,
  }),
};
