import express, { Request, Response } from "express";
import { Service } from "typedi";

import AuthMiddleware from "../middleware/authMiddleware";

@Service()
class ProtectController {
  public path = "/protected";
  public router = express.Router();
  public authMiddleware;

  constructor() {
    this.authMiddleware = new AuthMiddleware();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.use(this.authMiddleware.veryfyToken);
    this.router.get("/secret", this.home);
  }

  home(req: Request, res: Response) {
    res.json({ message: "the secret is cupcakes" });
  }
}

export default ProtectController;
