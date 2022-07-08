// COOKIES
export const COOKIES_DOMAIN = process.env.NEXT_PUBLIC_COOKIES_DOMAIN;
export const COOKIE_BASE_NAME = process.env.NEXT_PUBLIC_COOKIE_BASE_NAME || '_m';

// AUTHENTICATION
export const AUTH_SECRET = process.env.NEXTAUTH_SECRET;
export const AUTH_TOKEN_NAME = `${COOKIE_BASE_NAME}.token`;
export const AUTH_REFRESH_TOKEN_NAME = `${COOKIE_BASE_NAME}.refreshToken`;
export const AUTH_CALLBACK_URL = `${COOKIE_BASE_NAME}.callback-url`;
export const AUTH_CSRF_TOKEN = `${COOKIE_BASE_NAME}.csrf-token`;
export const DEV_ROLE = 'dev';
export const ADMIN_ROLE = 'admin';
export const ALLOWED_ROLES = [DEV_ROLE, ADMIN_ROLE];

// CODES
export const ERROR_CODE_TOKEN_EXPIRED = 'token.expired';
export const ERROR_CODE_CSRF_INVALID = 'csrf.tokenMismatch';

// URLS
export const UNAUTHENTICATED_URL = process?.env?.UNAUTHENTICATED_URL;
export const AUTHENTICATED_URL = process?.env?.AUTHENTICATED_URL;
