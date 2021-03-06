import { User } from "../Entities/User";

interface IUserRepositoriesDTO {
  email: string;
  username: string;
  password: string;
}

interface IUserRepositories {
  findByEmail(email: string): Promise<User>;
  createUser({
    email,
    username,
    password,
  }: IUserRepositoriesDTO): Promise<void>;

  listAllUsers(): Promise<User[]>;

  findUserByUsername(username: string): Promise<User>;

  findById(id: string): Promise<User>;
}

export { IUserRepositories, IUserRepositoriesDTO };
