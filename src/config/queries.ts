import { ONE_MINUTE_IN_MILLISECONDS, ONE_SECOND_IN_MILLISECONDS } from 'lib/timeVariables';

export const QUERY_RETRY_ATTEMPTS = 3;
export const DEFAULT_STALE_TIME = ONE_MINUTE_IN_MILLISECONDS;

export const commonReadConfig = {
  refetchInterval: false,
  refetchIntervalInBackground: false,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  staleTime: ONE_SECOND_IN_MILLISECONDS,
};
