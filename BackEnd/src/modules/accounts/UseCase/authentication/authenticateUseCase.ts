import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../Error/AppError";
import { IUserRepositories } from "../../repositories/IUserRepositories";

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
    email: string;
  };
  token: string;
}

@injectable()
class authenticateUseCase {
  constructor(
    @inject("UserRepository")
    private UserRepository: IUserRepositories,
  ) {}

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.UserRepository.findUserByUsername(username);
    if (!user) {
      throw new AppError("Username or password  incorrect");
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Username or password  incorrect");
    }

    const token = sign({}, "a730dfca6708cfce96ab6a507c7f20e1", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        username: user.username,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { authenticateUseCase };
