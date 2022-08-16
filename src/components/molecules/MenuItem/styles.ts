// import { Flex, Icon as CIcon, Link as CLink } from "@chakra-ui/react";
// import { styled } from "styles/stitches.config";

// export const Icon = styled(CIcon, {
//   size: "16px",
// });

// export const IconWrapper = styled(Flex, {
//   size: "30px",
//   mr: "$space$4",

//   bg: "$white",
//   color: "$primary",

//   borderRadius: "$radii$round",

//   justify: "center",
//   align: "center",

//   transition: "all $transitions$1",
// });

// const activeMenuLinkState = {
//   $$shadowColor: "rgba(0,0,0,0.04)",
//   bg: "$white",
//   boxShadow: "0 3px 5px $$shadowColor",

//   color: "$gray900",

//   [`& ${IconWrapper}`]: {
//     bg: "$primary",
//     color: "$white",
//   },
// };

// export const MenuLink = styled(CLink, {
//   textDecoration: "none",
//   display: "flex",
//   justify: "flex-start",
//   align: "center",

//   w: "60px",
//   h: "max-content",
//   px: "$5",
//   br: "$pill",

//   fontSize: "14px",
//   fontFamily: "$fonts$openSans",
//   fontWeight: "700",
//   color: "$gray600",

//   transition: "all $transitions$1",

//   _hover: {
//     ...activeMenuLinkState,
//   },

//   _focus: {
//     color: "green600",
//     outline: "0",
//     boxShadow: "0 0 0 2px $colors$green300",
//   },

//   _active: {
//     color: "green600",
//     outline: "0",
//     boxShadow: "0 0 0 2px $colors$green300",
//   },

//   variants: {
//     active: {
//       true: {
//         ...activeMenuLinkState,
//       },
//     },
//   },
// });

// export const Container = styled(Flex, {
//   "&:not(:first-of-type)": {
//     mt: "$3",
//   },
// });

import { Flex, Icon as CIcon, Link as CLink } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Icon = styled(CIcon, {
  size: "20px",
});

export const IconWrapper = styled(Flex, {
  w: "100%",
  h: "100%",
  display: "flex",
  justify: "center",
  align: "center",

  transition: "all $transitions$1",
});

const activeMenuLinkState = {
  $$shadowColor: "rgba(0,0,0,0.04)",
  bg: "$secundary",
  boxShadow: "0 3px 5px $shadowColor",
  color: "$primary",

  // [`& ${IconWrapper}`]: {
  //   bg: "$primary",
  //   color: "$white",
  // },
};

export const MenuLink = styled(CLink, {
  textDecoration: "none",
  display: "flex",
  // justify: "flex-start",
  // align: "center",

  w: "60px",
  h: "60px",
  // px: "$5",
  br: "$2",

  // fontSize: "14px",
  // fontFamily: "$fonts$openSans",
  // fontWeight: "700",
  color: "$gray600",

  transition: "all $transitions$1",

  _hover: {
    ...activeMenuLinkState,
  },

  _focus: {
    color: "green600",
    outline: "0",
    boxShadow: "0 0 0 2px $colors$green300",
  },

  _active: {
    color: "green600",
    outline: "0",
    boxShadow: "0 0 0 2px $colors$green300",
  },

  variants: {
    active: {
      true: {
        ...activeMenuLinkState,
      },
    },
  },
});

export const Container = styled(Flex, {
  "&:not(:first-of-type)": {
    mt: "$5",
  },
});
