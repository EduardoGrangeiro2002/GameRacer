import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../Error/AppError";
import { User } from "../../Entities/User";
import { IUserRepositories } from "../../repositories/IUserRepositories";

@injectable()
class findUserByUserNameUseCase {
  constructor(
    @inject("UserRepository")
    private UserRepositories: IUserRepositories,
  ) {}

  async execute(username: string): Promise<User> {
    const UsernameAlreadyExists =
      await this.UserRepositories.findUserByUsername(username);
    if (!UsernameAlreadyExists) {
      throw new AppError("User not Exists");
    }

    return UsernameAlreadyExists;
  }
}

export { findUserByUserNameUseCase };
