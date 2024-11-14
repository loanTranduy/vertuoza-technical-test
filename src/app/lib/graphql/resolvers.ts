import { Context } from '@/pages/api/graphql';
import { Entity } from '@prisma/client';

export const resolvers = {
  Entity: {
    __resolveType(entity: Entity) {
      if (entity.entityType === 'CONTACT') {
        return 'Contact';
      }
      if (entity.entityType === 'COMPANY') {
        return 'Company';
      }
      return null;
    },
  },
  Query: {
    getEntities: async (_parent: any, _args: any, context: Context) => {
      return context.prisma.entity.findMany();
    },
    getEntity: async (_parent: any, args: { id: string }, context: Context) => {
      return context.prisma.entity.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createEntity: () => {},
    updateEntity: () => {},
  },
};
