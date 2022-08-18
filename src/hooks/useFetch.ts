import { QueryKey, useQuery, UseQueryResult } from 'react-query';
import { fetcher } from 'services/fetcher';

export type UseFetchProps = {
  key: string | QueryKey;
  url: string;
  params?: any;
  config?: any;
  context?: any;
  processor?: (data: any) => any;
};

export type UseFetchHooks = Omit<UseFetchProps, 'key' | 'url'>;

export const useFetch = <T>({
  key,
  url,
  params,
  config,
  context,
  processor,
}: UseFetchProps): UseQueryResult<T, Error> => {
  return useQuery(key, () => fetcher({ url, params, context, processor }), {
    ...config,
  });
};
