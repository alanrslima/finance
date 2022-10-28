import { HTMLProps, ReactNode } from 'react';

export type GridItemProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
};
