import { prop } from "@typegoose/typegoose";

class Verify {
  @prop()
  login: string;

  @prop()
  code: string;
}

export default Verify;
