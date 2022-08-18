import { ReactElement, memo } from "react";
import { Container } from "./styles";
import { SpacerProps } from "./types";

export const Spacer = memo(
  ({ children, ...props }: SpacerProps): ReactElement => {
    return <Container css={{ ...props }}>{children}</Container>;
  }
);

Spacer.displayName = "Spacer";
