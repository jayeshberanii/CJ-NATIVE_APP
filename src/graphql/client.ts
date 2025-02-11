import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// GraphQL API Endpoint
const httpLink = createHttpLink({
  uri: 'https://ads.api.cj.com/query', // Replace with your API URL
});

// Middleware to attach Auth Token
const authLink = setContext(async (_, { headers }) => {
  const token = process.env.EXPO_PUBLIC_CJ_AUTH_TOKEN; // Retrieve token from storage
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create Apollo Client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
