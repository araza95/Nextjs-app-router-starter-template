'use client';

// React Query Imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// React Imports
import { FC, ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

interface IReactQueryProviderProps {
  children: ReactNode;
}
const ReactQueryProvider: FC<IReactQueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <>
      <ReactQueryDevtools
        initialIsOpen={false}
        client={queryClient}
      />
      {children}
    </>
  </QueryClientProvider>
);

export default ReactQueryProvider;
