import { Badge } from "components/atoms/Badge";
import { ReactElement } from "react";
import { Container, Title, Value, Description, WrapperTitle } from "./styles";

export function Stat(): ReactElement {
  return (
    <Container>
      <WrapperTitle>
        <Title>Saldo Total</Title>
        <Badge />
      </WrapperTitle>

      <Value>R$ 1.200,00</Value>
      <Description>Saldo das contas em 31 de Julho</Description>
    </Container>
  );
}
