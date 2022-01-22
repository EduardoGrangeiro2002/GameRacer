import { Request, Response } from "express";
import { container } from "tsyringe";

import { findUserByUserNameUseCase } from "./findUserByUserNameUseCase";

class FindUserByUserNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.body;

    const FindUserByUserNameUseCase = container.resolve(
      findUserByUserNameUseCase,
    );
    const user = await FindUserByUserNameUseCase.execute(username);

    return response.json(user);
  }
}

export { FindUserByUserNameController };
