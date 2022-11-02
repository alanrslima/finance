import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getCookies } from 'cookies-next';
import { AUTHENTICATED_URL, AUTH_TOKEN_NAME } from 'config/constants';
import { getSession } from 'next-auth/react';
import { checkHasAllowedRoles } from 'lib/checkAuth';

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const session = await getSession(ctx);

    const { user } = session || {};
    if (!checkHasAllowedRoles(user?.roles)) {
      return fn(ctx);
    }

    if (session) {
      return {
        redirect: {
          destination: AUTHENTICATED_URL,
          permanent: false,
        },
      };
    }

    return fn(ctx);
  };
}
