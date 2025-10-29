import { Prisma } from '@prisma/client';

// тип объекта, который возвращает prisma.user.create(...)
export type UserCreateParam = Prisma.UserGetPayload<Prisma.UserCreateArgs>;
