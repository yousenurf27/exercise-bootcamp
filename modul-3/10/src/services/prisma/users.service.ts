import InvariantError from '../../exceptions/InvariantError';
import prisma from '../../prisma';
import bcrypt from 'bcrypt';
import { User } from '../../types/custome';

export const addUser = async (payload: User) => {
  const isAlredyUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  const passwordHash = await bcrypt.hash(payload.password, 10);

  const newPayload = {
    email: payload.email,
    username: payload.username,
    password: passwordHash
  }

  if (isAlredyUser) {
    throw new InvariantError('Email already exists!');
  }

  const response = await prisma.user.create({ data: newPayload })

  return response.id;
}