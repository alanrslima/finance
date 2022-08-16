import { Flex, Text } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled(Flex, {
  flexDirection: "column",
  w: "100%",
  py: "$8",
});

export const WrapperTitle = styled(Flex, {
  flexDirection: "row",
  align: "center",
  mb: "$4",
});

export const Title = styled(Text, {
  color: "$gray600",
  fontWeight: "$medium",
  mr: "$3",
});

export const Value = styled(Text, {
  fontWeight: "$black",
  fontSize: "$5",
});

export const Description = styled(Text, {
  mt: "$3",
  color: "$gray600",
  fontSize: "$1",
});
