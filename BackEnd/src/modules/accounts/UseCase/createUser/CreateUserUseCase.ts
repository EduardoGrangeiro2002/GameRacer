import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../Error/AppError";
import {
  IUserRepositories,
  IUserRepositoriesDTO,
} from "../../repositories/IUserRepositories";

@injectable()
class createUserUseCase {
  constructor(
    @inject("UserRepository")
    private UserRepository: IUserRepositories,
  ) {}

  async execute({
    email,
    username,
    password,
  }: IUserRepositoriesDTO): Promise<void> {
    const UserAlreadyExists = await this.UserRepository.findByEmail(email);

    if (UserAlreadyExists) {
      throw new AppError("Email already exist");
    }

    const passwordHash = await hash(password, 8);

    this.UserRepository.createUser({
      email,
      username,
      password: passwordHash,
    });
  }
}

export { createUserUseCase };
