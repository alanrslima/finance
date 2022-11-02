import { api } from 'services/api';

import { EditUserType } from 'types/user';
import { queryClient } from 'services/queryClient';
import { useMutation, UseMutationResult } from 'react-query';

export const editUserRequest = async (user: EditUserType): Promise<void> => {
  await api.put(`/users`, user);
};

export function useEditUser(): UseMutationResult<void> {
  return useMutation(
    ['user'],
    async (user: EditUserType) => {
      return editUserRequest(user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user'], { exact: false });
        queryClient.invalidateQueries(['profile'], { exact: false });
      },
    }
  );
}
