import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  },
});

export const ApiProvider = (props: PropsWithChildren) => (
  <QueryClientProvider client={queryClient} {...props} />
);
