import { Router } from "express";

import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { AuthenticateController } from "../modules/accounts/UseCase/authentication/authenticateController";
import { FindUserByUserNameController } from "../modules/accounts/UseCase/findUserByUserName/findUserByUserNameController";
import { ListUserController } from "../modules/accounts/UseCase/ListUser/ListUserController";
import { TemplateController } from "../modules/templates/TemplatesController";

const authenticateRoutes = Router();

const authenticateController = new AuthenticateController();
const listUserController = new ListUserController();
const findUserByUserNameController = new FindUserByUserNameController();
const templateController = new TemplateController();

authenticateRoutes.post("/sessions", authenticateController.handle);

authenticateRoutes.get(
  "/list",
  ensureAuthentication,
  listUserController.handle,
);

authenticateRoutes.get(
  "/template",
  ensureAuthentication,
  templateController.handle,
);

authenticateRoutes.get(
  "/username",
  ensureAuthentication,
  findUserByUserNameController.handle,
);

export { authenticateRoutes };
