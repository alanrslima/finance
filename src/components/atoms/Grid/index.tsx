import { ReactElement } from 'react';
import { GridProps } from './types';
import { Container } from './styles';

export function Grid({ children, columns, rows, gap = '$6' }: GridProps): ReactElement {
  return (
    <Container templateColumns={`repeat(${columns}, 1fr)`} templateRows={`repeat(${rows}, 1fr)`} css={{ gridGap: gap }}>
      {children}
    </Container>
  );
}
