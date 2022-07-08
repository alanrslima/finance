import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { Organization } from 'types/organization';
import { sortOrganizationsByStatus } from './sortOrganizations';
import { QuestionnaireKeys as Keys } from './stateKeys';

type UpdateOrganizationProps = {
  id: number;
  data: Organization;
};

export const updateOrganizationRequeast = async (id: number, data: Organization): Promise<Organization> => {
  await api.put(`/admin/organizations/${id}`, data);
  return data;
};

export function useUpdateOrganization(): UseMutationResult<Organization> {
  return useMutation(
    async ({ id, data }: UpdateOrganizationProps) => {
      return updateOrganizationRequeast(id, data);
    },
    {
      retry: false,
      onSuccess: (data) => {
        queryClient.setQueryData(Keys.list(), (old: Organization[]): Organization[] => {
          const rest = old?.filter((org) => org.id !== data.id);
          const newOrgList = [...(rest || []), { ...data }];
          return sortOrganizationsByStatus(newOrgList);
        });
        queryClient.invalidateQueries(Keys.all);
      },
    }
  );
}
