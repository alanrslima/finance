import { Drawer, DrawerElement } from 'components/molecules/Drawer';
import { Spacer } from 'components/atoms/Spacer';
import { Card } from 'components/molecules/Card';
import { Ticket } from 'components/molecules/Ticket';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { ReactElement, useRef } from 'react';
import { Row } from './styles';

export function AccountsPage(): ReactElement {
  const drawerRef = useRef<DrawerElement>();

  const onClickAccount = () => {
    drawerRef.current.open();
  };

  return (
    <DefaultLayout title="Contas">
      <Spacer h="$8" />
      <Card>
        <Row>
          <Ticket onClick={onClickAccount} />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </Row>
      </Card>
      <Drawer ref={drawerRef} />
    </DefaultLayout>
  );
}
