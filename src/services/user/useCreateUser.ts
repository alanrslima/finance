import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { UserProps } from 'types/user';
import { QuestionnaireKeys as Keys } from './stateKeys';

export const createUserRequest = async (data: Partial<UserProps>) => {
  return await api.post(`v1/users/`, data);
};

export function useCreateUser(): UseMutationResult<any> {
  return useMutation(async (data: Partial<UserProps>) => createUserRequest(data), {
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries(Keys.all);
    },
  });
}
