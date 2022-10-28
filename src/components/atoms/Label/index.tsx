import { ReactElement } from 'react';
import { LabelProps } from './types';
import { Container } from './styles';

export function Label({ id, children, htmlFor, isInvalid }: LabelProps): ReactElement {
  const arias = {
    'aria-invalid': isInvalid,
  };

  return (
    <Container id={id} as="label" htmlFor={htmlFor} isInvalid={isInvalid} {...arias}>
      {children}
    </Container>
  );
}
