import { COOKIES_DOMAIN } from 'config/constants';

type CookieConfigProps = {
  sameSite: 'lax';
  path: string;
  safe: boolean;
  domain: string;
  httpOnly: boolean;
};

export const cookiesConfig: CookieConfigProps = {
  sameSite: 'lax',
  path: '/',
  domain: COOKIES_DOMAIN,
  safe: true,
  httpOnly: true,
};
