import { sorter } from 'lib/sorter';
import { format } from 'date-fns';
import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { QuestionnaireParams } from 'types/questionnaires/questionnairesParams';
import { updateQuestionnaireParams } from 'types/questionnaires/updateQuestionnaireParams';
import { QuestionnaireKeys as Keys } from './stateKeys';

type useUpdateQuestionnaireProps = {
  id: number;
  data: updateQuestionnaireParams;
};

export const updateQuestionnaireRequest = async (
  id: number,
  data: updateQuestionnaireParams
): Promise<updateQuestionnaireParams> => {
  await api.put(`/admin/questionnaires/${id}`, data);
  return data;
};

export function useUpdateQuestionnaire(): UseMutationResult<updateQuestionnaireParams> {
  return useMutation(
    async ({ id, data }: useUpdateQuestionnaireProps) => {
      return updateQuestionnaireRequest(id, data);
    },
    {
      retry: false,
      onSuccess: (data) => {
        queryClient.setQueryData(Keys.list(), (old: QuestionnaireParams[]): QuestionnaireParams[] => {
          const rest = old?.filter((org) => org.id !== data?.id);
          const newQuestionnaire: QuestionnaireParams = {
            name: data?.name,
            description: data?.description,
            organization_id: data?.organization_id,
            organization: null,
            localeNames: null,
            steps: [],
            created_at: format(new Date(), 'd/M/y'),
          };
          const newQuestionnaireList = [...(rest || []), { ...newQuestionnaire }];

          return sorter({ list: newQuestionnaireList, field: 'name' });
        });
        queryClient.invalidateQueries(Keys.all);
      },
    }
  );
}
