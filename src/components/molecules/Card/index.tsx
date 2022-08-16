import { Button } from "components/atoms/Button";
import { ReactElement } from "react";
import { Container, Header, Title } from "./styles";
import { CardProps } from "./types";

export function Card({ children }: CardProps): ReactElement {
  return (
    <Container>
      <Header>
        <Title>Titulo</Title>
        <Button />
      </Header>
      {children}
    </Container>
  );
}
