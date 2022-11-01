import { Children, cloneElement, ReactElement, useEffect, useState } from 'react';
import { Label } from '../Label';
import { getHash } from 'lib/hash';
import { FormControlProps } from './types';
import { ActionButton, Container, Error, LabelWrapper, WrapperLabel } from './styles';

export function FormControl({ children, label, name, error, actionButton }: FormControlProps): ReactElement {
  const [labelId, setLabelId] = useState<string>();
  const [inputId, setInputId] = useState<string>();

  useEffect(() => {
    setLabelId(`name-${getHash(6)}`);
    setInputId(`input-${getHash(6)}`);
  }, [name]);

  return (
    <Container>
      <>
        <WrapperLabel>
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

          {actionButton && (
            <ActionButton type="button" onClick={actionButton.onClick}>
              {actionButton.label}
            </ActionButton>
          )}
        </WrapperLabel>

        {Children.map(children, (child: JSX.Element) => {
          return cloneElement(child, { isInvalid: Boolean(error), id: inputId });
        })}

        {error && <Error>{error}</Error>}
      </>
    </Container>
  );
}
