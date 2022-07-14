import { Context } from 'apollo-server-core';
import { GraphQLFieldResolver } from 'graphql';

export type Resolver = GraphQLFieldResolver<never, Context>;
