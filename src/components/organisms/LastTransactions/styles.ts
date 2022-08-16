import { Flex } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled(Flex, {
  w: "60%",
});

export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
});

export const Item = styled("li", {
  bg: "red",
  my: "$4",
  p: "$4",
  listStyleType: "none",
});
