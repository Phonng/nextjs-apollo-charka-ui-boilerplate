import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com", //change the URL of your GraphQL server here
  cache: new InMemoryCache(), //use to cache query result after fetching them
});

export default client;
