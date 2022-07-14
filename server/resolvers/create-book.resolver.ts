import { GraphQLFieldResolver } from 'graphql';
import { Context } from '../graphql';
import { Book, CreateBookInput } from '../model';

export const createBook: GraphQLFieldResolver<
  never,
  Context,
  { id: string; book: CreateBookInput },
  Book
> = (_parent, { id, book }, { dataSources: { books } }) => {
  return books.createBook(id, book);
};
