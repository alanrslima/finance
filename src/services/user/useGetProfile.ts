import { useQuery, UseQueryResult } from 'react-query';
import { ONE_MINUTE_IN_MILLISECONDS } from 'lib/timeVariables';
import { StatusCodes } from 'http-status-codes';
import { api } from '../api';
import { ProfileProps } from 'types/profile';

export const getUserRequest = async (): Promise<ProfileProps> => {
  try {
    const { data } = await api.get('/me/profile');
    return data;
  } catch (err) {
    if (StatusCodes.UNAUTHORIZED !== err?.response?.status) {
      throw err;
    }
  }
  return null;
};

export function useGetProfile(): UseQueryResult<ProfileProps> {
  return useQuery('profile', getUserRequest, {
    retry: 3,
    staleTime: ONE_MINUTE_IN_MILLISECONDS * 10,
  });
}
