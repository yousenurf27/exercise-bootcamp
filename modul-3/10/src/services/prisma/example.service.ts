import ClientError from '../../exceptions/ClientError';
import NotFoundError from '../../exceptions/NotFoundError';
import ExampleValidator from '../../middlewares/validator/Example';
import prisma from '../../prisma';
import { Example } from '../../types/custome';

export class ExampleService {
  static async getExampleById(id: string) {
    const response = await prisma.voucher.findFirst({
      where: {id: +id}
    })
  
    if (!response) {
      throw new NotFoundError('Voucher not found');
    }
  
    return response;
  }
  
  static async addExample(payload: Example) {
    const isError = ExampleValidator.validatePostExamplePayload(payload);
    
    if (isError) {
      throw isError
    }

    const response = await prisma.voucher.create({ data: payload });
  
    return response.id;
  }
}