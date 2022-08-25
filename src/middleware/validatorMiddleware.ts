import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateOrReject,
} from "class-validator";
import { Service } from "typedi";

import { User } from "../models/user";

@Service()
class ValidatorUser {
  @IsNotEmpty()
  public readonly login: string;
  @IsString()
  public readonly name: string;
  @IsEmail()
  public readonly email: string;
  @IsString()
  public readonly password: string;
  @IsBoolean()
  public readonly surname: boolean;
  @IsString()
  public readonly addres: string;

  public readonly postalcode: number;
  @IsString()
  public readonly location: string;
  @IsString()
  public readonly state: string;
  @IsNumber()
  public readonly phone: number;
  @IsString()
  public readonly bank_account: string;

  constructor(obj: User) {
    (this.login = obj.login),
      (this.name = obj.name),
      (this.email = obj.email),
      (this.password = obj.password),
      (this.surname = obj.surname),
      (this.addres = obj.addres),
      (this.postalcode = obj.postalcode),
      (this.location = obj.location),
      (this.state = obj.state),
      (this.phone = obj.phone),
      (this.bank_account = obj.bank_account);
  }
  async validation(instance: ValidatorUser) {
    try {
      await validateOrReject(instance);
      return true;
    } catch (errors) {
      return { errors };
    }
  }
}

export default ValidatorUser;
