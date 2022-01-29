import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../Error/AppError";
import { UserRepository } from "../modules/accounts/repositories/implemantations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("token is missing", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      "a730dfca6708cfce96ab6a507c7f20e1",
    ) as IPayload;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does no exists");
    }

    next();
  } catch {
    throw new AppError("Invalid token!");
  }
}
