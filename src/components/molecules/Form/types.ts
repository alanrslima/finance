import { UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

export type FormProps = {
  children: (methods: UseFormReturn) => JSX.Element;
  handleSubmit?: (data: { [key: string]: any }, methods?: UseFormReturn) => Promise<void> | void;
  schema?: yup.AnyObjectSchema;
  defaultValues?: { [key: string]: any };
  disabled?: boolean;
  isLoading?: boolean;
  devTools?: boolean;
};
