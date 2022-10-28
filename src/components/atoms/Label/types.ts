import { ReactNode } from 'react';

export type LabelProps = {
  children: ReactNode;
  id?: string;
  htmlFor?: string;
  isInvalid?: boolean;
};
