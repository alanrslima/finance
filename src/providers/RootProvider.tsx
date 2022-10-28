import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { ContinueRefProvider } from 'contexts/ContinueRefContext';
import { RootProviderProps } from './types';

export function RootProvider({ children }: RootProviderProps): ReactElement {
  return (
    <ChakraProvider>
      <ContinueRefProvider>{children}</ContinueRefProvider>
    </ChakraProvider>
  );
}
