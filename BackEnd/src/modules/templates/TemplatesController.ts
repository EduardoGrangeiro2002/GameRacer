import { Request, Response } from "express";

import { TemplatesUseCase } from "./TemplatesUseCase";

class TemplateController {
  handle(request: Request, response: Response) {
    const templatesUseCase = new TemplatesUseCase();

    const data = templatesUseCase.execute();

    response.send(data);
  }
}

export { TemplateController };
