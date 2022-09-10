// import { Button } from "components/atoms/Button";
import { ReactElement } from 'react';
import { Container, Header, Title } from './styles';
import { CardProps } from './types';

export function Card({ children, title }: CardProps): ReactElement {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {/* <Button /> */}
      </Header>
      {children}
    </Container>
  );
}
