import { GraphQLFieldResolver } from 'graphql';
import { Context } from '../graphql';
import { Book, CreateBookInput } from '../model';

export const createBook: GraphQLFieldResolver<never, Context, { book: CreateBookInput }, Book> = (
  _parent,
  { book },
  { dataSources: { books } },
) => {
  return books.createBook(book);
};
