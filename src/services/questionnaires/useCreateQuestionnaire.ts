import { sorter } from 'lib/sorter';
// import { format } from 'date-fns';
import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { QuestionnaireKeys as Keys } from './stateKeys';

export const createQuestionnaireRequest = async (data) => {
  await api.post(`/admin/questionnaires/`, data);
  return data;
};

export function useCreateQuestionnaire(): UseMutationResult<any> {
  return useMutation(
    async (data) => {
      return createQuestionnaireRequest(data);
    },
    {
      retry: false,
      onSuccess: (data) => {
        queryClient.setQueryData(Keys.list(), (old: any[]): any[] => {
          const newQuestionnaire: any = {
            name: data?.name,
            description: data?.description,
            organization_id: data?.organization_id,
            organization: null,
            localeNames: null,
            steps: [],
            // created_at: format(new Date(), 'd/M/y'),
          };
          const newQuestionnaireList = [...(old || []), { ...newQuestionnaire }];

          return sorter({ list: newQuestionnaireList, field: 'name' });
        });
        queryClient.invalidateQueries(Keys.all);
      },
    }
  );
}
