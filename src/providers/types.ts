import { Session } from 'next-auth';
import { ReactNode } from 'react';

export type RootProviderProps = {
  children: ReactNode;
  session: Session;
};
