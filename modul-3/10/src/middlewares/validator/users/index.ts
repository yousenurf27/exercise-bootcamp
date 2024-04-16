import { NextFunction, Request, Response } from 'express';
import { PostUserPayloadSchema } from './schema';
import InvariantError from '../../../exceptions/InvariantError';
import { User } from '../../../types/custome';

const UsersValidator = {
  validatePostUsersPayload: (req: Request, res: Response, next: NextFunction) => {
    const validationResult = PostUserPayloadSchema.validate(req.body as User);
    if (validationResult.error) {
      next(new InvariantError(validationResult.error.message));
    }
    next();
  }
}

export default UsersValidator;