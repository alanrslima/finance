import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getSession } from 'next-auth/react';
import { UNAUTHENTICATED_URL } from 'config/constants';
// import { AuthTokenError } from 'exceptions/AuthTokenError';
// import { checkHasAllowedRoles } from 'lib/checkAuth';
import { Session } from 'next-auth';
import { clearAuthCookies } from '../services/auth/authCookies';

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const session: Session = await getSession(ctx);

    console.log('session hoc', session);

    const sendToLogin = () => {
      return {
        redirect: {
          destination: UNAUTHENTICATED_URL || '/login',
          permanent: false,
        },
      };
    };

    if (!session) {
      return sendToLogin();
    }

    // const { user } = session || {};
    // if (!checkHasAllowedRoles(user?.roles)) {
    //   return sendToLogin();
    // }

    try {
      return fn(ctx);
    } catch (error) {
      // if (error instanceof AuthTokenError) {
      //   clearAuthCookies(ctx);
      //   return {
      //     redirect: {
      //       destination: UNAUTHENTICATED_URL,
      //       permanent: false,
      //     },
      //   };
      // }
    }

    return fn(ctx);
  };
}
