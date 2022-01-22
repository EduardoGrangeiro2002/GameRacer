import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implemantations/UserRepository";
import { IUserRepositories } from "../../modules/accounts/repositories/IUserRepositories";

container.registerSingleton<IUserRepositories>(
  "UserRepository",
  UserRepository,
);
