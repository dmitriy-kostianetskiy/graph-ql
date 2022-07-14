import { GraphQLFieldResolver } from 'graphql';
import { Context } from '../graphql';
import { Book } from '../model';

export const books: GraphQLFieldResolver<never, Context, never, Book[]> = (
  _parent,
  _args,
  { dataSources: { books } },
) => {
  return books.getBooks();
};
