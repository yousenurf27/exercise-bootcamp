import { NextFunction, Request, Response } from 'express';
import InvariantError from '../exceptions/InvariantError';
import { ExampleService } from '../services/prisma/example.service';
import { Example } from '../types/custome';

export default class ExampleController {
  async getExampleData(req: Request, res: Response, next: NextFunction) {
    try {
      const { exampleId: id } = req.params;

      const example = await ExampleService.getExampleById(id)

      return res.status(200).send({
        status: 'success',
        data: {
          ...example
        }
      });
    } catch (error) {
      next(error)
    }
  }

  async addExampleData(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body as Example;

      const dataId = await ExampleService.addExample(payload);

      return res.status(200).send({
        status: 'success',
        message: 'Added example',
        data: {
          dataId
        }
      });
    } catch (error) {
      next(error);
    }
  }

  async addNewImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { file } = req;

      console.log(file);

      if (!file) throw new InvariantError('No file uploaded');

      return res
        .status(200)
        .send(`File ${file.filename} successfully uploaded`);
    } catch (error) {
      next(error);
    }
  }

  async addNewImages(req: Request, res: Response, next: NextFunction) {
    try {
      const { files } = req;

      if (!files?.length) throw new InvariantError('No file uploaded');

      return res.status(200).send('File successfully uploaded');
    } catch (error) {
      next(error);
    }
  }
}
