import { Router } from "express";

import { authenticateRoutes } from "./authetication.routes";
import { userRouter } from "./User.routes";

const router = Router();

router.use("/users", userRouter);
router.use(authenticateRoutes);

export { router };
