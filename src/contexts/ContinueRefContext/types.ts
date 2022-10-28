import { ReactNode } from 'react';

export type ContinueRefContextData = {
  continueRef: any;
  setContinueRef: (value: any) => void;
};

export type ContinueRefProviderProps = {
  children: ReactNode;
};
