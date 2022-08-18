import { Flex } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Layout = styled(Flex, {
  flexDirection: "column",
  "@md": {
    flexDirection: "row",
  },
});

export const WrapperLeft = styled(Flex, {
  flexDirection: "column",
  flex: 1,
  "@sm": {
    flex: 0.6,
  },
});

export const WrapperRight = styled(Flex, {
  flexDirection: "column",
  flex: 1,
  "@md": {
    flex: 0.4,
    pl: "$8",
  },
});
