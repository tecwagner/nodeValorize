import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  //receber  o token
  const authToken = req.headers.authorization;

  // validar token preenchido
  if (!authToken) {
    return resp.status(401).end();
  }

  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(
      token,
      "8a7bc5542aef50ca1ac70fba144ee4d6"
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (error) {
    return resp.status(401).end();
  }
}
