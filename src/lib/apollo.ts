import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `https://api-sa-east-1.graphcms.com/v2/cl4os3n8p0t0e01xn4dbraxtl/master` ,
  cache: new InMemoryCache(),
})