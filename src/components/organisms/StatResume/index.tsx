import { ReactElement } from "react";
import { Container } from "./styles";
import { Stat } from "components/molecules/Stat";

export function StatResume(): ReactElement {
  return (
    <Container>
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </Container>
  );
}
