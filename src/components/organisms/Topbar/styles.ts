import { Flex, Text, Avatar as CAvatar } from "@chakra-ui/react";
import { styled } from "styles/stitches.config";

export const Container = styled(Flex, {
  flexDirection: "row",
  align: "center",
  justifyContent: "space-between",
});

export const Avatar = styled(CAvatar, {});

export const WrapperActions = styled(Flex, {
  flexDirection: "row",
});

export const WrapperResume = styled(Flex, {
  align: "center",
});

export const WrapperText = styled(Flex, {
  flexDirection: "column",
  pl: "$5",
});

export const Title = styled(Text, {
  fontWeight: "$bold",
  fontSize: "$5",
});

export const Name = styled("span", {
  fontWeight: "$regular",
});

export const Description = styled("span", {
  color: "$blackA400",
});
