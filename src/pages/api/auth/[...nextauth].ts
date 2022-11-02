import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createApi } from 'services/api';
import { AUTH_CALLBACK_URL, AUTH_CSRF_TOKEN, AUTH_SECRET, AUTH_TOKEN_NAME } from 'config/constants';
import { ONE_DAY_IN_SECONDS } from 'lib/timeVariables';
import { cookiesConfig } from 'config/cookies';

const api = createApi();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password' },
      },
      async authorize(fields) {
        try {
          const { data } = await api.post('v1/auth/login', {
            email: fields?.email,
            password: fields?.password,
          });
          return data.data;
        } catch (err) {
          throw new Error(err?.response?.data?.message || 'Invalid Credentials');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: ONE_DAY_IN_SECONDS,
  },
  jwt: {
    secret: AUTH_SECRET,
  },
  pages: {
    signIn: '/login',
    signOut: '/signout',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      return { ...session, ...token };
    },
  },
  cookies: {
    sessionToken: {
      name: AUTH_TOKEN_NAME,
      options: {
        ...cookiesConfig,
      },
    },
    callbackUrl: {
      name: AUTH_CALLBACK_URL,
      options: {
        ...cookiesConfig,
      },
    },
    csrfToken: {
      name: AUTH_CSRF_TOKEN,
      options: {
        ...cookiesConfig,
      },
    },
  },
});
