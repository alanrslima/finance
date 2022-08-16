import { Flex, Text } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled(Flex, {
  p: "$6",
  border: "1px solid $blackA100",
  flexDirection: "column",
  borderRadius: "$3",
  w: "100%",
});

export const Header = styled(Flex, {
  justify: "space-between",
});

export const Title = styled(Text, {
  fontSize: "$4",
  fontWeight: "$bold",
});
