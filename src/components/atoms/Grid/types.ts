import { ReactNode } from 'react';

export type GridProps = {
  children: ReactNode;
  columns?: number;
  rows?: number;
  gap?: string;
};
