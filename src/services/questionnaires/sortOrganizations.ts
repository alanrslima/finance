import { sorter } from 'lib/sorter';
import { Organization, OrganizationWithPending } from 'types/organization';

export const sortOrganizationsByStatus = (
  data: Organization[] | OrganizationWithPending[]
): OrganizationWithPending[] => {
  const orgList = data.map((org) => {
    return { ...org, pending: !org.approved_at && !org.rejected_at };
  });

  const pending = orgList.filter((org) => !org.approved_at && !org.rejected_at);
  const approved = orgList.filter((org) => Boolean(org.approved_at));
  const rejected = orgList.filter((org) => Boolean(org.rejected_at));

  return [
    ...sorter<OrganizationWithPending>({ list: pending, field: 'created_at' }),
    ...sorter<OrganizationWithPending>({ list: approved, field: 'name' }),
    ...sorter<OrganizationWithPending>({ list: rejected, field: 'name' }),
  ];
};
