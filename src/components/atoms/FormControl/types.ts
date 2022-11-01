import { ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type FormControlProps = {
  children: ReactNode;
  name?: string;
  label?: string | JSX.Element;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  actionButton?: { label: string; onClick: () => void };
};
