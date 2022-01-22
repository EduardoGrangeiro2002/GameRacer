import { Router } from "express";

import { CreateUserController } from "../modules/accounts/UseCase/createUser/CreateUserController";
import { ListUserController } from "../modules/accounts/UseCase/ListUser/ListUserController";

const userRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRouter.post("/", createUserController.handle);

userRouter.get("/", listUserController.handle);

export { userRouter };
