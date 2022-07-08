import { useFetch, UseFetchHooks } from 'hooks/useFetch';
import { QuestionnaireParams } from 'types/questionnaires/questionnairesParams';
import { QuestionnaireKeys as Keys } from './stateKeys';

const processor = (data: QuestionnaireParams): QuestionnaireParams => {
  return {
    ...data,
    localeNames: data?.locales.map((locale) => locale.name).join(', '),
    steps:
      data?.steps?.map((step, index) => {
        return {
          order: index + 1,
          ...step,
        };
      }) || [],
  };
};

export const useReadQuestionnaire = (props?: UseFetchHooks) => {
  const { context, params, config } = props || {};
  return useFetch<QuestionnaireParams>({
    key: Keys.detail(params?.id),
    url: 'admin/questionnaires/:id',
    params,
    config,
    context,
    processor,
  });
};
