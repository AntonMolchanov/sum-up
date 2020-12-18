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
  const userFromDB = await UserModel.findOne({email: req.body.email});
  if (!userFromDB) {
    const newUser = mapReqUserToNew(req.body);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    
    const savedUser = await UserModel.create(newUser);
    
    res.send(savedUser);
  } else {
    res.json({
      error: 'User already exists'
    })
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
        expiresIn: 1440
      })
      res.send(token);
    } else {
      res.error({message: 'invalid password'})
    }
  } else {
    res.error({message: 'invalid email'})
  }
}

const UserController = {
  save: saveUser,
  login: loginUser
}
export default UserController;