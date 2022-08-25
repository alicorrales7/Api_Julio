import express, { Application, Request, Response } from "express";
import { Container } from "typedi";

import UserController from "../controllers/userController";
import { logger } from "../util/logger";

export const userRoutes = (app: Application): void => {
  const userController = Container.get(UserController);

  app.use(express.json());

  app.post("/user", (req: Request, res: Response) => {
    userController.insertUser(req, res);
    logger.info("RouteUser post/user/insert User");
  });
 
  app.get("/user/findUser", (req: Request, res: Response) => {
    userController.findUser(req, res);
    logger.info("RouteUser post/user/find User");
  })
};
