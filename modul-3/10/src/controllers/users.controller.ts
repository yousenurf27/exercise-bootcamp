import { NextFunction, Request, Response } from 'express';
import { User } from '../types/custome';
import { addUser } from '../services/prisma/users.service';

export default class UsersController {
  async postUser(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body as User;

      const userId = await addUser(payload);

      return res.status(200).send({
        status: 'success',
        message: 'Successfully added user',
        data: {
          userId,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}