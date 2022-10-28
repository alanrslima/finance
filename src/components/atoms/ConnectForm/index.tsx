import { useFormContext } from 'react-hook-form';
import { ConnectFormProps } from './types';

export const ConnectForm = ({ children }: ConnectFormProps) => {
  const methods = useFormContext();

  return children({ ...methods });
};
