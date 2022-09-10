import { ReactElement } from 'react';
import { Container, Row } from './styles';
import { Stat } from 'components/molecules/Stat';
import { Card } from 'components/molecules/Card';

export function StatResume(): ReactElement {
  return (
    <Card>
      <Row>
        <Stat />
        <Stat />
        <Stat />
        <Stat />
      </Row>
    </Card>
  );
}
