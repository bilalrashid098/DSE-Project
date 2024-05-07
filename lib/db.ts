import { PrismaClient as AdminPrisma } from '@prisma/client';

export const adminDB = new AdminPrisma(
  {
    datasources: {
      db: {
        url: `${process.env.DATABASE_URL}dse?retryWrites=true&w=majority`,
      },
    },
  }
);
