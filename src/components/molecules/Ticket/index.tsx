import { ReactElement } from 'react';
import { Container, Description, Title, Value } from './styles';
import { TicketProps } from './types';

export function Ticket({ onClick }: TicketProps): ReactElement {
  return (
    <Container onClick={onClick}>
      <Title>NuBank</Title>
      <Value>R$ 1.200,00</Value>
      <Description>Saldo em 31 de ago</Description>
    </Container>
  );
}
