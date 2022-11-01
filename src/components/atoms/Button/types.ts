import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconName } from '../Icon/types';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  leftIcon?: IconName;
  schema?: 'primary' | 'secondary';
  isLoading?: boolean;
};
