import { getRepository, Repository } from "typeorm";

import { User } from "../../Entities/User";
import { IUserRepositories, IUserRepositoriesDTO } from "../IUserRepositories";

class UserRepository implements IUserRepositories {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const User = await this.repository.findOne({ email });

    return User as User;
  }
  async createUser({
    email,
    username,
    password,
  }: IUserRepositoriesDTO): Promise<void> {
    const User = this.repository.create({ email, username, password });

    await this.repository.save(User);
  }
  async listAllUsers(): Promise<User[]> {
    return this.repository.createQueryBuilder("users").getMany();
  }

  async findUserByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user as User;
  }
}

export { UserRepository };
