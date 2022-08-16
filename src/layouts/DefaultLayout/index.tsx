// import { Head } r } from 'components/Sidebar';
import { Head } from "components/atoms/Head";
import { Sidebar } from "components/organisms/Sidebar";
import { Topbar } from "components/organisms/Topbar";
import { ReactElement } from "react";
import { Container, Content, InnerContent, Wrapper } from "./styles";
import { DefaultLayoutProps } from "./types";

export function DefaultLayout({
  children,
  title,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      <Head title={title} />
      <Wrapper>
        <Container>
          <Sidebar />

          <Content as="main">
            <Topbar />
            {/* <InnerContent as="section">{children}</InnerContent> */}
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}
