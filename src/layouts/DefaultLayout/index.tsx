// import { Head } r } from 'components/Sidebar';
import { Head } from "components/atoms/Head";
import { Sidebar } from "components/organisms/Sidebar";
import { Topbar } from "components/organisms/Topbar";
import { ReactElement } from "react";
import { Container, Content } from "./styles";
import { DefaultLayoutProps } from "./types";

export function DefaultLayout({
  children,
  title,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      <Head title={title} />
      <Container>
        <Sidebar />

        <Content as="main">
          <Topbar />
          {children}
        </Content>
      </Container>
    </>
  );
}
