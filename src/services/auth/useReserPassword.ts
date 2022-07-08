import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';

export type ResetPasswordProps = {
  email: string;
  password: string;
  token?: string;
};

export const resetPasswordRequest = async ({ email, password, token }: ResetPasswordProps): Promise<void> => {
  await api.post('/password/reset', { email, password, token });
};

export function useResetPassword(): UseMutationResult<void> {
  return useMutation(['password'], async ({ email, password, token }: ResetPasswordProps) => {
    return resetPasswordRequest({ email, password, token });
  });
}
