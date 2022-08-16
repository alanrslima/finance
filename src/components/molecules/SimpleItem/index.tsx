import { ReactElement } from "react";
import {
  Container,
  Description,
  Title,
  RightValue,
  WrapperIcon,
  WrapperCenter,
} from "./styles";
import { FaCar } from "react-icons/fa";

export function SimpleItem(): ReactElement {
  return (
    <Container>
      <WrapperIcon>
        <FaCar />
      </WrapperIcon>

      <WrapperCenter>
        <Title>Titulo</Title>
        <Description>wefwefwef</Description>
      </WrapperCenter>

      <RightValue>+ R$ 200,00</RightValue>
    </Container>
  );
}
