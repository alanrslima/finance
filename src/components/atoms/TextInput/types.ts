import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  name: string;
  controlled?: boolean;
  list?: string;
  type?: 'email' | 'text' | 'number' | 'password';
  placeholder?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  secureTextEntry?: boolean;
};

export type InputProps = Omit<TextInputProps, 'controlled'> & {
  register?: UseFormRegisterReturn;
};
