import { ReactElement } from 'react';
import { GridItemProps } from './types';
import { Container } from './styles';

export function GridItem({ children, ...props }: GridItemProps): ReactElement {
  return <Container {...props}>{children}</Container>;
}
