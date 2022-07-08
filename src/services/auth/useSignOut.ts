import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';

import { queryClient } from 'services/queryClient';

export const signOutRequest = async (): Promise<void> => {
  await api.post('/auth/signout');
  queryClient.invalidateQueries('user', { exact: false });
  queryClient.invalidateQueries('profile', { exact: false });
};

export function useSignOut(): UseMutationResult<void, unknown, void> {
  return useMutation(
    ['user'],
    async () => {
      return signOutRequest();
    },
    {
      retry: false,
    }
  );
}
