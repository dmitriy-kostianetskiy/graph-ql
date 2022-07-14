import { ApolloServer } from 'apollo-server';
import { BooksDataSource } from './data-source';
import { Query, Mutation } from './resolvers';
import { typeDefs } from './typedefs';

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    books: new BooksDataSource(),
  }),
});

server
  .listen({ port: 9000 })
  .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));
