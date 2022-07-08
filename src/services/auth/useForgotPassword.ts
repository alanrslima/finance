import { api } from 'services/api';
import { useMutation, UseMutationResult } from 'react-query';

type SendResetPasswordLinkProps = {
  email: string;
};

export const sendResetPasswordLinkRequest = async ({ email }: SendResetPasswordLinkProps): Promise<void> => {
  await api.post('/password/forgot', { email });
};

export function useSendResetPasswordLink(): UseMutationResult<void> {
  return useMutation(['password'], async ({ email }: SendResetPasswordLinkProps) => {
    return sendResetPasswordLinkRequest({ email });
  });
}
