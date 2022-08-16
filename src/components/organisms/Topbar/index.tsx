import { ReactElement } from "react";
import {
  Container,
  Title,
  Name,
  Description,
  WrapperResume,
  WrapperActions,
  Avatar,
  WrapperText,
} from "./styles";
import { Button } from "components/atoms/Button";

export function Topbar(): ReactElement {
  const arias = {};

  return (
    <Container>
      <WrapperResume>
        <Avatar />
        <WrapperText>
          <Title>
            Seja bem vindo, <Name>Alan Lima ✌️</Name>
          </Title>
          <Description>
            Aqui está o seu resumo de informações mensais
          </Description>
        </WrapperText>
      </WrapperResume>

      <WrapperActions>
        <Button />
        <Button />
      </WrapperActions>
    </Container>
  );
}
