import { Request, Response } from "express";

class authenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    return response.status(200).send();
  }
}

export { authenticateController };
