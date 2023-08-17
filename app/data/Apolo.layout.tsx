'use client'

import { ReactNode } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const createApolloClient = () => {
  const link = new HttpLink({
    uri: "/api/graphql",
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

const ApolloProviderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={createApolloClient()}>
      {children}
    </ApolloProvider>

  );
}

export default ApolloProviderLayout;