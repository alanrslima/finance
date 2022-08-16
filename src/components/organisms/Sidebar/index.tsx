import { Menu } from "components/organisms/Menu";
import { ReactElement } from "react";
import NextLink from "next/link";
import { Container, LogoWrapper } from "./styles";
import { Logo } from "components/atoms/Logo";

export function Sidebar(): ReactElement {
  const arias = {};

  return (
    <Container as="aside">
      <NextLink href="/" passHref>
        <LogoWrapper>
          <Logo
          // width={180}
          // height={50}
          // color="$gray500"
          />
        </LogoWrapper>
      </NextLink>
      <Menu />
    </Container>
  );
}
