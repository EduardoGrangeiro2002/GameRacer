import { Request, Response } from "express";
import { container } from "tsyringe";

import { authenticateUseCase } from "./authenticateUseCase";

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const AuthenticateUseCase = container.resolve(authenticateUseCase);

    const token = await AuthenticateUseCase.execute({ username, password });

    return response.json(token);
  }
}

export { AuthenticateController };
