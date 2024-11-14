'use client';
import {
  ApolloClient,
  ApolloProvider as AProvider,
  InMemoryCache,
} from '@apollo/client';
import { ReactNode } from 'react';

const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: `/api/graphql`,
    cache: new InMemoryCache(),
  });
  return <AProvider client={client}>{children}</AProvider>;
};

export default ApolloClientProvider;
