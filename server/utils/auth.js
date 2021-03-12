import jwt from "jsonwebtoken";
import UserModel from "../model/user.model.js";
import config from "../config.js";

const freeOfAuth = ["/api/users/login", "/api/users"];

export default async (req, res, next) => {
  if (!freeOfAuth.some((url) => url === req.baseUrl)) {
    if (req.headers["authorization"]) {
      jwt.verify(
        req.headers["authorization"],
        config.SECRET_KEY,
        {},
        async (err, decoded) => {
          if (err) {
            res.status(403);
            res.send({ message: "permission denied" });
          }
          const { name, email } = decoded;
          const userFromDB = await UserModel.findOne({
            name,
            email,
          });

          if (userFromDB) {
            next();
          } else {
            res.status(403);
            res.send({ message: "permission denied" });
          }
        }
      );
    } else {
      res.status(403);
      res.send({ message: "permission denied" });
    }
  } else {
    next();
  }
};
