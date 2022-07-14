import { GraphQLFieldResolver } from 'graphql';
import { Context } from '../graphql';
import { Book } from '../model';

export const bookById: GraphQLFieldResolver<never, Context, { id: string }, Book | undefined> = (
  _parent,
  { id },
  { dataSources: { books } },
) => {
  return books.getBookById(id);
};
