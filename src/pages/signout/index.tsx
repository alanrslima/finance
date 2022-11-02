import { ReactElement, useEffect } from 'react';
import { signOut as NextAuthSignOut } from 'next-auth/react';

import { useRouter } from 'next/router';
import { useSignOut } from 'services/auth/useSignOut';
import { clearAuthCookies } from 'services/auth/authCookies';
import { queryClient } from 'services/queryClient';
// import { SignOut } from 'template/signout';
import { withSSRAuth } from 'hoc/withSSRAuth';

export default function SignOutPage(): ReactElement {
  const router = useRouter();
  const signOut = useSignOut();

  const fetchSignOut = async () => {
    signOut.mutateAsync();
    await NextAuthSignOut({ redirect: false });
    clearAuthCookies(null);
    queryClient.clear();
    router.push('/login');
  };

  useEffect(() => {
    fetchSignOut();
  }, []);

  return <></>;

  // return <SignOut />;
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
