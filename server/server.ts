import { ApolloServer } from 'apollo-server';
import { BooksDataSource } from './data-source';
import { Context } from './graphql';
import { typeDefs } from './typedefs';

const resolvers = {
  Query: {
    books: (_parent, _args, { dataSources: { books } }: Context) => {
      return books.getBooks();
    },
    book: (_parent, { id }, { dataSources: { books } }: Context, _info) => {
      return books.getBookById(id);
    },
  },
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
