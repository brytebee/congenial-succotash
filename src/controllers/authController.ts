import { Request, Response } from "express";
import RegisterValidation from "../validations/RegisterValidation";

const Register = (req: Request, res: Response) => {
  const body = req.body;

  const { error } = RegisterValidation.validate(body);

  if (error) {
    return res.send(error.details).status(400);
  }

  res.send(req.body);
};

export default Register;
