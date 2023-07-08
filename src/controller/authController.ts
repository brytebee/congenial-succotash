import { Request, Response } from "express";
import { RegisterValidation } from "../validation/registerValidation";

export const Register = (req: Request, res: Response) => {
  const body = req.body;

  const { error } = RegisterValidation.validate(body);

  if (error) {
    return res.send(error.details).status(400);
  }

  res.send(body);
};
