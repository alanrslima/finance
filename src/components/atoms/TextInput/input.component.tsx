import { forwardRef, ReactElement } from 'react';
import { InputProps } from './types';

const comp = forwardRef<HTMLInputElement, InputProps>((props, ref): ReactElement => {
  const { name, id, register, list, type, ...inputProps } = props || {};
  return (
    <input list={list || null} id={id ?? `txt_${name}`} type={type} {...(register ?? { ref, name })} {...inputProps} />
  );
});

comp.displayName = 'Input';
export const Input = comp;
