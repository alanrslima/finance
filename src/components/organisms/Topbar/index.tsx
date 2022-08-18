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
import { SelectInput } from "components/atoms/SelectInput";

export function Topbar(): ReactElement {
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
        <Button text="Nova transação" />
        <SelectInput />
      </WrapperActions>
    </Container>
  );
}
