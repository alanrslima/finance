import { UseFormReturn } from 'react-hook-form';

export type ConnectFormProps = {
  children: (methods: UseFormReturn) => JSX.Element;
};
