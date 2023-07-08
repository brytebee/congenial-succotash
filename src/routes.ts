import { Router } from "express";
import { Register } from "./controller/authController";

export const routes = (routes: Router) => {
  routes.post("/api/register", Register);
};
