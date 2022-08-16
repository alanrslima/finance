import { ReactElement } from "react";
import { Container } from "./styles";
import { FaArrowUp } from "react-icons/fa";

export function Badge(): ReactElement {
  return (
    <Container colorScheme="green">
      <FaArrowUp />
      25%
    </Container>
  );
}
