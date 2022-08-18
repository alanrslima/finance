import { Drawer } from "components/atoms/Drawer";
import { Spacer } from "components/atoms/Spacer";
import { Card } from "components/molecules/Card";
import { Chart } from "components/organisms/Chart";
import { LastTransactions } from "components/organisms/LastTransactions";
import { StatResume } from "components/organisms/StatResume";
import { DefaultLayout } from "layouts/DefaultLayout";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { Layout, WrapperLeft, WrapperRight } from "./styles";

export function HomePage(): ReactElement {
  const { query } = useRouter();

  useEffect(() => {
    console.log("wqdfwef", query);
  }, [query]);

  return (
    <DefaultLayout>
      {/* <Drawer /> */}
      <StatResume />
      <Layout>
        <WrapperLeft>
          <Spacer h="$8" />
          <Card>
            <Chart />
          </Card>
          <Spacer h="$8" />
          <Card>
            <Chart />
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
