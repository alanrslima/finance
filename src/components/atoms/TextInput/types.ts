import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  name: string;
  controlled?: boolean;
  list?: string;
  type?: 'email' | 'text' | 'number';
  placeholder?: string;
  disabled?: boolean;
  isInvalid?: boolean;
};

export type InputProps = Omit<TextInputProps, 'controlled'> & {
  register?: UseFormRegisterReturn;
};
