import { pathToUrl } from 'lib/router';
import { setupApiClient } from './api';

export type FetcherProps = {
  url: string;
  params?: object;
  context?: any;
  processor?: (data: any) => any;
};

export const fetcher = async ({ url, params, context, processor }: FetcherProps) => {
  const api = setupApiClient(context);
  const { data } = await api.get(pathToUrl(url, params));

  if (processor) {
    return processor(data);
  }
  return data;
};
