export const QuestionnaireKeys = {
  all: ['questionnaires'] as const,
  list: () => [...QuestionnaireKeys.all, 'list'] as const,
  detail: (id: number) => [...QuestionnaireKeys.all, 'detail', id] as const,
  approve: (id: number) => [...QuestionnaireKeys.all, 'approve', id] as const,
  reject: (id: number) => [...QuestionnaireKeys.all, 'reject', id] as const,
};
