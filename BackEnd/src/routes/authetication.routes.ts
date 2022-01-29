import { Router } from "express";

import { AuthenticateController } from "../modules/accounts/UseCase/authentication/authenticateController";

const authenticateRoutes = Router();

const authenticateController = new AuthenticateController();

authenticateRoutes.post("/sessions", authenticateController.handle);

export { authenticateRoutes };
