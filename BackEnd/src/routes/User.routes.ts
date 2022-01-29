import { Router } from "express";

import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { CreateUserController } from "../modules/accounts/UseCase/createUser/CreateUserController";
import { FindUserByUserNameController } from "../modules/accounts/UseCase/findUserByUserName/findUserByUserNameController";
import { ListUserController } from "../modules/accounts/UseCase/ListUser/ListUserController";

const userRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const findUserByUserNameController = new FindUserByUserNameController();
userRouter.use(ensureAuthentication);
userRouter.post("/", createUserController.handle);

userRouter.get("/", listUserController.handle);

userRouter.get("/username", findUserByUserNameController.handle);

export { userRouter };
