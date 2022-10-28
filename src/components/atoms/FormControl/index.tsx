import { Children, cloneElement, ReactElement, useEffect, useMemo, useState } from 'react';
import { Label } from '../Label';
import { getHash } from 'lib/hash';
import { FormControlProps } from './types';
import { Container, Error, LabelWrapper } from './styles';

export function FormControl({ children, label, name, error }: FormControlProps): ReactElement {
  const [labelId, setLabelId] = useState<string>();
  const [inputId, setInputId] = useState<string>();

  useEffect(() => {
    setLabelId(`name-${getHash(6)}`);
    setInputId(`input-${getHash(6)}`);
  }, [name]);

  return (
    <Container>
      <>
        {label && typeof label === 'string' && (
          <LabelWrapper>
            <Label id={String(labelId)} htmlFor={inputId} isInvalid={Boolean(error)}>
              {label}
            </Label>
          </LabelWrapper>
        )}
        {label && typeof label !== 'string' && (
          <LabelWrapper>
            {cloneElement(label, { htmlFor: inputId, id: String(labelId), isInvalid: Boolean(error) })}
          </LabelWrapper>
        )}

        {Children.map(children, (child: JSX.Element) => {
          return cloneElement(child, { isInvalid: Boolean(error), id: inputId });
        })}

        {error && <Error>{error}</Error>}
      </>
    </Container>
  );
}
