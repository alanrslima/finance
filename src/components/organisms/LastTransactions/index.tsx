import { Card } from 'components/molecules/Card';
import { SimpleItem } from 'components/molecules/SimpleItem';
import { ReactElement } from 'react';
import { Container, List, Item } from './styles';

export function LastTransactions(): ReactElement {
  return (
    <Card title="Últimas transações">
      <List>
        <SimpleItem />
        <SimpleItem />
        <SimpleItem />
        <SimpleItem />
        <SimpleItem />
        <SimpleItem />
        <SimpleItem />
        <SimpleItem />
      </List>
    </Card>
  );
}
