import { ReactElement, useEffect, useState } from "react";
import {
  Body,
  CloseButton,
  Container,
  Content,
  Header,
  Overlay,
} from "./styles";

export function Drawer(): ReactElement {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Container
      size="md"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      //   finalFocusRef={btnRef}
    >
      <Overlay />
      <Content>
        <CloseButton />
        <Header>Nova transação</Header>
        <Body>
          <input type="text" />
        </Body>
      </Content>
    </Container>
  );
}
