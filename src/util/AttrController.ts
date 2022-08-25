import { Service } from "typedi";

import { User } from "../models/user";

@Service()
class Attributes {
  name: string;
  email: string;
  surname: boolean;
  addres: string;
  postalcode: number;
  location: string;
  state: string;
  phone: number;
  bank_account: string;

  attr(obj: User) {
    this.name = obj.name;
    this.email = obj.email;
    this.surname = obj.surname;
    this.addres = obj.addres;
    this.postalcode = obj.postalcode;
    this.location = obj.location;
    this.state = obj.state;
    this.phone = obj.phone;
    this.bank_account = obj.bank_account;

    const userAttr = [];

    userAttr.push({ Name: "nickname", Value: this.name });
    userAttr.push({ Name: "email", Value: this.email });

    return userAttr;
  }
}

export default Attributes;
