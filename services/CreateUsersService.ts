import { Prisma } from '@prisma/client';
import { prisma } from './PristmaClientService';

export default async function CreateUsersService(data: Prisma.UsersCreateInput) {
  try {
    const newUser = await prisma.users.create({
      data: data
    });
    return newUser;
  } catch (error) {
    throw error;
  }
}
