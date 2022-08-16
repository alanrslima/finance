import { ReactElement } from "react";
import { Container } from "./styles";
import { FaPlus } from "react-icons/fa";

export function Button(): ReactElement {
  return (
    <Container leftIcon={<FaPlus />} colorScheme="blue">
      Nova transação
    </Container>
  );
}
