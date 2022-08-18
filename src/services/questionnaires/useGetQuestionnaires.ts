import { useFetch, UseFetchHooks } from 'hooks/useFetch';
import { sorter } from 'lib/sorter';
import { Questionnaire } from 'types/questionnaire';
import { QuestionnaireKeys as Keys } from './stateKeys';

const processor = (data: Questionnaire[]) => {
  // const orderedList = sorter({ list: data, field: 'name' });
  // return orderedList.map((questionnaire) => {
  //   return {
  //     ...questionnaire,
  //     localeNames: questionnaire?.locales.map((locale) => locale.name).join(', '),
  //     localeIds: questionnaire?.locales.map((locale) => locale.id).join(', '),
  //     steps:
  //       questionnaire?.steps?.map((step, index) => {
  //         return {
  //           order: index + 1,
  //           ...step,
  //         };
  //       }) || [],
  //   };
  // });
};

export const useGetQuestionnaires = (props?: UseFetchHooks) => {
  const { context, params } = props || {};
  return useFetch<Questionnaire[]>({
    key: Keys.list(),
    url: 'admin/questionnaires',
    params,
    context,
    processor,
  });
};
