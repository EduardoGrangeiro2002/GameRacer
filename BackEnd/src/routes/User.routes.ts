import { Router } from "express";

import { CreateUserController } from "../modules/accounts/UseCase/createUser/CreateUserController";

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post("/", createUserController.handle);

userRouter.get("/", () => {
  console.log("teste");
});

export { userRouter };
