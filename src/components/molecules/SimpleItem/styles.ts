import { Flex, Text } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled("li", {
  display: "flex",
  py: "$4",
  listStyleType: "none",
  flexDirection: "row",
  align: "center",
});

export const Description = styled(Text, {
  color: "$blackA500",
  fontSize: "$2",
});

export const Title = styled(Text, {
  fontWeight: "$bold",
});
export const RightValue = styled(Text, {
  fontWeight: "$bold",
});

export const WrapperIcon = styled(Flex, {
  h: "50px",
  w: "50px",
  bg: "$gray100",
  borderRadius: "$3",
  mr: "$4",
  justify: "center",
  align: "center",
  color: "$gray700",
  fontSize: "$4",
});

export const WrapperCenter = styled(Flex, {
  flexDirection: "column",
  flex: 1,
});
