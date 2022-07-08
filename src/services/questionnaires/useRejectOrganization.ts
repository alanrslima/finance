import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { OrganizationWithPending } from 'types/organization';
import { sortOrganizationsByStatus } from './sortOrganizations';
import { QuestionnaireKeys as Keys } from './stateKeys';

export const rejectOrganizationRequeast = async (id: number): Promise<void> => {
  await api.post(`/admin/organizations/${id}/reject`);
};

export function useRejectOrganization(id: number): UseMutationResult<void> {
  return useMutation(
    Keys.approve(id),
    async () => {
      return rejectOrganizationRequeast(id);
    },
    {
      retry: false,
      onSuccess: () => {
        queryClient.setQueryData(Keys.list(), (old: OrganizationWithPending[]): OrganizationWithPending[] => {
          const rejectedOrg = old?.find((org) => org.id === id);
          const rest = old?.filter((org) => org.id !== id);
          const newOrgList = [...rest, { ...rejectedOrg, pending: false, rejected_at: new Date() }];
          return sortOrganizationsByStatus(newOrgList);
        });
        queryClient.invalidateQueries(Keys.list());
      },
    }
  );
}
