import { Drawer, DrawerElement } from 'components/molecules/Drawer';
import { Spacer } from 'components/atoms/Spacer';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { ReactElement, useRef } from 'react';

export function AccountsForm(): ReactElement {
  const drawerRef = useRef<DrawerElement>();

  return (
    <DefaultLayout title="Contas">
      <Spacer h="$8" />

      <Drawer ref={drawerRef} />
    </DefaultLayout>
  );
}
