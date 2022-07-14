import { ApolloServer } from 'apollo-server';
import { BOOKS } from './data';

const resolvers = {
  Query: {
    books: () => {
      return BOOKS;
    },
    book: (_parent, args, _context, _info) => {
      return BOOKS.find((x) => x.id === args.id);
    },
  },
};

const server = new ApolloServer({ typeDefs: 'schema.graphql', resolvers });

server
  .listen({ port: 9000 })
  .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));
