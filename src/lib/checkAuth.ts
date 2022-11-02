import { ALLOWED_ROLES } from 'config/constants';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

export async function checkAuth(request: any): Promise<Session> {
  const cookie = request?.headers.get('cookie');

  const session = cookie ? await getSession({ req: { headers: { cookie } } as any }) : null;

  return session;
}

export function checkHasAllowedRoles(userRoles: string[]): boolean {
  let allowed = false;

  userRoles?.forEach((role: string) => {
    if (ALLOWED_ROLES.includes(role)) {
      allowed = true;
    }
  });

  return allowed;
}
