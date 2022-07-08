import { ReactNode } from 'react';

export type MenuItemProps = {
  children: ReactNode;
  active?: boolean;
  icon: ReactNode;
  url: string;
  exact?: boolean;
};
