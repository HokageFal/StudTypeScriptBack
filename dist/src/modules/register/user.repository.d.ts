import { PrismaService } from '../../prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserByEmail(email: string): Promise<User | null>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(email: string, data: Prisma.UserUpdateInput): Promise<User>;
}
