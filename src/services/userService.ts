import { Service } from "typedi";

import { User } from "../models/user";
import UserRepository from "../repository/userRepository";
import { logger } from "../util/logger";

@Service()
class UserService {
  constructor(private userRepository: UserRepository) {}

  async insertUser(document: User) {
    const login = document.login;
    const resultInsertUser = this.userRepository.insert(document);
    logger.info("UserService, insertUser called for insert user: " + login);
    return resultInsertUser;
  }

  async findUser() {
    const resultFind = this.userRepository.findUser();
    logger.info("UserService, findUser called for find user ");
    return resultFind;
  }
}

export default UserService;
