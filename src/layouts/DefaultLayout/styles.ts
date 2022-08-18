import { Flex } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled(Flex, {
  bg: "$bg",
  h: "100vh",
  // h: "100%",
  // minH: "-webkit-fill-available",
  // h: "webkit-fill-available",
  "@sm": { maxW: "640px" },
  "@md": { maxW: "768px" },
  "@lg": { maxW: "1024px" },
  "@xl": { maxW: "1280px" },
  "@xl2": { maxW: "1536px" },
  mx: "auto",
});

export const Content = styled(Flex, {
  w: "100%",
  h: "100%",
  overflowY: "scroll",
  p: "$7",
});
