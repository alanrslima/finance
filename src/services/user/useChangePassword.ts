import { api } from 'services/api';

import { queryClient } from 'services/queryClient';
import { useMutation, UseMutationResult } from 'react-query';

type EditPasswordType = {
  old_password: string;
  password: string;
};

export const changePasswordRequest = async (password: EditPasswordType): Promise<void> => {
  await api.put('/users/password', password);
};

export function useChangePassword(): UseMutationResult<void> {
  return useMutation(
    ['password'],
    async (password: EditPasswordType) => {
      return changePasswordRequest(password);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['password'], { exact: false });
      },
    }
  );
}
