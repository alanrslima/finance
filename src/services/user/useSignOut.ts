import { useState } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { api } from '../api';
import { clearAuthCookies } from '../auth/authCookies';

type Props = {
  signOut: UseMutationResult<void, unknown, void>;
  isSigningOut: boolean;
};

export function useSignOut(): Props {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const signOut = useMutation(
    async () => {
      setIsSigningOut(true);

      await api.post('/auth/signout');

      clearAuthCookies();
    },
    {
      onSettled: () => {
        setIsSigningOut(false);
      },
    }
  );

  return { signOut, isSigningOut };
}
