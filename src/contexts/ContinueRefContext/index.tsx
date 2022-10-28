import { useContext, createContext, ReactElement, useState, useMemo } from 'react';
import { ContinueRefContextData, ContinueRefProviderProps } from './types';

export const ContinueRefContext = createContext({} as ContinueRefContextData);

export function ContinueRefProvider({ children }: ContinueRefProviderProps): ReactElement {
  const [continueRef, setContinueRef] = useState();

  const values = useMemo(() => {
    return {
      continueRef,
      setContinueRef,
    };
  }, [continueRef, setContinueRef]);

  return <ContinueRefContext.Provider value={values}>{children}</ContinueRefContext.Provider>;
}

export function useContinueRef(): ContinueRefContextData {
  const context = useContext(ContinueRefContext);

  if (!context) {
    throw new Error('useContinueRef must be used within an ContinueRefProvider');
  }

  return context;
}
