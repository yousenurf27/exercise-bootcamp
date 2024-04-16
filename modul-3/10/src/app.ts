import express, { json, Express, urlencoded, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

import ExampleRouter from './routers/example.router';
import ClientError from './exceptions/ClientError';
import UsersRouter from './routers/users.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.errorHandler();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private errorHandler(): void {
    this.app.use(
      (err: ClientError, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode).send({
          status: 'fail',
          message: err.message
        });
      }
    );
  }

  private routes(): void {
    const exampleRouter = new ExampleRouter();
    const usersRouter = new UsersRouter();

    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello, My API!');
    });
    
    this.app.use('/example', exampleRouter.getRouter());

    this.app.use('/user', usersRouter.getRouter())
  }

  public start(): void {
    this.app.listen(process.env.PORT, () => {
      console.log(`  ->  [API] Local:  http://localhost:${process.env.PORT}/`);
    })
  }
}
