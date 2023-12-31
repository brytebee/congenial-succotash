import { Joi } from "express-validation";

const RegisterValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8),
  password_confirm: Joi.string().required().min(8),
}).options({ abortEarly: false });

export default RegisterValidation;
