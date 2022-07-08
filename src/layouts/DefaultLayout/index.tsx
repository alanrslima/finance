// import { Head } r } from 'components/Sidebar';
import { Sidebar } from "components/organisms/Sidebar";
import { ReactElement } from "react";
import { Container, Content, InnerContent } from "./styles";
import { DefaultLayoutProps } from "./types";

export function DefaultLayout({
  children,
  title,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      {/* <Head title={title} /> */}
      <Container>
        <Sidebar />
        <Content as="main">
          <InnerContent as="section">{children}</InnerContent>
        </Content>
      </Container>
    </>
  );
}
