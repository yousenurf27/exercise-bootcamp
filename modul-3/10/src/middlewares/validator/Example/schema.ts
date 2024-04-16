import Joi from 'joi';

export const PostExamplePayloadSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().required()
})