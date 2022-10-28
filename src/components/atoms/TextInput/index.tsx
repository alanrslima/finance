import { forwardRef, ReactElement } from 'react';
import { ConnectForm } from '../ConnectForm';
import { Input } from './input.component';
import { Container } from './styles';
import { TextInputProps } from './types';

const comp = forwardRef<HTMLInputElement, TextInputProps>((props, ref): ReactElement => {
  const { name, list, type = 'text', isInvalid, controlled = true, disabled, ...inputProps } = props || {};

  return (
    <Container disabled={disabled} isInvalid={isInvalid}>
      <ConnectForm>
        {({ register }) => {
          const hasControl = controlled && register ? register(name) : undefined;
          return (
            <Input
              name={name}
              list={list}
              register={hasControl}
              type={type}
              disabled={disabled}
              {...inputProps}
              ref={ref}
            />
          );
        }}
      </ConnectForm>
    </Container>
  );
});

export const TextInput = comp;
