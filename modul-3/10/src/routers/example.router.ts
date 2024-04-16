import { Router } from 'express';
import ExampleController from '../controllers/example.controller';
import ExampleValidator from '../middlewares/validator/Example';
import { uploader } from '../middlewares/uploader';

export default class ExampleRouter {
  private router: Router;
  private exampleController: ExampleController;

  constructor() {
    this.router = Router();
    this.exampleController = new ExampleController();
    this.initializationRoutes();
  }

  private initializationRoutes(): void {
    this.router.get('/:exampleId', this.exampleController.getExampleData);

    this.router.post(
      '/',
      // ExampleValidator.validatePostExamplePayload,
      this.exampleController.addExampleData
    );

    this.router.post(
      '/single-upload',
      uploader('IMG', '/images').single('file'),
      this.exampleController.addNewImage
    );

    this.router.post(
      '/multiple-upload',
      uploader('IMG', '/images').array('files', 3),
      this.exampleController.addNewImages
    );
  }

  getRouter(): Router {
    return this.router;
  }
}