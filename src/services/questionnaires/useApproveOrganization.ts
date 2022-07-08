import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { OrganizationWithPending } from 'types/organization';
import { sortOrganizationsByStatus } from './sortOrganizations';
import { QuestionnaireKeys as Keys } from './stateKeys';

export const approveOrganizationRequeast = async (id: number): Promise<void> => {
  await api.post(`/admin/organizations/${id}/approve`);
};

export function useApproveOrganization(id: number): UseMutationResult<void> {
  return useMutation(
    Keys.approve(id),
    async () => {
      return approveOrganizationRequeast(id);
    },
    {
      retry: false,
      onSuccess: () => {
        queryClient.setQueryData(Keys.list(), (old: OrganizationWithPending[]): OrganizationWithPending[] => {
          const approvedOrg = old?.find((org) => org.id === id);
          const rest = old?.filter((org) => org.id !== id);
          const newOrgList = [...(rest || []), { ...approvedOrg, pending: false, approved_at: new Date() }];
          return sortOrganizationsByStatus(newOrgList);
        });
        queryClient.invalidateQueries(Keys.list());
      },
    }
  );
}
