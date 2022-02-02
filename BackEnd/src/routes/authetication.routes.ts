import { Router } from "express";

import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { AuthenticateController } from "../modules/accounts/UseCase/authentication/authenticateController";
import { FindUserByUserNameController } from "../modules/accounts/UseCase/findUserByUserName/findUserByUserNameController";
import { ListUserController } from "../modules/accounts/UseCase/ListUser/ListUserController";

const authenticateRoutes = Router();

const authenticateController = new AuthenticateController();
const listUserController = new ListUserController();
const findUserByUserNameController = new FindUserByUserNameController();

authenticateRoutes.post("/sessions", authenticateController.handle);

authenticateRoutes.get(
  "/list",
  ensureAuthentication,
  listUserController.handle,
);

authenticateRoutes.get(
  "/username",
  ensureAuthentication,
  findUserByUserNameController.handle,
);

export { authenticateRoutes };
