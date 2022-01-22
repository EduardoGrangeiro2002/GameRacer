import { Request, Response } from "express";
import { container } from "tsyringe";

import { createUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, email, password } = request.body;

    const CreateUserUseCase = container.resolve(createUserUseCase);

    await CreateUserUseCase.execute({ email, username, password });

    return response.status(201).send();
  }
}

export { CreateUserController };
