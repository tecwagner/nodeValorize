import { getCustomRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const { user_id } = req;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const admin = await usersRepositories.findOne(user_id);

  if (admin?.admin) {
    return next();
  }

  return resp.status(401).json({ error: "Não autorizado!" });
}
