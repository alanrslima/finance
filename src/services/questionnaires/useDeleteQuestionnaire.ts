import { sorter } from 'lib/sorter';
import { useMutation, UseMutationResult } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { Questionnaire } from 'types/questionnaire';
import { QuestionnaireKeys as Keys } from './stateKeys';

export const DeleteQuestionnaireRequest = async (id: number): Promise<number> => {
  await api.delete(`/admin/questionnaires/${id}`);
  return id;
};

export function useDeleteQuestionnaire(): UseMutationResult<number> {
  return useMutation(
    async (id: number) => {
      return DeleteQuestionnaireRequest(id);
    },
    {
      retry: false,
      onSuccess: (id: number) => {
        queryClient.setQueryData(Keys.list(), (old: Questionnaire[]): Questionnaire[] => {
          const rest = old?.filter((questionnaire) => questionnaire.id !== id);
          return sorter({ list: rest, field: 'name' });
        });
        queryClient.invalidateQueries(Keys.all);
      },
    }
  );
}
