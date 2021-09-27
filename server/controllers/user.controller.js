import UserModel from "../model/user.model.js";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authHelpers, { getToken } from "../utils/authHelpers.js";
import config from "../config.js";

const mapReqUserToNew = (body) => ({
  name: body.name,
  email: body.email,
  password: body.password,
  days: [],
  pleasures: [],
});

const saveUser = async (req, res) => {
  const { name = "Unnamed user", email, password } = req.body;
  if (!name || !email || !password) {
    res.status(422);
    res.send({
      message:
        "Invalid data. One of the required properties is missing: name, email, password.",
    });
  } else {
    const userFromDB = await UserModel.findOne({ email });
    if (!userFromDB) {
      const newUser = mapReqUserToNew({ name, email, password });
      newUser.password = await bcrypt.hash(newUser.password, 10);

      const savedUser = await UserModel.create(newUser);

      res.send({
        token: getToken(savedUser),
        user: savedUser,
      });
    } else {
      res.status(409);
      res.send({
        message: "User already exists",
      });
    }
  }
};

const loginUser = async (req, res) => {
  const userFromDB = await UserModel.findOne({
    email: req.body.email,
  });

  if (userFromDB) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      userFromDB.password
    );
    if (isValidPassword) {
      res.send({
        token: getToken(userFromDB),
        data: userFromDB,
      });
    } else {
      res.status(203);
      res.send({ message: "invalid password" });
    }
  } else {
    res.status(203);
    res.send({ message: "invalid email" });
  }
};

const getProfile = async (req, res) => {
  const decoded = authHelpers.decode(req.headers["authorization"]);
  console.log(decoded)

  const userFromDB = await UserModel.findOne({
    _id: decoded._id,
  });

  if (userFromDB) {
    res.send(userFromDB);
  } else {
    res.status(404);
    req.send({ message: "there is no such user" });
  }
};

const UserController = {
  save: saveUser,
  login: loginUser,
  getProfile,
};
export default UserController;
