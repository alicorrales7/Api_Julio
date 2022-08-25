import { User, userModel } from "../../../src/models/user";
import UserRepository from "../../../src/repository/userRepository";

const user: User = {
  login: "acorrales",
  name: "Ali Corrales",
  email: "alicorrales@gmail.com",
  password: "12345678",
  surname: true,
  addres: "601 NW 68 ST Virginia",
  postalcode: 555,
  location: "West Virginia",
  state: "Florida",
  phone: 2567634329,
  bank_account: "KB242566",
};

describe("UserRepository", () => {
  it("should error message", async () => {
    userModel.find = jest.fn().mockResolvedValue([user]);
    userModel.insertMany = jest.fn().mockResolvedValue(user);
    const userRepo = new UserRepository();
    await userRepo.insert(user);
    expect.objectContaining({ message: expect.stringContaining("Login") });
  });
  it("should return Login", async () => {
    userModel.find = jest.fn().mockResolvedValue([]);
    userModel.insertMany = jest.fn().mockResolvedValue(user);
    const userRepo = new UserRepository();
    await userRepo.insert(user);
    expect(userModel.insertMany).toBeCalledWith(user);
  });
});
