import { Router } from "express";
import Register from "./controllers/authController";
import Home from "./controllers/HomeController";

const routes = (router: Router) => {
  router.get("/", Home);
  router.post("/api/register", Register);
};

export default routes;
