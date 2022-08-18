import { ButtonProps as CButtonProps } from "@chakra-ui/react";

export type ButtonProps = CButtonProps & {
  bgColor?: string;
  text: string;
  tintColor?: string;
};
