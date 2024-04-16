import { NextFunction, Request, Response } from 'express';
import { PostExamplePayloadSchema } from './schema';
import InvariantError from '../../../exceptions/InvariantError';
import { Example } from '../../../types/custome';

const ExampleValidator = {
  validatePostExamplePayload: (payload: Example) => {
    const validationResult = PostExamplePayloadSchema.validate(payload);
    if (validationResult.error) {
      return new InvariantError(validationResult.error.message);
    }
  }
}

export default ExampleValidator;
