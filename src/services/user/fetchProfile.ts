import { api } from '../api';
import { Profile } from '../../types/profile';

export const fetchProfile = async (): Promise<Profile> => {
  const { data } = await api.get(`/me/profile`);

  return data;
};
