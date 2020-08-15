import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
})

client
  .query({
    query: gql`
      query GetRates {
        books {
          title
        }
      }
    `
  })
  .then(result => console.log(result));

export default client;