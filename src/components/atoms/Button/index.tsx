import { ReactElement } from "react";
import { Container } from "./styles";
import { FaPlus } from "react-icons/fa";
import { ButtonProps } from "./types";
import { Button as CButton } from "@chakra-ui/react";

export function Button({
  bgColor,
  text,
  tintColor,
}: ButtonProps): ReactElement {
  return (
    <Container leftIcon={<FaPlus />} color={tintColor} colorScheme={bgColor}>
      {text}
    </Container>
  );
}
