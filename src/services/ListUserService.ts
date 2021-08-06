import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const userRepositories = getCustomRepository(UsersRepositories);

    const users = await userRepositories.find();

    return classToPlain(users);
  }
}

export { ListUserService };
