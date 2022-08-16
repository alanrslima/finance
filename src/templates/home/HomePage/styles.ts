import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Layout = styled(Flex, {
  flexDirection: "row",
});

export const WrapperLeft = styled(Flex, {
  flex: 0.6,
});

export const WrapperRight = styled(Flex, {
  flex: 0.4,
});
