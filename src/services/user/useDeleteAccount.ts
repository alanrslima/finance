import { api } from 'services/api';

import { queryClient } from 'services/queryClient';
import { useMutation, UseMutationResult } from 'react-query';

export const deleteAccountRequest = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`);
};

export function useDeleteAccount(): UseMutationResult<void> {
  return useMutation(
    ['user', 'profile'],
    async (id: number) => {
      return deleteAccountRequest(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user'], { exact: false });
        queryClient.invalidateQueries(['profile'], { exact: false });
      },
    }
  );
}
