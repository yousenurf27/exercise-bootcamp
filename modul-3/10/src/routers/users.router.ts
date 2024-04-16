import { Router } from "express";
import UsersController from "../controllers/users.controller";
import validatorUsers from '../middlewares/validator/users'

export default class UsersRouter {
  private router: Router;
  private usersController: UsersController;

  constructor() {
    this.router = Router();
    this.usersController = new UsersController();
    this.initializationRoutes();
  }

  private initializationRoutes(): void {
    this.router.post(
      '/register',
      validatorUsers.validatePostUsersPayload,
      this.usersController.postUser
    );
  }

  getRouter(): Router {
    return this.router;
  }
}