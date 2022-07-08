import { DEFAULT_STALE_TIME, QUERY_RETRY_ATTEMPTS } from 'config/queries';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: QUERY_RETRY_ATTEMPTS,
      staleTime: DEFAULT_STALE_TIME,
    },
  },
});
