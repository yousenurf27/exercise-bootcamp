import Joi from 'joi';

export const PostUserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required()
})
