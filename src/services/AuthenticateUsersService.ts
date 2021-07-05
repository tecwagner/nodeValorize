import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUsersService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //verificar se o email existe.
    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error("E-mail ou senha incorreto!");
    }

    //verificar se senha está correta.
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail ou senha incorreto!");
    }

    //gerar token
    const token = sign(
      {
        email: user.email,
      },
      "8a7bc5542aef50ca1ac70fba144ee4d6",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
    return token;
  }
}

export { AuthenticateUsersService };
