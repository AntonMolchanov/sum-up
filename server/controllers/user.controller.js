import UserModel from '../model/user.model.js';
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";


const mapReqUserToNew = (body) => ({
  name: body.name,
  email: body.email,
  password: body.password,
  days: [],
  pleasures: []
});

const saveUser = async (req, res) => {
  const {name, email, password} = res.body;
  if (!name || !email || !password) {
    res.status(422);
    res.send({
      message: "Invalid data. One of the required properties is missing: name, email, password."
    })
  } else {
    const userFromDB = await UserModel.findOne({email});
    if (!userFromDB) {
      const newUser = mapReqUserToNew({name, email, password});
      newUser.password = await bcrypt.hash(newUser.password, 10);
      
      const savedUser = await UserModel.create(newUser);
      
      res.send(savedUser);
    } else {
      res.status(409);
      res.send({
        message: 'User already exists'
      })
    }
  }
}

const loginUser = async (req, res) => {
  const userFromDB = await UserModel.findOne({
    email: req.body.email
  });
  
  if (userFromDB) {
    const isValidPassword = await bcrypt.compare(req.body.password, userFromDB.password);
    if (isValidPassword) {
      const payload = {
        _id: userFromDB._id,
        name: userFromDB.name,
        email: userFromDB.email,
      }
      let token = jwt.sign(payload, config.SECRET_KEY, {
        expiresIn: "2 days"
        // expiresIn: 60
      })
      res.send(token);
    } else {
      res.status(203);
      res.send({message: 'invalid password'})
    }
  } else {
    res.status(203);
    res.send({message: 'invalid email'})
  }
};

const getProfile = async (req, res) => {
  const decoded = jwt.verify(req.headers['authorization'], config.SECRET_KEY)
  
  const userFromDB = await UserModel.findOne({
    _id: decoded._id
  });
  
  if (userFromDB) {
    res.send(userFromDB)
  } else {
    res.status(404);
    req.send({message: 'there is no such user'})
  }
};

const UserController = {
  save: saveUser,
  login: loginUser,
  getProfile
}
export default UserController;