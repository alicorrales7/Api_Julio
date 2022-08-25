import { Request, Response } from "express";
import { Service } from "typedi";

import classValidator from "../middleware/validatorMiddleware";
import { User } from "../models/user";
import UserService from "../services/userService";
import Attributes from "../util/AttrController";
import { logger } from "../util/logger";

@Service()
class UserController {
  constructor(
    private userService: UserService,
    private attributes: Attributes
  ) {}

  async insertUser(req: Request, res: Response){
    const insert: User = req.body;
    const attr = this.attributes.attr(insert);
    console.log(attr)
    const instance = new classValidator(insert);
    const validate = await instance.validation(instance);
    if (validate === true) {
      
            const resultInsert = await this.userService.insertUser(insert);
            logger.info(
              "UserController insertUser called with login: " + insert.login
            );
            return res.status(201).json({ message: resultInsert });
          } else {
            logger.warn(
              "Problem to insert user, the problem is properties incomplete " +
                insert.login
            );
            return res.status(400).json({
              message: "Problem to insert user, user exists " + insert.login,
            });
          }
  }

  // async verifyUser(req: Request, res: Response) {
  //   const body: Verify = req.body;
  //   await this.cognito.verifyAccount(body.login, body.code).then((success) => {
  //     if (success) {
  //       logger.info("UserController verify user successfully: " + body.login);
  //       return res
  //         .status(201)
  //         .json({ message: "Verified successfully " + body.login });
  //     } else {
  //       logger.warn(
  //         "UserController verify user is not a valid code: " + body.code
  //       );
  //       return res
  //         .status(403)
  //         .json({ message: "Verified is not a valid code " + body.code });
  //     }
  //   });
  // }

  // async signIn(req: Request, res: Response){
  //   const body: User = req.body;
  //   await this.cognito.signInUser(body.login, body.password)
  //   .then((success) => {
  //     if (success) {
  //       res.status(200).json({ message: "User signed in successfully." });
  //       logger.info("User Controller SignIn user successfully: " + body.login);
  //     }else{
  //       res.status(403).json({ message: "User not signed in successfully." });
  //     };
  // })
  // }

  async findUser(req: Request, res: Response) {
    logger.info("User Controller Find All User " );
    const result = await this.userService.findUser()
    res.status(200).json(result);
      
  }
}
export default UserController;
    
