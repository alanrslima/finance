import { removeCookies, setCookies } from 'cookies-next';
import { AUTH_REFRESH_TOKEN_NAME, AUTH_TOKEN_NAME } from 'config/constants';
import { FIFTEEN_MINUTES_IN_SECONDS, FIVE_DAYS_IN_SECONDS } from 'lib/timeVariables';
import { cookiesConfig } from 'config/cookies';
import { GetServerSidePropsContext } from 'next';

export function clearAuthCookies(ctx?: GetServerSidePropsContext): void {
  removeCookies(AUTH_TOKEN_NAME, { ...(ctx || {}), ...cookiesConfig });
  removeCookies(AUTH_REFRESH_TOKEN_NAME, { ...(ctx || {}), ...cookiesConfig });
}

export function setAuthCookies(token: string, refreshToken: string, ctx = undefined): void {
  setCookies(AUTH_TOKEN_NAME, token, {
    ...(ctx || {}),
    ...cookiesConfig,
    maxAge: FIFTEEN_MINUTES_IN_SECONDS,
  });

  setCookies(AUTH_REFRESH_TOKEN_NAME, refreshToken, {
    ...(ctx || {}),
    ...cookiesConfig,
    maxAge: FIVE_DAYS_IN_SECONDS,
  });
}
