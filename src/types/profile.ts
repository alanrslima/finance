import { UserProps } from './user';

export type ProfileProps = {
  user?: UserProps;
  permissions: string[];
  roles: string[];
};
