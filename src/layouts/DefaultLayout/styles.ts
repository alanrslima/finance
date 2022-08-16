import { Container as CContainer, Flex } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Wrapper = styled(Flex, {
  h: "100vh",
  w: "100vw",
  bg: "$gray100",
  // display: "flex",
  // boxSizing: "border-box",
});

export const Container = styled(Flex, {
  // h: "100vh",
  // w: "100vw",
  // display: "flex",
  bg: "$bg",
  flexDirection: "row",
  // zIndex: "$0",
  w: "100%",
  "@sm": { maxW: "640px" },
  "@md": { maxW: "768px" },
  "@lg": { maxW: "1024px" },
  "@xl": { maxW: "1280px" },
  "@xl2": { maxW: "1536px" },
  mx: "auto",
});

export const Content = styled(Flex, {
  h: "100%",
  w: "100%",
  overflowY: "scroll",
  p: "$7",
});

export const InnerContent = styled(Flex, {
  direction: "column",
  w: "100%",
  h: "max-content",
  maxW: "1920px",
  mx: "auto",
  py: "$7",
  // overflowY: 'hidden',
});
