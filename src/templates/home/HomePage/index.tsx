import { Drawer } from 'components/atoms/Drawer';
import { Spacer } from 'components/atoms/Spacer';
import { Card } from 'components/molecules/Card';
import { Ticket } from 'components/molecules/Ticket';
import { Chart } from 'components/organisms/Chart';
import { LastTransactions } from 'components/organisms/LastTransactions';
import { StatResume } from 'components/organisms/StatResume';
import { DefaultLayout } from 'layouts/DefaultLayout';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { Layout, Row, WrapperLeft, WrapperRight } from './styles';

export function HomePage(): ReactElement {
  const { query } = useRouter();

  useEffect(() => {
    console.log('wqdfwef', query);
  }, [query]);

  return (
    <DefaultLayout>
      {/* <Drawer /> */}
      <Spacer h="$8" />
      <StatResume />
      <Layout>
        <WrapperLeft>
          <Spacer h="$8" />
          <Card title="Fluxo de caixa">
            <Chart />
          </Card>
          <Spacer h="$8" />
          <Card title="Contas">
            <Row>
              <Ticket />
              <Ticket />
              <Ticket />
            </Row>
          </Card>
        </WrapperLeft>

        <WrapperRight>
          <Spacer h="$8" />
          <LastTransactions />
        </WrapperRight>
      </Layout>
    </DefaultLayout>
  );
}
