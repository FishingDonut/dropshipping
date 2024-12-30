import { Prisma } from '@prisma/client';
import { prisma } from './PristmaClientService';

export default async function CreateUsersService(data: Prisma.UsersCreateInput) {
  try {
    const loginUser: Prisma.UsersCreateInput | null = await prisma.users.findUnique({
      where: {
        email: data.email
      }
    });

    if (loginUser) {
      throw "user already exists";
    }
    
    const newUser = await prisma.users.create({
      data: data
    });
    return newUser;
  } catch (error) {
    throw error;
  }
}
