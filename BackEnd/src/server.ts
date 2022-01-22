import Express, { NextFunction, Request, Response } from "express";

import "express-async-errors";

import "./database";

import "./shared/container";

import { AppError } from "./Error/AppError";
import { router } from "./routes";

const app = Express();

const PORT = 3333;
app.use(Express.json());

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error ${err.message}`,
    });
  },
);

app.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
