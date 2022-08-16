import { Flex, Text, Avatar as CAvatar } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled(Flex, {
  flexDirection: "column",
  borderBottom: "1px solid $blackA100",

  "@md": {
    flexDirection: "row",
  },
});
