import { inject, injectable } from "tsyringe";

import { User } from "../../Entities/User";
import { IUserRepositories } from "../../repositories/IUserRepositories";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private UserRepositories: IUserRepositories,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.UserRepositories.listAllUsers();

    return users;
  }
}

export { ListUserUseCase };
